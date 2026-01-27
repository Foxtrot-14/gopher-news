package main

import (
	"fmt"
	"os"

	"github.com/Foxtrot-14/gopher-news/models"
	tea "github.com/charmbracelet/bubbletea"
)

func main() {
	m := models.NewParentModel()
	p := tea.NewProgram(m, tea.WithAltScreen())

	if _, err := p.Run(); err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
}
