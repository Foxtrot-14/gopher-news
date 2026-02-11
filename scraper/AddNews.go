package scraper

import (
	"database/sql"
)

func AddNews(
	db *sql.DB,
	query string,
	feedURL string,
	item Item,
	feedName string,
) (int64, error) {
	result, err := db.Exec(
		query,
		feedURL,
		item.Title,
		item.GUID,
		item.Description,
		item.Link,
		item.PubDate,
		feedName,
		item.Creator,
	)
	if err != nil {
		return 0, err
	}

	rows, err := result.RowsAffected()
	if err != nil {
		return 0, err
	}

	if rows == 0 {
		return 0, sql.ErrNoRows
	}

	return result.LastInsertId()
}
