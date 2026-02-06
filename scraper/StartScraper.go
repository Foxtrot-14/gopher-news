package scraper

import (
	"log"
	"sync"
)

func (s *Scraper) StartScraper() {
	rows, err := s.DB.Query(`SELECT url FROM feeds`)
	if err != nil {
		log.Printf("%s", err)
	}
	defer rows.Close()

	var wg sync.WaitGroup

	for rows.Next() {
		var url string
		if err := rows.Scan(&url); err != nil {
			log.Println("scan error:", err)
			continue
		}

		wg.Add(1)
		go func(feedURL string) {
			defer wg.Done()
			s.Worker(feedURL)
		}(url)
	}

	wg.Wait()

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
}
