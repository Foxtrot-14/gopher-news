package scraper

import "testing"

func TestWorker_Scraper(t *testing.T) {
	s := &Scraper{}
	s.Worker("https://timesofindia.indiatimes.com/rssfeedstopstories.cms")
}
