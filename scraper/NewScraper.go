package scraper

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func NewScraper(EMChan chan string) (*Scraper, error) {
	dbPath, err := GetDBPath()
	if err != nil {
		return nil, err
	}

	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, err
	}

	if err := InitSchemaFromFile(
		db,
		"../db/Create_Feeds_Table.sql",
		"../db/Create_News_Table.sql",
		"../db/Create_News_Embeddings.sql",
		"../db/Create_Centroid.sql",
	); err != nil {
		return nil, err
	}

	var count int
	err = db.QueryRow(`SELECT COUNT(*) FROM feeds`).Scan(&count)
	if err != nil {
		return nil, err
	}

	if count == 0 {
		feeds := []string{
			"https://www.aljazeera.com/xml/rss/all.xml",
			"https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
			"https://www.livemint.com/rss/news",
			"https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
			"https://www.thehindu.com/feeder/default.rss",
		}

		for _, url := range feeds {
			if err := AddToFeed(db, "../db/Add_To_Feeds.sql", url); err != nil {
				return nil, err
			}
		}
	}

	return &Scraper{
		DB:     db,
		EMChan: EMChan,
	}, nil
}
