package aggregator

const similarityThreshold = 0.6

func (a *Aggregator) aggregate(newsID string) error {
	vector, err := a.getVector(newsID)
	if err != nil {
		return err
	}

	centroids, err := a.getCentroids()
	if err != nil {
		return err
	}

	if len(centroids) == 0 {
		centroidID, err := a.createCentroid(vector)
		if err != nil {
			return err
		}
		return a.updateNewsRecord(newsID, centroidID)
	}

	best, score := findBestCentroid(vector, centroids)

	if best != nil && score >= similarityThreshold {
		if err := a.updateCentroid(best, vector); err != nil {
			return err
		}
		return a.updateNewsRecord(newsID, best.ID)
	}

	centroidID, err := a.createCentroid(vector)
	if err != nil {
		return err
	}

	return a.updateNewsRecord(newsID, centroidID)
}
