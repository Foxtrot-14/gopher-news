# 🐹 Gopher News

**Gopher News** is a desktop news aggregator built with **Go + Wails**.
It scrapes RSS feeds, generates **vector embeddings using a Python model**, and intelligently **groups related news articles** so you can quickly understand what’s happening—without noise.

A modern, fast news experience powered by Go, Python, and smart embeddings.

---

## ✨ Features

* 📡 Aggregates news from multiple RSS feeds
* 🧠 Generates vector embeddings using a Python ML model
* 🔗 Automatically groups related news articles
* 🖥️ Cross-platform desktop app built with Wails
* ⚡ Fast backend written in Go
* 🐹 Gopher-approved architecture

---

## 🛠️ Tech Stack

### Backend

* Go
* SQLite (for news & embeddings storage)
* RSS feed parsing

### ML / Intelligence

* Python
* Vector embedding model (used to group similar articles)

### Frontend

* Wails (Go + Web UI)
* HTML / CSS / JavaScript (via Wails)

---

## 📦 Installation

### Prerequisites

* Go 1.20+
* Python 3.9+
* Wails CLI

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

---

### Build from source

```bash
git clone https://github.com/Foxtrot-14/gopher-news.git
cd gopher-news
wails build
```

---

### Run in development mode

```bash
wails dev
```

---

## 🚀 How It Works

1. RSS feeds are scraped and stored
2. Articles are sent to a Python service/model
3. Vector embeddings are generated
4. Similar articles are grouped using embedding similarity
5. The grouped news is displayed in the desktop UI

This allows you to see **clusters of related stories instead of repetitive headlines**.

---

## ⚙️ Configuration

* RSS feed sources are currently defined in the code
* Database is stored locally
* Python embedding model is invoked from the Go backend

Future plans:

* External config files
* Pluggable embedding models
* Adjustable similarity thresholds

---

## 🧪 Development

Format Go code:

```bash
go fmt ./...
```

Run checks:

```bash
go vet ./...
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

MIT License © 2026 Foxtrot-14

---

## ⭐ Acknowledgements

* Wails for the desktop framework
* The Go community
* Python ML ecosystem
* Open RSS feeds across the web

---

Built with ❤️, Go, Python, and curiosity
