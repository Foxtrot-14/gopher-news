package store

import (
	"context"
	"time"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) FetchTopics(ctx context.Context) ([]Topic, error) {
	sqlBytes, err := schema.SchemaFS.ReadFile("Get_Top_Stories.sql")
	if err != nil {
		return nil, err
	}

	today := time.Now().Format("2006-01-02")
	rows, err := s.DB.QueryContext(ctx, string(sqlBytes), today)
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

		t.CreatedAt, err = time.Parse("2006-01-02 15:04:05", createdAt)
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
