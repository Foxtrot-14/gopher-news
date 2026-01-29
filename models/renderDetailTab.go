package models

import (
	"fmt"

	"github.com/Foxtrot-14/gopher-news/styles"
	"github.com/charmbracelet/lipgloss"
)

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
	items = append(items, styles.ContentBody.Render(fmt.Sprintf("📅 %s", story.Date.Format("Monday, January 2, 2006 at 3:04 PM"))))
	items = append(items, styles.SubTitleStyle.Render("Description:"))
	items = append(items, styles.ContentBody.Render(story.Description))

	return lipgloss.JoinVertical(lipgloss.Left, items...)
}
