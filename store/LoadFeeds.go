package store

import (
	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) LoadFeeds() (bool, error) {
	if err := InitSchemaFromFS(
		s.DB,
		schema.SchemaFS,
		"Create_Feeds_Table.sql",
		"Create_News_Table.sql",
		"Create_News_Embeddings.sql",
		"Create_Centroid.sql",
	); err != nil {
		return false, err
	}

	var count int
	err := s.DB.QueryRow(`SELECT COUNT(*) FROM feeds`).Scan(&count)
	if err != nil {
		return false, err
	}

	if count == 0 {
		feeds := []struct {
			Name string
			URL  string
		}{
			{"Al Jazeera", "https://www.aljazeera.com/xml/rss/all.xml"},
			{"New York Times", "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"},
			{"Live Mint", "https://www.livemint.com/rss/news"},
			{"Times of India", "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"},
			{"The Hindu", "https://www.thehindu.com/feeder/default.rss"},
		}

		for _, feed := range feeds {
			if err := AddToFeed(
				s.DB,
				schema.SchemaFS,
				"Add_To_Feeds.sql",
				feed.Name,
				feed.URL,
			); err != nil {
				return false, err
			}
		}
	}
	return true, nil
}
