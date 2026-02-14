package embedder

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type EmbedderInterface interface {
	StartEmbedder()
	writeVectorsDB()
	processBatch()
}

type Story struct {
	ID          string
	Title       string
	Description string
}

type Embedder struct {
	AggChan      chan string
	EMChan       <-chan string
	DB           *sql.DB
	PythonClient *PythonClient
}

type Vector struct {
	ID   string    `json:"id"`
	Blob []float32 `json:"embedding"`
}

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

func NewEmbedder(EMChan <-chan string, AggChan chan string, db *sql.DB) (*Embedder, error) {
	binaryPath, err := extractEmbedder()
	if err != nil {
		return nil, err
	}

	client, err := NewPythonClientFromBinary(binaryPath)
	if err != nil {
		return nil, err
	}

	return &Embedder{
		EMChan:       EMChan,
		AggChan:      AggChan,
		DB:           db,
		PythonClient: client,
	}, nil
}
