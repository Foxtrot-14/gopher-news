package scraper

import (
	"database/sql"
	"os"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

const dbPath = "data/gopher-news.db"

func NewScraper() (*Scraper, error) {
	if err := os.MkdirAll(filepath.Dir(dbPath), 0o755); err != nil {
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
			"https://news.google.com/rss/search?q=site%3Areuters.com&hl=en-US&gl=US&ceid=US%3Aen",
			"https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
			"https://www.thehindu.com/feeder/default.rss",
		}

		for _, url := range feeds {
			if err := AddToFeed(db, "../db/Add_To_Feeds.sql", url); err != nil {
				return nil, err
			}
		}
	}

	return &Scraper{DB: db}, nil
}
