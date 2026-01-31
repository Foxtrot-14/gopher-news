package embedder

import (
	"database/sql"
	"os"
	"path/filepath"
	"runtime"

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

func getDBPath() (string, error) {
	var baseDir string
	home, err := os.UserHomeDir()
	if err != nil {
		return "", err
	}

	switch runtime.GOOS {
	case "windows":
		baseDir = filepath.Join(home, "AppData", "Roaming", "gopher-news")
	case "darwin":
		baseDir = filepath.Join(home, "Library", "Application Support", "gopher-news")
	default:
		baseDir = filepath.Join(home, ".local", "share", "gopher-news")
	}

	if err := os.MkdirAll(baseDir, 0o755); err != nil {
		return "", err
	}

	return filepath.Join(baseDir, "gopher-news.db"), nil
}

func NewEmbedder(EMChan <-chan string) (*Embedder, error) {
	dbPath, err := getDBPath()
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
