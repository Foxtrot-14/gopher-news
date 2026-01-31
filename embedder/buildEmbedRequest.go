package embedder

import "encoding/json"

func buildEmbedRequest(stories []Story) ([]byte, error) {
	items := make([]embedItem, 0, len(stories))

	for _, s := range stories {
		items = append(items, embedItem{
			ID:   s.ID,
			Text: s.Title + " " + s.Description,
		})
	}

	return json.Marshal(embedRequest{Items: items})
}
