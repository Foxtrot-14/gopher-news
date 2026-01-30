package scraper

import "testing"

func TestWorker_Scraper(t *testing.T) {
	s, err := NewScraper()
	if err != nil {
		t.Fatal(err)
	}

	s.StartScraper()

	var count int
	err = s.DB.QueryRow(`SELECT COUNT(*) FROM news`).Scan(&count)
	if err != nil {
		t.Fatal(err)
	}

	if count == 0 {
		t.Fatal("expected news records to be created, got 0")
	}
}
