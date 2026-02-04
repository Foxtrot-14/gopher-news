package aggregator

import (
	"database/sql"
	"encoding/json"
	"fmt"
)

func (a *Aggregator) getVector(newsID string) ([]float32, error) {
	var (
		id        string
		raw       []byte
		createdAt string
	)

	err := a.DB.QueryRow(`
		SELECT news_id, "vector", created_at
		FROM news_embeddings
		WHERE news_id = ?
	`, newsID).Scan(&id, &raw, &createdAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("no embedding found for news_id %s", newsID)
		}
		return nil, err
	}

	var vec []float32
	if err := json.Unmarshal(raw, &vec); err != nil {
		return nil, err
	}

	if len(vec) == 0 {
		return nil, fmt.Errorf("empty embedding for news_id %s", newsID)
	}

	return vec, nil
}
