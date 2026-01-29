package scraper

type ScraperInterface interface {
	GetFeedList()
	StartScraper()
	Worker()
}

type Scraper struct {
	DBPath string
	Feed   []string
}

func NewScraper(DBPath string) *Scraper {
	return &Scraper{
		DBPath: DBPath,
	}
}
