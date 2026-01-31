package models

import (
	"database/sql"
	"log"
	"os"
	"path/filepath"
	"runtime"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

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

func getStories() ([]Story, error) {
	dbPath, err := getDBPath()
	if err != nil {
		return nil, err
	}

	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, err
	}

	defer db.Close()

	start := time.Now().UTC().AddDate(0, 0, -7)

	query, err := os.ReadFile("../db/Get_News.sql")
	if err != nil {
		return nil, err
	}

	rows, err := db.Query(string(query), start)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var stories []Story

	for rows.Next() {
		var s Story
		if err := rows.Scan(
			&s.GUID,
			&s.Title,
			&s.Description,
			&s.Link,
			&s.Date,
			&s.Source,
			&s.Creator,
		); err != nil {
			return nil, err
		}
		stories = append(stories, s)
	}

	log.Printf("%v\n", stories[0])
	return stories, rows.Err()
}
