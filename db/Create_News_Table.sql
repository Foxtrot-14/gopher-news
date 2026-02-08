CREATE TABLE IF NOT EXISTS news (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guid TEXT NOT NULL UNIQUE,
  feed_url   TEXT NOT NULL,
  title      TEXT NOT NULL UNIQUE,
  description TEXT,
  link       TEXT,
  pub_date   TEXT,
  source     TEXT,
  creator    TEXT,
  centroid_id INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
