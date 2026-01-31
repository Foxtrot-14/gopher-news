package models

import (
	"fmt"

	"github.com/Foxtrot-14/gopher-news/styles"
	"github.com/charmbracelet/lipgloss"
)

type Tab int

const (
	DateTab Tab = iota
	ListTab
	DetailTab
)

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
		if i == m.selectedStory {
			items = append(items, styles.ActiveTab.Render("▶ "+story.Title))
		} else {
			items = append(items, styles.ContentBody.Render("  "+story.Title))
		}
	}

	return lipgloss.JoinVertical(lipgloss.Left, items...)
}
