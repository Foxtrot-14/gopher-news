package aggregator

import "log"

func (a *Aggregator) StartAggregator() {
	for id := range a.AggChan {
		log.Printf("[Aggregator] aggregating %s", id)
		if err := a.aggregate(id); err != nil {
			log.Printf("[Aggregator] error aggregating news %s: %v", id, err)
		}
	}
}
