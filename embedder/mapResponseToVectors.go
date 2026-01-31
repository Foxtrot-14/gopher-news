package embedder

func mapResponseToVectors(resp *embedResponse) []Vector {
	vectors := make([]Vector, 0, len(resp.Items))

	for _, item := range resp.Items {
		vectors = append(vectors, Vector{
			ID:   item.ID,
			Blob: item.Embedding,
		})
	}

	return vectors
}
