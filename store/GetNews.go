package store

import (
	"context"

	"github.com/Foxtrot-14/gopher-news/aggregator"
	"github.com/Foxtrot-14/gopher-news/embedder"
	"github.com/Foxtrot-14/gopher-news/scraper"
)

func (s *Store) GetNews(ctx context.Context) error {
	EMChan := make(chan string, 1024)
	AggChan := make(chan string, 1024)
	scraper, err := scraper.NewScraper(EMChan, s.DB)
	if err != nil {
		return err
	}

	embedder, err := embedder.NewEmbedder(EMChan, AggChan, s.DB)
	if err != nil {
		return err
	}

	aggregator, err := aggregator.NewAggregator(AggChan, s.DB)
	if err != nil {
		return err
	}
	done := make(chan struct{})
	go scraper.StartScraper()
	go embedder.StartEmbedder()
	go aggregator.StartAggregator(done)

	select {
	case <-ctx.Done():
		return ctx.Err()
	case <-done:
		return nil
	}
}
