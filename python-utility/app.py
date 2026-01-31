from flask import Flask, request, jsonify
from light_embed import TextEmbedding

app = Flask(__name__)

model = TextEmbedding("sentence-transformers/all-MiniLM-L6-v2")


@app.route("/embed/batch", methods=["POST"])
def embed_batch():
    data = request.get_json(force=True)

    if "items" not in data or not isinstance(data["items"], list):
        return jsonify({"error": "items must be a list"}), 400

    items = data["items"]

    if not items:
        return jsonify({"items": []})

    ids = []
    texts = []

    for item in items:
        if "id" not in item or "text" not in item:
            return jsonify({"error": "each item must have id and text"}), 400
        ids.append(item["id"])
        texts.append(item["text"])

    embeddings = model.encode(texts)

    result = []
    for i, emb in enumerate(embeddings):
        result.append({
            "id": ids[i],
            "embedding": emb.tolist()
        })

    return jsonify({"items": result})
