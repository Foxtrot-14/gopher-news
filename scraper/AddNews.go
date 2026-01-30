package scraper

import (
	"database/sql"
	"os"
)

func AddNews(
	db *sql.DB,
	sqlFile string,
	feedURL string,
	item Item,
) error {
	query, err := os.ReadFile(sqlFile)
	if err != nil {
		return err
	}

	var source string
	if item.Source != nil {
		source = item.Source.Name
	}

	_, err = db.Exec(
		string(query),
		feedURL,
		item.Title,
		item.Description,
		item.Link,
		item.PubDate,
		source,
		item.Creator,
	)

	return err
}
