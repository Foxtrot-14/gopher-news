CREATE TABLE IF NOT EXISTS news (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	feed_url   TEXT NOT NULL,
	title      TEXT NOT NULL,
	description TEXT,
	link       TEXT UNIQUE,
	pub_date   TEXT,
	source     TEXT,
	creator    TEXT,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
