package store

import (
	"log"
	"time"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) CleanUp() {
	today := time.Now().Format("2006-01-02")

	newsBytes, err := schema.SchemaFS.ReadFile("News_Cleanup.sql")
	if err != nil {
		log.Printf("[Cleanup] failed to read News_Cleanup.sql: %v", err)
		return
	}

	if _, err := s.DB.Exec(string(newsBytes), today); err != nil {
		log.Printf("[Cleanup] failed to execute News_Cleanup.sql: %v", err)
	}

	centroidBytes, err := schema.SchemaFS.ReadFile("Centroid_Cleanup.sql")
	if err != nil {
		log.Printf("[Cleanup] failed to read Centroid_Cleanup.sql: %v", err)
		return
	}

	if _, err := s.DB.Exec(string(centroidBytes), today); err != nil {
		log.Printf("[Cleanup] failed to execute Centroid_Cleanup.sql: %v", err)
	}
}
