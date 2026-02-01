package embedder

import "log"

func (e *Embedder) writeVectorsDB(embeddings []Vector) error {
	for _, v := range embeddings {
		vectorBytes := float32SliceToBytes(v.Blob)

		_, err := e.DB.Exec(`
			INSERT INTO news_embeddings (news_id, vector)
			VALUES (?, ?)
			ON CONFLICT(news_id) DO UPDATE SET
			vector = excluded.vector;
		`, v.ID, vectorBytes)
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
