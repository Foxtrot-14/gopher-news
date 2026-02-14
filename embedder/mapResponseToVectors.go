package embedder

import (
	"encoding/json"
	"fmt"
)

func mapResponseToVectors(line []byte) ([]Vector, error) {
	var resp struct {
		Items []Vector `json:"items"`
		Error string   `json:"error"`
	}

	if err := json.Unmarshal(line, &resp); err != nil {
		return nil, err
	}
	if resp.Error != "" {
		return nil, fmt.Errorf(resp.Error)
	}

	return resp.Items, nil
}
