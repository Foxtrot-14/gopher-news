import sys
import json
from light_embed import TextEmbedding

model = TextEmbedding("sentence-transformers/all-MiniLM-L6-v2")


def process_batch(data):
    if "items" not in data or not isinstance(data["items"], list):
        return {"error": "items must be a list"}

    items = data["items"]

    if not items:
        return {"items": []}

    ids = []
    texts = []

    for item in items:
        if "id" not in item or "text" not in item:
            return {"error": "each item must have id and text"}
        ids.append(item["id"])
        texts.append(item["text"])

    embeddings = model.encode(texts)

    result = []
    for i, emb in enumerate(embeddings):
        result.append({
            "id": ids[i],
            "embedding": emb.tolist()
        })

    return {"items": result}


def main():
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue

        try:
            request_json = json.loads(line)
        except json.JSONDecodeError:
            output = {"error": "invalid JSON"}
            print(json.dumps(output), flush=True)
            continue

        response = process_batch(request_json)

        print(json.dumps(response), flush=True)


if __name__ == "__main__":
    main()
