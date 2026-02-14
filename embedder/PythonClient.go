package embedder

import (
	"bufio"
	"fmt"
	"os/exec"
	"sync"
)

type PythonClient struct {
	cmd    *exec.Cmd
	stdin  *bufio.Writer
	stdout *bufio.Reader
	mu     sync.Mutex
}

func NewPythonClientFromBinary(binaryPath string) (*PythonClient, error) {
	cmd := exec.Command(binaryPath)

	stdinPipe, err := cmd.StdinPipe()
	if err != nil {
		return nil, fmt.Errorf("failed to get stdin pipe: %w", err)
	}

	stdoutPipe, err := cmd.StdoutPipe()
	if err != nil {
		return nil, fmt.Errorf("failed to get stdout pipe: %w", err)
	}

	stderrPipe, err := cmd.StderrPipe()
	if err != nil {
		return nil, fmt.Errorf("failed to get stderr pipe: %w", err)
	}

	if err := cmd.Start(); err != nil {
		return nil, fmt.Errorf("failed to start embedder binary: %w", err)
	}

	go func() {
		scanner := bufio.NewScanner(stderrPipe)
		for scanner.Scan() {
			fmt.Println("[EMBEDDER STDERR]", scanner.Text())
		}
	}()

	client := &PythonClient{
		cmd:    cmd,
		stdin:  bufio.NewWriter(stdinPipe),
		stdout: bufio.NewReader(stdoutPipe),
	}

	return client, nil
}
