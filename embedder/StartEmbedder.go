package embedder

import "time"

func (e *Embedder) StartEmbedder() {
	batchSize := 10
	batchTimeout := 50 * time.Millisecond
	batch := make([]string, 0, batchSize)
	timer := time.NewTimer(batchTimeout)
	defer timer.Stop()

	flush := func() {
		if len(batch) == 0 {
			return
		}
		go e.processBatch(batch)
		batch = batch[:0]
		timer.Reset(batchTimeout)
	}

	for {
		select {
		case id, ok := <-e.EMChan:
			if !ok {
				flush()
				return
			}
			batch = append(batch, id)
			if len(batch) >= batchSize {
				flush()
			}
		case <-timer.C:
			flush()
		}
	}
}
