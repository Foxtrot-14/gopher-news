package scraper

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func NewScraper(EMChan chan string, db *sql.DB) (*Scraper, error) {
	return &Scraper{
		DB:     db,
		EMChan: EMChan,
	}, nil
}
