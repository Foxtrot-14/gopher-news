package embedder

import (
	"testing"

	"github.com/Foxtrot-14/gopher-news/scraper"
)

func TestEmbedder(t *testing.T) {
	EMChan := make(chan string)
	s, err := scraper.NewScraper(EMChan)
	if err != nil {
		t.Fatal(err)
	}
	defer close(EMChan)
	e, err := NewEmbedder(EMChan)
	if err != nil {
		t.Fatal(err)
	}
	go e.StartEmbedder()
	s.StartScraper()
}
