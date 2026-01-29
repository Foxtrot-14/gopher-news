package embedder

import "database/sql"

type EmbedderInterface interface {
	GetEmbeddings()
	CheckSimilarity()
}

type Embedder struct {
	EMChan chan string
	DB     *sql.DB
}
