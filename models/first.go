package models

import (
	"fmt"
	"time"

	"github.com/Foxtrot-14/gopher-news/styles"
	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

type Tab int

const (
	DateTab Tab = iota
	ListTab
	DetailTab
)

type Story struct {
	ID          int
	Title       string
	URL         string
	Author      string
	Points      int
	Comments    int
	Date        time.Time
	Description string
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
		tabs:            []string{"Date", "List", "Detail"},
		dates:           dates,
		stories:         stories,
		selectedDate:    0,
		selectedStory:   0,
		filteredStories: []Story{},
	}

	m.filterStoriesByDate()

	return m
}

func (m *ParentModel) filterStoriesByDate() {
	m.filteredStories = []Story{}
	selectedDate := m.dates[m.selectedDate]

	for _, story := range m.stories {
		if story.Date.Year() == selectedDate.Year() &&
			story.Date.Month() == selectedDate.Month() &&
			story.Date.Day() == selectedDate.Day() {
			m.filteredStories = append(m.filteredStories, story)
		}
	}

	m.selectedStory = 0
}

func (m ParentModel) Init() tea.Cmd {
	return nil
}

func (m ParentModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		m.Code.Width = msg.Width
		m.Code.Height = msg.Height

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
	title := styles.TitleStyle.Render(logo)
	header := lipgloss.Place(
		m.Code.Width,
		1,
		lipgloss.Left,
		lipgloss.Left,
		title,
	)

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
		header,
		tabsRow,
		content,
		help,
	)
}

func (m ParentModel) renderContent() string {
	contentHeight := m.Code.Height - 6
	if contentHeight < 1 {
		contentHeight = 10
	}

	var content string

	switch m.activeTab {
	case DateTab:
		content = m.renderDateTab()
	case ListTab:
		content = m.renderListTab()
	case DetailTab:
		content = m.renderDetailTab()
	}

	return styles.Content.
		Width(m.Code.Width - 4).
		Height(contentHeight).
		Render(content)
}

func (m ParentModel) renderDateTab() string {
	var items []string
	items = append(items, styles.ContentTitle.Render("Select a Date"))
	items = append(items, "")

	for i, date := range m.dates {
		dateStr := date.Format("Monday, January 2, 2006")

		count := 0
		for _, story := range m.stories {
			if story.Date.Year() == date.Year() &&
				story.Date.Month() == date.Month() &&
				story.Date.Day() == date.Day() {
				count++
			}
		}

		line := fmt.Sprintf("%s (%d stories)", dateStr, count)

		if i == m.selectedDate {
			items = append(items, styles.ActiveTab.Render("▶ "+line))
		} else {
			items = append(items, styles.ContentBody.Render("  "+line))
		}
	}

	return lipgloss.JoinVertical(lipgloss.Left, items...)
}

func (m ParentModel) renderListTab() string {
	var items []string

	if len(m.filteredStories) == 0 {
		items = append(items, styles.ContentTitle.Render("Story List"))
		items = append(items, "")
		items = append(items, styles.ContentBody.Render("No stories found for the selected date."))
		return lipgloss.JoinVertical(lipgloss.Left, items...)
	}

	selectedDate := m.dates[m.selectedDate]
	items = append(items, styles.ContentTitle.Render(
		fmt.Sprintf("Stories for %s", selectedDate.Format("Jan 2, 2006")),
	))
	items = append(items, "")

	for i, story := range m.filteredStories {
		line := fmt.Sprintf("%s (%d points, %d comments)",
			story.Title, story.Points, story.Comments)

		if i == m.selectedStory {
			items = append(items, styles.ActiveTab.Render("▶ "+line))
		} else {
			items = append(items, styles.ContentBody.Render("  "+line))
		}
	}

	return lipgloss.JoinVertical(lipgloss.Left, items...)
}

func (m ParentModel) renderDetailTab() string {
	var items []string

	if len(m.filteredStories) == 0 || m.selectedStory >= len(m.filteredStories) {
		items = append(items, styles.ContentTitle.Render("Story Details"))
		items = append(items, "")
		items = append(items, styles.ContentBody.Render("No story selected."))
		return lipgloss.JoinVertical(lipgloss.Left, items...)
	}

	story := m.filteredStories[m.selectedStory]

	items = append(items, styles.ContentTitle.Render(story.Title))
	items = append(items, "")
	items = append(items, styles.SubTitleStyle.Render(fmt.Sprintf("By %s", story.Author)))
	items = append(items, styles.ContentBody.Render(fmt.Sprintf("URL: %s", story.URL)))
	items = append(items, "")
	items = append(items, styles.ContentBody.Render(fmt.Sprintf("📊 %d points  💬 %d comments", story.Points, story.Comments)))
	items = append(items, styles.ContentBody.Render(fmt.Sprintf("📅 %s", story.Date.Format("Monday, January 2, 2006 at 3:04 PM"))))
	items = append(items, "")
	items = append(items, styles.SubTitleStyle.Render("Description:"))
	items = append(items, styles.ContentBody.Render(story.Description))

	return lipgloss.JoinVertical(lipgloss.Left, items...)
}

func (m ParentModel) getHelpText() string {
	switch m.activeTab {
	case DateTab:
		return "↑/↓: Navigate • Enter: Select • Tab: Next Tab • 1-3: Jump to Tab • q: Quit"
	case ListTab:
		return "↑/↓: Navigate • Enter: View Details • Tab: Next Tab • 1-3: Jump to Tab • q: Quit"
	case DetailTab:
		return "Tab: Next Tab • 1-3: Jump to Tab • q: Quit"
	default:
		return "Tab: Next Tab • 1-3: Jump to Tab • q: Quit"
	}
}
