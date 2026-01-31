package scraper

import (
	"database/sql"
	"os"
)

func InitSchemaFromFile(db *sql.DB, feedPath, newsPath, embeddingPath string) error {
	feedSchema, err := os.ReadFile(feedPath)
	if err != nil {
		return err
	}

	if _, err := db.Exec(string(feedSchema)); err != nil {
		return err
	}

	newsSchema, err := os.ReadFile(newsPath)
	if err != nil {
		return err
	}

	embeddingSchema, err := os.ReadFile(embeddingPath)
	if err != nil {
		return err
	}

	if _, err := db.Exec(string(newsSchema)); err != nil {
		return err
	}

	if _, err := db.Exec(string(embeddingSchema)); err != nil {
		return err
	}

	return nil
}
