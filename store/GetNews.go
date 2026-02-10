package store

import (
	"context"
)

func (s *Store) GetNews(ctx context.Context) error {
	done := make(chan struct{})
	go s.Scraper.StartScraper()
	go s.Embedder.StartEmbedder()
	go s.Aggregator.StartAggregator(done)

	select {
	case <-ctx.Done():
		return ctx.Err()
	case <-done:
		return nil
	}
}
