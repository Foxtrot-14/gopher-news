package embedder

import (
	"encoding/binary"
	"math"
)

func float32SliceToBytes(v []float32) []byte {
	buf := make([]byte, 4*len(v))
	for i, f := range v {
		binary.LittleEndian.PutUint32(
			buf[i*4:(i+1)*4],
			math.Float32bits(f),
		)
	}
	return buf
}
