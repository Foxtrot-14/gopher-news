package scraper

import "log"

func (s *Scraper) StartScraper() {
	rows, err := s.DB.Query(`SELECT url FROM feeds`)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var url string
		if err := rows.Scan(&url); err != nil {
			log.Println("scan error:", err)
			continue
		}

		go s.Worker(url)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
}
