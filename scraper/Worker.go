package scraper

import (
	"encoding/xml"
	"fmt"
	"log"
	"net/http"
)

func (s *Scraper) Worker(feedURL string) {
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
			log.Printf("db insert error: %v", err)
		} else {
			if id != 0 {
				s.EMChan <- fmt.Sprintf("%d", id)
			} else {
				continue
			}
		}
	}
}
