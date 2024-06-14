import { createOllama } from "ollama-ai-provider";

export const ollama = createOllama({});

export const ollamaModel = ollama("qwen2:7b");

export const ollamaEmbeddingsModel = ollama.embedding("nomic-embed-text");
