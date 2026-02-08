package store

import (
	"sync"
)

func (s *Store) GetNews() error {
	var wg sync.WaitGroup
	wg.Add(3)

	go func() {
		defer wg.Done()
		s.Scraper.StartScraper()
	}()

	go func() {
		defer wg.Done()
		s.Embedder.StartEmbedder()
	}()

	go func() {
		defer wg.Done()
		s.Aggregator.StartAggregator()
	}()

	wg.Wait()
	return nil
}
