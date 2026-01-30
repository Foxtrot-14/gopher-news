INSERT OR IGNORE INTO news (
	feed_url,
	title,
	description,
	link,
	pub_date,
	source,
	creator
) VALUES (?, ?, ?, ?, ?, ?, ?);
