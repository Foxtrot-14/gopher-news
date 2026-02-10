package store

import "testing"

func TestStore(t *testing.T) {
	db, err := OpenDB()
	if err != nil {
		t.Fatal(err)
	}

	st, err := NewStore(db)
	if err != nil {
		t.Fatal(err)
	}
	st.GetNews()
}
