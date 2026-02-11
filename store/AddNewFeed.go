package store

import (
	"context"

	schema "github.com/Foxtrot-14/gopher-news/db"
)

func (s *Store) AddNewFeed(ctx context.Context, name, url string) error {
	sqlBytes, err := schema.SchemaFS.ReadFile("Add_New_Feed.sql")
	if err != nil {
		return err
	}

	_, err = s.DB.ExecContext(
		ctx,
		string(sqlBytes),
		name,
		url,
	)
	if err != nil {
		return err
	}

	return nil
}
