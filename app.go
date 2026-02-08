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

	go a.checkStartupRecords()
}

func (a *App) checkStartupRecords() {
	exists, err := a.store.CheckRecords(a.ctx)
	if err != nil {
		runtime.EventsEmit(a.ctx, "startup:records", map[string]any{
			"exists": false,
			"error":  err.Error(),
		})
		return
	}

	runtime.EventsEmit(a.ctx, "startup:records", map[string]any{
		"exists": exists,
		"error":  nil,
	})
}

func (a *App) FetchTopics(date string) ([]store.Topic, error) {
	return a.store.FetchTopics(a.ctx, date)
}
