package store

import (
	"context"
	"fmt"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) FetchTopics(ctx context.Context, date string) ([]Topic, error) {
	if s == nil || s.DB == nil {
		return nil, fmt.Errorf("store or DB is not initialized")
	}

	sqlBytes, err := schema.SchemaFS.ReadFile("Get_Top_Stories.sql")
	if err != nil {
		return nil, fmt.Errorf("failed to read SQL file: %w", err)
	}

	rows, err := s.DB.QueryContext(ctx, string(sqlBytes), date)
	if err != nil {
		return nil, fmt.Errorf("query error: %w", err)
	}
	defer rows.Close()

	var topics []Topic
	for rows.Next() {
		var t Topic
		var createdAt string
		if err := rows.Scan(&t.CentroidID, &t.Size, &t.Title, &createdAt); err != nil {
			return nil, fmt.Errorf("scan error: %w", err)
		}
		t.CreatedAt = createdAt
		topics = append(topics, t)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("rows error: %w", err)
	}

	return topics, nil
}
