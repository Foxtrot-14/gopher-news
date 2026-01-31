package embedder

import (
	"database/sql"

	"github.com/Foxtrot-14/gopher-news/scraper"
	_ "github.com/mattn/go-sqlite3"
)

type EmbedderInterface interface {
	GetEmbeddings()
	CheckSimilarity()
}

type Story struct {
	ID          string
	Title       string
	Description string
}

type Embedder struct {
	EMChan <-chan string
	DB     *sql.DB
}

type Vector struct {
	ID   string
	Blob []float32
}

const embedderSocket = "/tmp/embedder.sock"

type embedRequest struct {
	Items []embedItem `json:"items"`
}

type embedItem struct {
	ID   string `json:"id"`
	Text string `json:"text"`
}

type embedResponse struct {
	Items []embedResult `json:"items"`
}

type embedResult struct {
	ID        string    `json:"id"`
	Embedding []float32 `json:"embedding"`
}

func NewEmbedder(EMChan <-chan string) (*Embedder, error) {
	dbPath, err := scraper.GetDBPath()
	if err != nil {
		return nil, err
	}

	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, err
	}
	return &Embedder{
		EMChan: EMChan,
		DB:     db,
	}, nil
}
