package models

import "time"

var stories = []Story{
	{
		ID:          1,
		Title:       "Go 1.23 Released with New Features",
		URL:         "https://go.dev/blog/go1.23",
		Author:      "golang-team",
		Points:      342,
		Comments:    87,
		Date:        time.Now(),
		Description: "The Go team is excited to announce the release of Go 1.23, featuring improved performance, new standard library additions, and enhanced tooling support.",
	},
	{
		ID:          2,
		Title:       "Building Terminal UIs with Bubble Tea",
		URL:         "https://charm.sh/blog/bubbletea",
		Author:      "charm",
		Points:      256,
		Comments:    45,
		Date:        time.Now(),
		Description: "A comprehensive guide to building beautiful and functional terminal user interfaces using the Bubble Tea framework for Go applications.",
	},
	{
		ID:          3,
		Title:       "Understanding Go Generics: A Deep Dive",
		URL:         "https://blog.golang.org/generics",
		Author:      "rob_pike",
		Points:      512,
		Comments:    134,
		Date:        time.Now().AddDate(0, 0, -1),
		Description: "An in-depth exploration of Go's generics implementation, covering type parameters, constraints, and practical use cases for writing more flexible code.",
	},
	{
		ID:          4,
		Title:       "Optimizing Go Applications for Performance",
		URL:         "https://golang.org/doc/performance",
		Author:      "go-perf",
		Points:      428,
		Comments:    92,
		Date:        time.Now().AddDate(0, 0, -1),
		Description: "Learn advanced techniques for profiling and optimizing Go applications, including CPU and memory profiling, benchmarking, and common pitfalls to avoid.",
	},
	{
		ID:          5,
		Title:       "Concurrency Patterns in Modern Go",
		URL:         "https://go.dev/blog/concurrency",
		Author:      "concurrency_guru",
		Points:      387,
		Comments:    76,
		Date:        time.Now().AddDate(0, 0, -2),
		Description: "Explore modern concurrency patterns in Go, including worker pools, pipelines, fan-out/fan-in, and context-based cancellation strategies.",
	},
	{
		ID:          6,
		Title:       "Building Microservices with Go and gRPC",
		URL:         "https://grpc.io/blog/go-microservices",
		Author:      "grpc-team",
		Points:      295,
		Comments:    63,
		Date:        time.Now().AddDate(0, 0, -2),
		Description: "A practical guide to building scalable microservices using Go and gRPC, covering service definitions, streaming, authentication, and deployment.",
	},
	{
		ID:       7,
		Title:    "The State of Go Modules in 2024",
		URL:      "https://go.dev/blog/modules2024",
		Author:   "module_maintainer",
		Points:   198,
		Comments: 41,
		Date:     time.Now().AddDate(0, 0, -3),
		Description: `
		Go modules have been the backbone of dependency management in the Go ecosystem for several years now, and 2024 marks a significant point in their evolution.
		This article provides a deep dive into how Go modules have matured since their initial introduction. It revisits the original problems they set out to solve—such as GOPATH limitations, dependency version conflicts, and reproducible builds—and evaluates how well those goals have been met in real-world projects.
		The article also explores semantic versioning in depth. It explains how Go interprets major version changes, why v2+ modules require explicit versioned import paths, and how this design choice helps prevent accidental breaking changes. Several practical strategies for handling version upgrades smoothly are shared, especially for teams maintaining widely used libraries.
		`,
	},
}
