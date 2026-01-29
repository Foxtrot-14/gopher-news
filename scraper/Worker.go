package scraper

import (
	"encoding/xml"
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

	var rss RSS
	if err := xml.NewDecoder(resp.Body).Decode(&rss); err != nil {
		log.Printf("xml decode error: %v", err)
		return
	}

	// log.Printf("%v\n", rss.Channel.Items[0].Description)
	for key, item := range rss.Channel.Items {
		log.Printf("%d %s\n", key+1, item.Title)
		log.Printf("%s\n", item.Description)
	}
}
