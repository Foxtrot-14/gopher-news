package backend

import "embed"

//go:embed embedder/*
var EmbedderBinary embed.FS
