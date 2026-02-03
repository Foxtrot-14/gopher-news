package aggregator

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
)

func (a *Aggregator) getVector(newsID string) ([]float32, error) {
	var raw []byte

	err := a.DB.QueryRow(`
		SELECT *
		FROM news_embeddings
		WHERE news_id = ?
	`, newsID).Scan(&raw)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("no embedding found for news_id %s", newsID)
		}
		return nil, err
	}

	log.Printf("%v", raw)

	var vec []float32
	if err := json.Unmarshal(raw, &vec); err != nil {
		return nil, err
	}

	if len(vec) == 0 {
		return nil, fmt.Errorf("empty embedding for news_id %s", newsID)
	}

	return vec, nil
}
