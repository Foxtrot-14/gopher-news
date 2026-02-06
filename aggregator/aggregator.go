package aggregator

import (
	"database/sql"

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

func NewAggregator(AggChan <-chan string, db *sql.DB) (*Aggregator, error) {
	return &Aggregator{
		AggChan: AggChan,
		DB:      db,
	}, nil
}
