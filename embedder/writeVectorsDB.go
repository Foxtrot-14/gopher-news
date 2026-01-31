package embedder

import (
	"encoding/json"
	"log"
)

func (e *Embedder) writeVectorsDB(embeddings []Vector) error {
	for _, v := range embeddings {
		vectorJSON, err := json.Marshal(v.Blob)
		if err != nil {
			log.Printf("[Error] marshaling vector for ID %s: %s", v.ID, err)
			continue
		}

		_, err = e.DB.Exec(`
			INSERT INTO embeddings (item_id, vector)
			VALUES (?, ?)
			ON DUPLICATE KEY UPDATE vector = VALUES(vector)
		`, v.ID, vectorJSON)
		if err != nil {
			log.Printf("[Error] inserting vector for ID %s: %s", v.ID, err)
			continue
		}
		log.Printf("Storing Vector for %s\n", v.ID)
	}
	return nil
}
