package embedder

import "log"

func (e *Embedder) processBatch(batch []string) {
	var stories []Story
	for _, id := range batch {
		var story Story
		story.ID = id
		err := e.DB.QueryRow(`
			SELECT title, description FROM news WHERE id = ?
			`, id).Scan(&story.Title, &story.Description)
		if err != nil {
			log.Printf("[Error] while fetching news: %s", err)
			continue
		}
		stories = append(stories, story)
	}
	embeddings, err := e.makeRequest(stories)
	if err != nil {
		log.Printf("[Error] while fetching embeddings: %s", err)
	}

	if err := e.writeVectorsDB(embeddings); err != nil {
		log.Printf("[Error] while writing embeddings: %s", err)
	}
}
