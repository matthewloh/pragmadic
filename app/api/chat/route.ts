import { ollamaModel } from "@/app/server/ai/ollama";
import { openaiModel } from "@/app/server/ai/openai";
import { openai } from "@ai-sdk/openai";
import { StreamData, StreamingTextResponse, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openaiModel,
    messages,
  });

  const data = new StreamData();

  data.append({ test: "value" });

  const stream = result.toAIStream({
    onFinal(_) {
      data.close();
    },
  });
  // return result.toAIStreamResponse();
  return new StreamingTextResponse(stream, {}, data);
}
