# 🐹 Gopher News

**Gopher News** is a terminal-based news aggregator written in Go.  
It scrapes RSS feeds, summarizes the latest articles, and presents them in a beautiful interactive TUI powered by **Bubble Tea** and **Lip Gloss**.

Stay informed without leaving your terminal.

---

## ✨ Features

- 📡 Scrapes news from multiple RSS feeds
- 🧠 Automatically summarizes articles
- 🖥️ Interactive terminal UI (TUI)
- 🎨 Styled with Lip Gloss for a clean, readable interface
- ⚡ Fast, lightweight, and written in Go
- 🐹 Gopher-approved

---

## 🛠️ Tech Stack

- Go
- Bubble Tea – terminal UI framework
- Lip Gloss – terminal styling
- RSS feed parsing
- Article summarization

---

## 📦 Installation

### Prerequisites

- Go 1.20 or higher

### Build from source

```bash
git clone https://github.com/Foxtrot-14/gopher-news.git
cd gopher-news
go build -o gopher-news
````

Or run directly:

```bash
go run .
```

---

## 🚀 Usage

```bash
./gopher-news
```

Navigate articles using your keyboard and read summarized news directly in your terminal.

> Best experienced in a modern terminal emulator.

---

## ⚙️ Configuration

RSS feeds are currently defined in the source code.

Future versions will support configuration via external config files.

---

## 🧪 Development

Format code:

```bash
go fmt ./...
```

Run checks:

```bash
go vet ./...
```

Run locally:

```bash
go run .
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

MIT License © 2026 Foxtrot-14

---

## ⭐ Acknowledgements

* Charmbracelet for Bubble Tea and Lip Gloss
* The Go community
* Open RSS feeds across the web

---

Built with ❤️, Go, and the terminal
