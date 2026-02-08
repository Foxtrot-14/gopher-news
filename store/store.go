package store

import (
	"database/sql"
	"time"

	"github.com/Foxtrot-14/gopher-news/aggregator"
	"github.com/Foxtrot-14/gopher-news/embedder"
	"github.com/Foxtrot-14/gopher-news/scraper"
)

type Topic struct {
	CentroidID int
	Size       int
	Title      string
	CreatedAt  time.Time
}

type Story struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

type Store struct {
	DB         *sql.DB
	Scraper    *scraper.Scraper
	Embedder   *embedder.Embedder
	Aggregator *aggregator.Aggregator
}

func NewStore(
	db *sql.DB,
) (*Store, error) {
	EMChan := make(chan string, 1024)
	AggChan := make(chan string, 1024)
	scraper, err := scraper.NewScraper(EMChan, db)
	if err != nil {
		return nil, err
	}

	embedder, err := embedder.NewEmbedder(EMChan, AggChan, db)
	if err != nil {
		return nil, err
	}

	aggregator, err := aggregator.NewAggregator(AggChan, db)
	if err != nil {
		return nil, err
	}

	return &Store{
		DB:         db,
		Scraper:    scraper,
		Embedder:   embedder,
		Aggregator: aggregator,
	}, nil
}
