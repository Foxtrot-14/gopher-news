package embedder

import (
	"encoding/json"
	"log"
)

func (e *Embedder) writeVectorsDB(embeddings []Vector) error {
	for _, v := range embeddings {
		vectorJSON, err := json.Marshal(v.Blob)
		if err != nil {
			log.Printf("[Error] marshaling vector for ID %s: %v", v.ID, err)
			continue
		}

		_, err = e.DB.Exec(`
    INSERT INTO news_embeddings (news_id, vector)
    VALUES (?, ?)
    ON CONFLICT(news_id) DO UPDATE SET vector = excluded.vector;
`, v.ID, vectorJSON)
		if err != nil {
			log.Printf("[Error] inserting vector for ID %s: %v", v.ID, err)
			continue
		}

		select {
		case e.AggChan <- v.ID:
		default:
			log.Printf("[Warn] AppChan blocked, dropping ID %s", v.ID)
		}
	}

	return nil
}
