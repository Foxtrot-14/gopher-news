package aggregator

import (
	"encoding/json"
	"strconv"
)

func (a *Aggregator) createCentroid(vec []float32) (string, error) {
	raw, err := json.Marshal(vec)
	if err != nil {
		return "", err
	}

	res, err := a.DB.Exec(`
		INSERT INTO centroids (vector, size)
		VALUES (?, 1)
	`, raw)
	if err != nil {
		return "", err
	}

	id, err := res.LastInsertId()
	if err != nil {
		return "", err
	}

	return strconv.FormatInt(id, 10), nil
}
