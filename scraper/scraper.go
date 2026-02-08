package scraper

import "database/sql"

type ScraperInterface interface {
	StartScraper()
	Worker()
}

type Scraper struct {
	DB     *sql.DB
	EMChan chan<- string
}
