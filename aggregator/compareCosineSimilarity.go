package aggregator

import "math"

func cosineSimilarity(a, b []float32) float32 {
	var dot, na, nb float32
	for i := range a {
		dot += a[i] * b[i]
		na += a[i] * a[i]
		nb += b[i] * b[i]
	}
	return dot / (float32(math.Sqrt(float64(na))) * float32(math.Sqrt(float64(nb))))
}

func findBestCentroid(v []float32, centroids []Centroid) (*Centroid, float32) {
	var best *Centroid
	var bestScore float32

	for i := range centroids {
		score := cosineSimilarity(v, centroids[i].Value)
		if best == nil || score > bestScore {
			best = &centroids[i]
			bestScore = score
		}
	}
	return best, bestScore
}
