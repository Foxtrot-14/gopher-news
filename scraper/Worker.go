package scraper

import (
	"database/sql"
	"encoding/xml"
	"fmt"
	"log"
	"net/http"
)

func (s *Scraper) Worker(feedURL string) {
	log.Printf("[Scraper] scraping %s", feedURL)
	resp, err := http.Get(feedURL)
	if err != nil {
		log.Printf("request error: %v", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Printf("bad status %d for %s", resp.StatusCode, feedURL)
		return
	}

	var rss RSS
	if err := xml.NewDecoder(resp.Body).Decode(&rss); err != nil {
		log.Printf("xml decode error: %v", err)
		return
	}

	for _, item := range rss.Channel.Items {
		id, err := AddNews(
			s.DB,
			"../db/Insert_To_News.sql",
			feedURL,
			item,
		)
		if err != nil {
			if err == sql.ErrNoRows {
				continue
			}
		} else {
			log.Printf("[Scraper] emitting id %s", id)
			s.EMChan <- fmt.Sprintf("%d", id)
		}
	}
}
