package styles

import "github.com/charmbracelet/lipgloss"

var (
	colorText   = lipgloss.Color("#000000")
	colorCyan   = lipgloss.Color("#00FFF3")
	colorYellow = lipgloss.Color("#F7D008")
	colorPink   = lipgloss.Color("#F300FF")
	colorMuted  = lipgloss.Color("#888888")
)

var Logo = lipgloss.NewStyle().
	Foreground(colorText).
	Bold(true).
	Background(colorCyan).
	Padding(0, 2)

var ActiveTab = lipgloss.NewStyle().
	Foreground(colorText).
	Bold(true).
	Background(colorPink).
	Padding(0, 2)

var InactiveTab = lipgloss.NewStyle().
	Foreground(colorText).
	Background(colorMuted).
	Padding(0, 2)

var Content = lipgloss.NewStyle().
	Foreground(colorText).
	Padding(1, 2).
	Border(lipgloss.NormalBorder()).
	BorderForeground(colorCyan)

var TitleStyle = lipgloss.NewStyle().
	Foreground(colorPink).
	Bold(true).
	Padding(1, 2)

var SubTitleStyle = lipgloss.NewStyle().
	Foreground(colorYellow).
	Bold(true).
	Margin(1)

var ContentTitle = lipgloss.NewStyle().
	Foreground(colorText).
	Bold(true).
	Background(colorCyan).
	Padding(0, 1)

var ContentBody = lipgloss.NewStyle().
	Foreground(colorText)

var Help = lipgloss.NewStyle().
	Foreground(colorMuted).
	PaddingTop(1).
	Align(lipgloss.Center)
