package scraper

import "database/sql"

type ScraperInterface interface {
	GetFeedList()
	StartScraper()
	Worker()
}

type Scraper struct {
	DB     *sql.DB
	Feed   []string
	EMChan chan string
}

func NewScraper(DB *sql.DB) *Scraper {
	return &Scraper{
		DB: DB,
	}
}
