package scraper

import "database/sql"

type ScraperInterface interface {
	StartScraper()
	Worker()
}

type Scraper struct {
	DB     *sql.DB
	Feed   []string
	EMChan chan string
}
