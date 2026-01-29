package embedder

import (
	"encoding/binary"
	"math"
)

func bytesToFloat32Slice(b []byte) []float32 {
	v := make([]float32, len(b)/4)
	for i := range len(v) {
		v[i] = math.Float32frombits(binary.LittleEndian.Uint32(b[i*4:]))
	}
	return v
}
