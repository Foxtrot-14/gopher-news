package scraper

import (
	"database/sql"
	"embed"
)

func InitSchemaFromFS(db *sql.DB, fs embed.FS, files ...string) error {
	for _, file := range files {
		sqlBytes, err := fs.ReadFile(file)
		if err != nil {
			return err
		}

		if _, err := db.Exec(string(sqlBytes)); err != nil {
			return err
		}
	}
	return nil
}
