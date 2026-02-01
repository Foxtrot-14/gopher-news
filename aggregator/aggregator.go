package aggregator

import (
	"database/sql"

	"github.com/Foxtrot-14/gopher-news/scraper"
	_ "github.com/mattn/go-sqlite3"
)

type AggregatorInterface interface {
	StartAggregator()
	writeAggregateDB()
	addToAggregate()
	getAggregates()
	updateNewsRecord()
}

type Aggregator struct {
	AggChan <-chan string
	DB      *sql.DB
}

type Centroid struct {
	ID    string
	Value []float32
	Total int
}

func NewAggregator(AggChan <-chan string) (*Aggregator, error) {
	dbPath, err := scraper.GetDBPath()
	if err != nil {
		return nil, err
	}

	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, err
	}
	return &Aggregator{
		AggChan: AggChan,
		DB:      db,
	}, nil
}
