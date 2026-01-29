package scraper

import "testing"

func TestWorker_Scraper(t *testing.T) {
	s := &Scraper{}
	s.Worker("https://www.aljazeera.com/xml/rss/all.xml")
}
