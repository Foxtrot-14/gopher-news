package embedder

import (
	"context"
	"log"

	"google.golang.org/genai"
)

func makeRequest(stories []Story) []Vector {
	var vectors []Vector
	ctx := context.Background()
	client, err := genai.NewClient(ctx, &genai.ClientConfig{
		APIKey: "",
	})
	if err != nil {
		log.Fatal(err)
	}

	contents := make([]*genai.Content, 0, len(stories))
	for _, s := range stories {
		contents = append(contents, genai.NewContentFromText(s.Title+s.Description, genai.RoleUser))
		vector := Vector{
			ID: s.ID,
		}
		vectors = append(vectors, vector)
	}

	result, err := client.Models.EmbedContent(
		ctx,
		"gemini-embedding-001",
		contents,
		nil,
	)
	if err != nil {
		log.Fatal(err)
	}

	for id, v := range vectors {
		v.Blob = result.Embeddings[id].Values
	}
	return vectors
}
