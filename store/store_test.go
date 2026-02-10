package store

import (
	"context"
	"testing"
)

func TestStore(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	db, err := OpenDB()
	if err != nil {
		t.Fatal(err)
	}

	st, err := NewStore(db)
	if err != nil {
		t.Fatal(err)
	}
	st.GetNews(ctx)
}
