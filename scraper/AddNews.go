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
) (int64, error) {
	query, err := os.ReadFile(sqlFile)
	if err != nil {
		return 0, err
	}

	var source string
	if item.Source != nil {
		source = item.Source.Name
	}

	result, err := db.Exec(
		string(query),
		feedURL,
		item.Title,
		item.GUID,
		item.Description,
		item.Link,
		item.PubDate,
		source,
		item.Creator,
	)
	if err != nil {
		return 0, err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return 0, err
	}

	return id, nil
}
