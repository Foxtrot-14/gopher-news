package scraper

import (
	"log"
	"sync"
)

func (s *Scraper) StartScraper() {
	rows, err := s.DB.Query(`SELECT url, name FROM feeds`)
	if err != nil {
		log.Printf("%s", err)
		close(s.EMChan)
		return
	}
	defer rows.Close()

	var wg sync.WaitGroup

	for rows.Next() {
		var url, name string
		if err := rows.Scan(&url, &name); err != nil {
			log.Println("scan error:", err)
			continue
		}

		wg.Add(1)
		go func(feedURL, feedName string) {
			defer wg.Done()
			s.Worker(feedURL, feedName)
		}(url, name)
	}

	wg.Wait()
	close(s.EMChan)
}
