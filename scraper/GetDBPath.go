package scraper

import (
	"os"
	"path/filepath"
	"runtime"
)

func GetDBPath() (string, error) {
	var baseDir string
	home, err := os.UserHomeDir()
	if err != nil {
		return "", err
	}

	switch runtime.GOOS {
	case "windows":
		baseDir = filepath.Join(home, "AppData", "Roaming", "gopher-news")
	case "darwin":
		baseDir = filepath.Join(home, "Library", "Application Support", "gopher-news")
	default:
		baseDir = filepath.Join(home, ".local", "share", "gopher-news")
	}

	if err := os.MkdirAll(baseDir, 0o755); err != nil {
		return "", err
	}

	return filepath.Join(baseDir, "gopher-news.db"), nil
}
