package scraper

import (
	"database/sql"
	"os"
)

func AddToFeed(db *sql.DB, path, url string) error {
	schmea, err := os.ReadFile(path)
	if err != nil {
		return err
	}
	_, err = db.Exec(string(schmea), url)
	return err
}
