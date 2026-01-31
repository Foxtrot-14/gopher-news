package aggregator

func (a *Aggregator) StartAggregator() {
	for id := range <-a.AggChan {
		// Check if there is any centroid in db
		// If yes then compare to all and check for the ones that are above 0.6
		// --Among those place inside the one closest to increase count and update centroid value
		// --Add centroid id to news record
		// If no then create a centroid
	}
}
