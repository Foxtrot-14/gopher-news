package store

import (
	"context"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) DeleteFeed(ctx context.Context, id int64) error {
	sqlBytes, err := schema.SchemaFS.ReadFile("Delete_Feed.sql")
	if err != nil {
		return err
	}

	_, err = s.DB.ExecContext(
		ctx,
		string(sqlBytes),
		id,
	)
	if err != nil {
		return err
	}

	return nil
}
