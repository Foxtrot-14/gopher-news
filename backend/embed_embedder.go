package backend

import "embed"

//go:embed embedder/embedder
var EmbedderBinary embed.FS
