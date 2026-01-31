package embedder

import (
	"sync"
	"time"
)

func (e *Embedder) StartEmbedder() {
	batchSize := 10
	batchTimeout := 50 * time.Millisecond
	batch := make([]string, 0, batchSize)

	timer := time.NewTimer(batchTimeout)
	defer timer.Stop()

	var wg sync.WaitGroup

	flush := func() {
		if len(batch) == 0 {
			return
		}

		b := append([]string(nil), batch...)

		wg.Add(1)
		go func(b []string) {
			defer wg.Done()
			e.processBatch(b)
		}(b)

		batch = batch[:0]
		timer.Reset(batchTimeout)
	}

	for {
		select {
		case id, ok := <-e.EMChan:
			if !ok {
				flush()
				wg.Wait()
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
