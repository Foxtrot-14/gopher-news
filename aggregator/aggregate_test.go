package aggregator

import (
	"database/sql"
	"os"
	"path/filepath"
	"runtime"
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

	db, err := OpenDB()
	if err != nil {
		t.Fatal(err)
	}

	s, err := scraper.NewScraper(EMChan, db)
	if err != nil {
		t.Fatal(err)
	}

	e, err := embedder.NewEmbedder(EMChan, AggChan, db)
	if err != nil {
		t.Fatal(err)
	}

	a, err := NewAggregator(AggChan, db)
	if err != nil {
		t.Fatal(err)
	}

	go func() {
		defer wg.Done()
		s.StartScraper()
	}()

	go func() {
		defer wg.Done()
		e.StartEmbedder()
	}()

	go func() {
		defer wg.Done()
		a.StartAggregator()
	}()

	wg.Wait()
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

func OpenDB() (*sql.DB, error) {
	dbPath, err := getDBPath()
	if err != nil {
		return nil, err
	}

	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		db.Close()
		return nil, err
	}

	if _, err := db.Exec(`
		PRAGMA foreign_keys = ON;
		PRAGMA journal_mode = WAL;
		PRAGMA busy_timeout = 5000;
	`); err != nil {
		db.Close()
		return nil, err
	}

	return db, nil
}
