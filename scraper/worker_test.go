package scraper

import (
	"database/sql"
	"os"
	"path/filepath"
	"runtime"
	"testing"
)

func TestWorker_Scraper(t *testing.T) {
	db, err := OpenDB()
	if err != nil {
		t.Fatal(err)
	}

	EMChan := make(chan string, 1024)
	s, err := NewScraper(EMChan, db)
	if err != nil {
		t.Fatal(err)
	}

	s.StartScraper()

	var count int
	err = s.DB.QueryRow(`SELECT COUNT(*) FROM news`).Scan(&count)
	if err != nil {
		t.Fatal(err)
	}

	if count == 0 {
		t.Fatal("expected news records to be created, got 0")
	}
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
