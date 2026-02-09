package store

import (
	"context"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) GetStoriesFromCentroid(ctx context.Context, centroidID string) ([]Story, error) {
	sqlBytes, err := schema.SchemaFS.ReadFile("Get_News_From_Centroid.sql")
	if err != nil {
		return nil, err
	}

	rows, err := s.DB.QueryContext(ctx, string(sqlBytes), centroidID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	stories := make([]Story, 0)

	for rows.Next() {
		var story Story
		err := rows.Scan(
			&story.Title,
			&story.Description,
			&story.Link,
			&story.PubDate,
		)
		if err != nil {
			return nil, err
		}
		stories = append(stories, story)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return stories, nil
}
