package models

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
