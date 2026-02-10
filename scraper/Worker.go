package scraper

import (
	"database/sql"
	"encoding/xml"
	"fmt"
	"log"
	"net/http"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Scraper) Worker(feedURL string) {
	log.Printf("[Scraper] scraping %s", feedURL)

	sqlBytes, err := schema.SchemaFS.ReadFile("Insert_To_News.sql")
	if err != nil {
		log.Printf("[Scraper ERROR] failed to read embedded SQL: %v", err)
		return
	}
	insertSQL := string(sqlBytes)

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
			insertSQL,
			feedURL,
			item,
		)
		if err != nil {
			if err != sql.ErrNoRows {
				log.Printf("[Scraper ERROR] AddNews failed: %v", err)
			}
			continue
		}

		log.Printf("[Scraper] emitting id %d", id)
		s.EMChan <- fmt.Sprintf("%d", id)
	}
}
