package embedder

func makeRequest(stories []Story) ([]Vector, error) {
	if len(stories) == 0 {
		return nil, nil
	}

	reqBody, err := buildEmbedRequest(stories)
	if err != nil {
		return nil, err
	}

	client := unixHTTPClient(embedderSocket)

	resp, err := doEmbedRequest(client, reqBody)
	if err != nil {
		return nil, err
	}
	return mapResponseToVectors(resp), nil
}
