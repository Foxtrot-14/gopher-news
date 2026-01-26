package main

import (
	"fmt"
	"os"

	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

type tab int

const (
	tabDate tab = iota
	tabList
	tabDetail
)

type model struct {
	width     int
	height    int
	activeTab tab
	Code      viewport.Model
}

const logo = "Gopher-News"

var (
	colorCyan   = lipgloss.Color("#00FFF3")
	colorPink   = lipgloss.Color("#F300FF")
	colorYellow = lipgloss.Color("#FFF300")
)

var (
	logoStyle = lipgloss.NewStyle().
			Foreground(colorCyan).
			Bold(true)

	activeTabStyle = lipgloss.NewStyle().
			Bold(true).
			Foreground(colorPink).
			Padding(0, 2)

	inactiveTabStyle = lipgloss.NewStyle().
				Foreground(colorYellow).
				Padding(0, 2)

	contentStyle = lipgloss.NewStyle().
			Align(lipgloss.Center)

	helpStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FFFFFF")).
			Align(lipgloss.Center)
)

func (m model) Init() tea.Cmd {
	return nil
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {

	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height
		m.Code.Width = msg.Width / 2
		m.Code.Height = msg.Height / 3

	case tea.KeyMsg:
		switch msg.String() {
		case "1":
			m.activeTab = tabDate
		case "2":
			m.activeTab = tabList
		case "3":
			m.activeTab = tabDetail
		case "q", "ctrl+c":
			return m, tea.Quit
		}
	}

	return m, nil
}

func (m model) tabsView() string {
	tabs := []struct {
		label string
		tab   tab
	}{
		{"Date", tabDate},
		{"List", tabList},
		{"Detail", tabDetail},
	}

	var rendered []string
	for _, t := range tabs {
		if t.tab == m.activeTab {
			rendered = append(rendered, activeTabStyle.Render(t.label))
		} else {
			rendered = append(rendered, inactiveTabStyle.Render(t.label))
		}
	}

	return lipgloss.JoinHorizontal(lipgloss.Top, rendered...)
}

func (m model) tabContentView() string {
	switch m.activeTab {
	case tabDate:
		return contentStyle.Render(
			"📅 DATE TAB\n\n" +
				"Show news by date here",
		)
	case tabList:
		return contentStyle.Render(
			"📜 LIST TAB\n\n" +
				"List of news items goes here",
		)
	case tabDetail:
		return contentStyle.Render(
			"📰 DETAIL TAB\n\n" +
				"News article details appear here",
		)
	}
	return ""
}

func (m model) View() string {
	logoRendered := logoStyle.Render(logo)

	tabsRendered := m.tabsView()

	header := lipgloss.JoinHorizontal(lipgloss.Top, logoRendered, "  ", tabsRendered)

	contentRendered := m.tabContentView()

	help := helpStyle.Render("1–3 switch tabs • q to quit")

	ui := lipgloss.JoinVertical(
		lipgloss.Left,
		header,
		"",
		contentRendered,
		"",
		help,
	)

	return lipgloss.Place(
		m.width,
		m.height,
		lipgloss.Center,
		lipgloss.Center,
		ui,
	)
}

func main() {
	m := model{
		activeTab: tabDate,
		Code:      viewport.New(0, 0),
	}

	p := tea.NewProgram(m, tea.WithAltScreen())

	if _, err := p.Run(); err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
}
