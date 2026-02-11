package main

import (
	"fmt"
	"os"
	"os/exec"
	"time"

	"github.com/Foxtrot-14/gopher-news/backend"
)

var embedderCmd *exec.Cmd

func extractEmbedder() (string, error) {
	data, err := backend.EmbedderBinary.ReadFile("embedder/embedder")
	if err != nil {
		return "", err
	}

	tmpPath := "/tmp/gopher_embedder"

	err = os.WriteFile(tmpPath, data, 0o755)
	if err != nil {
		return "", err
	}

	return tmpPath, nil
}

func startEmbedder() error {
	binaryPath, err := extractEmbedder()
	if err != nil {
		return err
	}

	socketPath := "/tmp/embedder.sock"
	os.Remove(socketPath)

	cmd := exec.Command(binaryPath)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	err = cmd.Start()
	if err != nil {
		return err
	}

	embedderCmd = cmd

	for i := 0; i < 30; i++ {
		if _, err := os.Stat(socketPath); err == nil {
			fmt.Println("Embedder started")
			return nil
		}
		time.Sleep(500 * time.Millisecond)
	}

	return fmt.Errorf("embedder failed to start")
}
