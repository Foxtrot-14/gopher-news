package store

import (
	"context"
	"time"
)

func (s *Store) CheckRecords(ctx context.Context) (bool, error) {
	const sqlStatement = `
		SELECT COUNT(1)
		FROM centroids
		WHERE DATE(created_at) = DATE(?);
	`

	today := time.Now().Format("2006-01-02")

	var count int
	err := s.DB.QueryRowContext(
		ctx,
		sqlStatement,
		today,
	).Scan(&count)
	if err != nil {
		return false, err
	}

	return count > 0, nil
}
