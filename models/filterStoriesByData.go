package models

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
