package aggregator

func (a *Aggregator) updateNewsRecord(newsID string, centroidID string) error {
	_, err := a.DB.Exec(`
		UPDATE news
		SET centroid_id = ?
		WHERE id = ?
	`, centroidID, newsID)
	return err
}
