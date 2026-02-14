package embedder

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"time"

	"github.com/Foxtrot-14/gopher-news/backend"
)

var embedderCmd *exec.Cmd

func extractEmbedder() (string, error) {
	var embeddedPath string

	if runtime.GOOS == "windows" {
		embeddedPath = "embedder/app.exe"
	} else {
		embeddedPath = "embedder/app"
	}

	data, err := backend.EmbedderBinary.ReadFile(embeddedPath)
	if err != nil {
		return "", err
	}

	tmpPath := filepath.Join(os.TempDir(), fmt.Sprintf("gopher_embedder_%d", time.Now().UnixNano()))
	err = os.WriteFile(tmpPath, data, 0o755)
	if err != nil {
		return "", err
	}

	return tmpPath, nil
}
