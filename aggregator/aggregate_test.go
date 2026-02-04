package aggregator

import (
	"sync"
	"testing"

	"github.com/Foxtrot-14/gopher-news/embedder"
	"github.com/Foxtrot-14/gopher-news/scraper"
)

func TestAggregator(t *testing.T) {
	EMChan := make(chan string, 1024)
	AggChan := make(chan string, 1024)

	var wg sync.WaitGroup
	wg.Add(3)

	s, err := scraper.NewScraper(EMChan)
	if err != nil {
		t.Fatal(err)
	}

	e, err := embedder.NewEmbedder(EMChan, AggChan)
	if err != nil {
		t.Fatal(err)
	}

	a, err := NewAggregator(AggChan)
	if err != nil {
		t.Fatal(err)
	}

	go func() {
		defer wg.Done()
		s.StartScraper()
		close(EMChan)
	}()

	go func() {
		defer wg.Done()
		e.StartEmbedder()
		close(AggChan)
	}()

	go func() {
		defer wg.Done()
		a.StartAggregator()
	}()

	wg.Wait()
}
