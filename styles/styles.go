package styles

import "github.com/charmbracelet/lipgloss"

var (
	colorText   = lipgloss.Color("#FFFFFF")
	colorRed    = lipgloss.Color("#E61952")
	colorYellow = lipgloss.Color("#F7D008")
	colorPink   = lipgloss.Color("#F300FF")
	colorMuted  = lipgloss.Color("#888888")
)

var Logo = lipgloss.NewStyle().
	Foreground(colorText).
	Bold(true).
	Background(colorRed).
	Padding(0, 2)

var ActiveTab = lipgloss.NewStyle().
	Bold(true).
	Foreground(lipgloss.Color("229")).
	Background(lipgloss.Color("62")).
	Padding(0, 2).
	Border(lipgloss.NormalBorder(), false, false, true, false)

var InactiveTab = lipgloss.NewStyle().
	Foreground(lipgloss.Color("245")).
	Padding(0, 2)

var ActiveRow = lipgloss.NewStyle().
	Foreground(lipgloss.Color("229")).
	Background(lipgloss.Color("236")).
	Padding(0, 1)

var Muted = lipgloss.NewStyle().
	Foreground(lipgloss.Color("241")).
	Italic(true)

var Content = lipgloss.NewStyle().
	Foreground(colorText).
	Padding(1, 2).
	Border(lipgloss.NormalBorder()).
	BorderForeground(colorRed)

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
	Background(colorRed).
	Padding(0, 1)

var ContentBody = lipgloss.NewStyle().
	Foreground(colorText)

var Help = lipgloss.NewStyle().
	Foreground(lipgloss.Color("242")).
	Align(lipgloss.Center).
	PaddingTop(1)

var AppContainer = lipgloss.NewStyle().
	Padding(1, 2).
	Border(lipgloss.RoundedBorder()).
	BorderForeground(lipgloss.Color("62"))

var DetailCard = lipgloss.NewStyle().
	Padding(1, 2).
	Border(lipgloss.RoundedBorder()).
	BorderForeground(lipgloss.Color("240"))
