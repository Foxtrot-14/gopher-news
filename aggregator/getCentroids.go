package aggregator

import "encoding/json"

func (a *Aggregator) getCentroids() ([]Centroid, error) {
	query := `
		SELECT id, value, size
		FROM centroids
	`
	rows, err := a.DB.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var centroids []Centroid

	for rows.Next() {
		var (
			id     string
			rawVec []byte
			size   int
		)

		if err := rows.Scan(&id, &rawVec, &size); err != nil {
			return nil, err
		}

		var vec []float32
		if err := json.Unmarshal(rawVec, &vec); err != nil {
			return nil, err
		}

		centroids = append(centroids, Centroid{
			ID:    id,
			Value: vec,
			Total: size,
		})
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return centroids, nil
}
