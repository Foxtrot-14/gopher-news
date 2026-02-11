package store

import (
	"context"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) FetchFeeds(ctx context.Context) ([]Feed, error) {
	sqlBytes, err := schema.SchemaFS.ReadFile("Get_Feeds.sql")
	if err != nil {
		return nil, err
	}

	rows, err := s.DB.QueryContext(ctx, string(sqlBytes))
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var feeds []Feed

	for rows.Next() {
		var f Feed

		if err := rows.Scan(
			&f.ID,
			&f.Name,
			&f.URL,
		); err != nil {
			return nil, err
		}

		feeds = append(feeds, f)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return feeds, nil
}
