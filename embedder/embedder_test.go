package embedder

import (
	"sync"
	"testing"

	"github.com/Foxtrot-14/gopher-news/scraper"
)

func TestEmbedder(t *testing.T) {
	EMChan := make(chan string)

	var wg sync.WaitGroup
	wg.Add(2)

	s, err := scraper.NewScraper(EMChan)
	if err != nil {
		t.Fatal(err)
	}

	e, err := NewEmbedder(EMChan)
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
	}()

	wg.Wait()
}
