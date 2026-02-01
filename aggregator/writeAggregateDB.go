package aggregator

import "encoding/json"

func (a *Aggregator) updateCentroid(c *Centroid, vec []float32) error {
	n := float32(c.Total)

	for i := range c.Value {
		c.Value[i] = (c.Value[i]*n + vec[i]) / (n + 1)
	}

	raw, err := json.Marshal(c.Value)
	if err != nil {
		return err
	}

	_, err = a.DB.Exec(`
		UPDATE centroids
		SET vector = ?, size = size + 1
		WHERE id = ?
	`, raw, c.ID)

	return err
}
