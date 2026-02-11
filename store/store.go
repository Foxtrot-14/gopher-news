package store

import (
	"database/sql"

	"github.com/Foxtrot-14/gopher-news/aggregator"
	"github.com/Foxtrot-14/gopher-news/embedder"
	"github.com/Foxtrot-14/gopher-news/scraper"
)

type Topic struct {
	CentroidID int    `json:"centroidID"`
	Size       int    `json:"size"`
	Title      string `json:"title"`
	CreatedAt  string `json:"createdAt"`
}

type Story struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Link        string `json:"link"`
	PubDate     string `json:"pub_date"`
	Source      string `json:"source"`
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
	return &Store{
		DB: db,
	}, nil
}
