package embedder

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func doEmbedRequest(client *http.Client, body []byte) (*embedResponse, error) {
	req, err := http.NewRequest(
		"POST",
		"http://unix/embed/batch",
		bytes.NewReader(body),
	)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Content-Type", "application/json")

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("embedder returned status %d", resp.StatusCode)
	}

	var out embedResponse
	if err := json.NewDecoder(resp.Body).Decode(&out); err != nil {
		return nil, err
	}
	return &out, nil
}
