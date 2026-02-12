package store

import (
	"database/sql"
	"embed"
)

func AddToFeed(db *sql.DB, fs embed.FS, file string, name string, url string) error {
	sqlBytes, err := fs.ReadFile(file)
	if err != nil {
		return err
	}
	_, err = db.Exec(string(sqlBytes), name, url)
	return err
}
