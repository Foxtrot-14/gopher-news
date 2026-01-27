package models

import (
	"fmt"

	"github.com/Foxtrot-14/gopher-news/styles"
	"github.com/charmbracelet/lipgloss"
)

func (m ParentModel) renderDateTab() string {
	var items []string
	items = append(items,
		styles.ContentTitle.Render("Select a Date"),
		styles.Muted.Render("Pick a day to explore top stories"),
		"",
	)
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
			items = append(items, styles.ActiveRow.Render("▌ "+line))
		} else {
			items = append(items, styles.ContentBody.Render("  "+line))
		}
	}

	return lipgloss.JoinVertical(lipgloss.Left, items...)
}
