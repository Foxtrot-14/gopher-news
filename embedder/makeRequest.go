package embedder

import (
	"encoding/json"
	"fmt"
	"io"
	"time"
)

func (e *Embedder) makeRequest(stories []Story) ([]Vector, error) {
	if len(stories) == 0 {
		return nil, nil
	}

	e.PythonClient.mu.Lock()
	defer e.PythonClient.mu.Unlock()

	reqBody := map[string]any{
		"items": stories,
	}
	data, err := json.Marshal(reqBody)
	if err != nil {
		return nil, err
	}

	_, err = e.PythonClient.stdin.Write(data)
	if err != nil {
		return nil, err
	}
	if err := e.PythonClient.stdin.WriteByte('\n'); err != nil {
		return nil, err
	}
	if err := e.PythonClient.stdin.Flush(); err != nil {
		return nil, err
	}

	respCh := make(chan []byte)
	errCh := make(chan error)

	go func() {
		line, err := e.PythonClient.stdout.ReadBytes('\n')
		if err != nil {
			errCh <- err
			return
		}
		respCh <- line
	}()

	select {
	case <-time.After(30 * time.Second):
		return nil, fmt.Errorf("timeout waiting for Python response")
	case err := <-errCh:
		if err == io.EOF {
			return nil, fmt.Errorf("python process closed unexpectedly")
		}
		return nil, err
	case line := <-respCh:
		return mapResponseToVectors(line)
	}
}
