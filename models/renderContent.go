package models

import "github.com/Foxtrot-14/gopher-news/styles"

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
