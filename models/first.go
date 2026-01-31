package models

import (
	"time"

	"github.com/Foxtrot-14/gopher-news/styles"
	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

type Story struct {
	GUID        string
	Title       string
	Description string
	Link        string
	Date        time.Time
	Source      string
	Creator     string
}

type ParentModel struct {
	Code            viewport.Model
	activeTab       Tab
	tabs            []string
	dates           []time.Time
	stories         []Story
	selectedDate    int
	selectedStory   int
	filteredStories []Story
}

func NewParentModel() ParentModel {
	now := time.Now()
	dates := []time.Time{
		now,
		now.AddDate(0, 0, -1),
		now.AddDate(0, 0, -2),
		now.AddDate(0, 0, -3),
	}

	m := ParentModel{
		Code:            viewport.New(0, 0),
		activeTab:       DateTab,
		tabs:            []string{"📅 Date", "📰 List", "🔍 Detail"},
		dates:           dates,
		selectedDate:    0,
		selectedStory:   0,
		filteredStories: []Story{},
	}

	m.filterStoriesByDate()

	return m
}

func (m ParentModel) Init() tea.Cmd {
	return loadStoriesCmd()
}

type storiesLoadedMsg []Story

func loadStoriesCmd() tea.Cmd {
	return func() tea.Msg {
		stories, err := getStories()
		if err != nil {
			return err
		}
		return storiesLoadedMsg(stories)
	}
}

func (m ParentModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case storiesLoadedMsg:
		m.stories = msg
		m.filterStoriesByDate()
		return m, nil
	case tea.WindowSizeMsg:
		m.Code.Width = msg.Width
		m.Code.Height = msg.Height - 2

	case tea.KeyMsg:
		switch msg.String() {
		case "q", "ctrl+c":
			return m, tea.Quit

		case "tab":
			m.activeTab = (m.activeTab + 1) % Tab(len(m.tabs))

		case "shift+tab":
			m.activeTab = (m.activeTab - 1 + Tab(len(m.tabs))) % Tab(len(m.tabs))

		case "1":
			m.activeTab = DateTab

		case "2":
			m.activeTab = ListTab

		case "3":
			m.activeTab = DetailTab

		case "up", "k":
			switch m.activeTab {
			case DateTab:
				if m.selectedDate > 0 {
					m.selectedDate--
					m.filterStoriesByDate()
				}
			case ListTab:
				if m.selectedStory > 0 {
					m.selectedStory--
				}
			}

		case "down", "j":
			switch m.activeTab {
			case DateTab:
				if m.selectedDate < len(m.dates)-1 {
					m.selectedDate++
					m.filterStoriesByDate()
				}
			case ListTab:
				if m.selectedStory < len(m.filteredStories)-1 {
					m.selectedStory++
				}
			}

		case "enter":
			switch m.activeTab {
			case DateTab:
				m.activeTab = ListTab
			case ListTab:
				m.activeTab = DetailTab
			}
		}
	}

	return m, nil
}

func (m ParentModel) View() string {
	tabWidth := m.Code.Width / len(m.tabs)
	var tabViews []string

	for i, t := range m.tabs {
		var style lipgloss.Style
		if Tab(i) == m.activeTab {
			style = styles.ActiveTab
		} else {
			style = styles.InactiveTab
		}

		tabView := lipgloss.Place(
			tabWidth,
			1,
			lipgloss.Center,
			lipgloss.Center,
			style.Render(t),
		)
		tabViews = append(tabViews, tabView)
	}

	tabsRow := lipgloss.JoinHorizontal(lipgloss.Top, tabViews...)

	content := m.renderContent()

	helpText := m.getHelpText()
	help := styles.Help.Width(m.Code.Width).Render(helpText)

	return lipgloss.JoinVertical(
		lipgloss.Top,
		tabsRow,
		content,
		help,
	)
}
