package store

import (
	"context"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) FetchTopics(ctx context.Context, date string) ([]Topic, error) {
	sqlBytes, err := schema.SchemaFS.ReadFile("Get_Top_Stories.sql")
	if err != nil {
		return nil, err
	}

	rows, err := s.DB.QueryContext(ctx, string(sqlBytes), date)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var topics []Topic

	for rows.Next() {
		var t Topic
		var createdAt string

		err := rows.Scan(
			&t.CentroidID,
			&t.Size,
			&t.Title,
			&createdAt,
		)
		if err != nil {
			return nil, err
		}

		t.CreatedAt = createdAt
		if err != nil {
			return nil, err
		}

		topics = append(topics, t)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return topics, nil
}
