package main

import (
	"context"

	"github.com/Foxtrot-14/gopher-news/store"
)

// App struct
type App struct {
	ctx   context.Context
	store *store.Store
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	db, err := store.OpenDB()
	if err != nil {
		panic(err)
	}

	st, err := store.NewStore(db)
	if err != nil {
		panic(err)
	}

	a.store = st
}

func (a *App) FetchTopics(date string) ([]store.Topic, error) {
	return a.store.FetchTopics(a.ctx, date)
}

func (a *App) GetNews() error {
	ctx, cancel := context.WithCancel(a.ctx)
	defer cancel()
	return a.store.GetNews(ctx)
}

func (a *App) GetStoriesFromCentroid(centroidID string) ([]store.Story, error) {
	return a.store.GetStoriesFromCentroid(a.ctx, centroidID)
}

func (a *App) FetchFeeds() ([]store.Feed, error) {
	return a.store.FetchFeeds(a.ctx)
}

func (a *App) AddNewFeed(name string, url string) error {
	return a.store.AddNewFeed(a.ctx, name, url)
}

func (a *App) DeleteFeed(id int64) error {
	return a.store.DeleteFeed(a.ctx, id)
}
