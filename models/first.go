package models

import (
	"github.com/Foxtrot-14/gopher-news/styles"
	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

type ParentModel struct {
	Code viewport.Model
}

func NewParentModel() ParentModel {
	return ParentModel{
		Code: viewport.New(0, 0),
	}
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
		if msg.String() == "q" {
			return m, tea.Quit
		}
	}
	return m, nil
}

func (m ParentModel) View() string {
	title := styles.TitleStyle.Render("Gopher News")

	header := lipgloss.Place(
		m.Code.Width,
		1,
		lipgloss.Center,
		lipgloss.Center,
		title,
	)

	subtitle := lipgloss.PlaceHorizontal(
		m.Code.Width,
		lipgloss.Center,
		"Stay Updated without Leaving your Terminal",
	)

	tabs := []string{"Date", "List", "Detail"}

	tabWidth := m.Code.Width / len(tabs)

	var tabViews []string
	for _, t := range tabs {
		tabViews = append(tabViews,
			lipgloss.Place(tabWidth, 1, lipgloss.Center, lipgloss.Center, styles.ContentTitle.Render(t)),
		)
	}

	tabsRow := lipgloss.JoinHorizontal(lipgloss.Top, tabViews...)

	return lipgloss.JoinVertical(
		lipgloss.Top,
		header,
		subtitle,
		tabsRow,
	)
}
