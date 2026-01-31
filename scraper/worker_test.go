package scraper

import "testing"

func TestWorker_Scraper(t *testing.T) {
	EMChan := make(chan string)
	s, err := NewScraper(EMChan)
	if err != nil {
		t.Fatal(err)
	}

	defer close(EMChan)

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
