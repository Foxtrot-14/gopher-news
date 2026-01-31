INSERT OR IGNORE INTO news (
	feed_url,
	title,
  guid,
	description,
	link,
	pub_date,
	source,
	creator
) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
