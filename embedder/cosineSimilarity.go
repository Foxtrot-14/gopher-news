package embedder

import "math"

func cosineSimilarity(a, b []float32) float32 {
	var dot, normA, normB float32

	for i := range a {
		dot += a[i] * b[i]
		normA += a[i] * a[i]
		normB += b[i] * b[i]
	}

	return dot / (float32(math.Sqrt(float64(normA))) *
		float32(math.Sqrt(float64(normB))))
}
