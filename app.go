package main

import (
	"context"

	"github.com/Foxtrot-14/gopher-news/store"
	"github.com/wailsapp/wails/v2/pkg/runtime"
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

func (a *App) GetNews() {
	go func() {
		err := a.store.GetNews(a.ctx)
		if err != nil {
			runtime.EventsEmit(a.ctx, "news:error", err.Error())
			return
		}
		runtime.EventsEmit(a.ctx, "news:done")
	}()
}

func (a *App) GetStoriesFromCentroid(centroidID string) ([]store.Story, error) {
	return a.store.GetStoriesFromCentroid(a.ctx, centroidID)
}
