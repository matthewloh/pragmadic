"use server";

import {
  createAI,
  createStreamableValue,
  getMutableAIState,
  streamUI,
} from "ai/rsc";
import { CoreMessage, streamText } from "ai";
import { nanoid } from "nanoid";
import { ollamaModel } from "@/app/server/ai/ollama";
import { ReactNode } from "react";
import { SystemMessage } from "@/components/chat/SystemMessage";
import { z } from "zod";
import { openaiModel } from "@/app/server/ai/openai";

export interface ServerMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ClientMessage {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
}

// export async function continueConversation(messages: CoreMessage[]) {
//   const result = await streamUI({
//     model: ollamaModel,
//     messages,
//   });
//   const data = { test: "hello" };
//   const stream = createStreamableValue(result.textStream);
//   return { message: stream.value, data };
// }

export async function continueConversation(
  input: string,
): Promise<ClientMessage> {
  "use server";

  const history = getMutableAIState<typeof AI>();

  const result = await streamUI({
    model: openaiModel,
    // model: ollamaModel,
    messages: [...history.get(), { role: "user", content: input }],
    text: ({ content, done }) => {
      if (done) {
        const nMessages: {
          role: "user" | "assistant";
          content: string;
        }[] = [...history.get(), { role: "assistant", content }];

        history.done(nMessages);
      }

      return <SystemMessage message={content} />;
    },
    tools: {
      tellTime: {
        description: "Tell the current time",
        parameters: z.object({}),
        generate: async () => {
          return new Date().toLocaleTimeString();
        },
      },
      // addFood: {
      //   description: "Add a food to the user's database of foods",
      //   parameters: z.object({}),
      //   generate: async () => {
      //     return <CreateFood />;
      //   },
      // },
      // searchFood: {
      //   description: "Search for a food in the user's database of foods",
      //   parameters: z.object({
      //     name: z.string(),
      //   }),
      //   generate: async ({ name }) => {
      //     return <SearchFood name={name} />;
      //   },
      // },
    },
  });

  return {
    id: nanoid(),
    role: "assistant",
    display: result.value,
  };
}

export const AI = createAI<
  ServerMessage[],
  ClientMessage[],
  {
    continueConversation: typeof continueConversation;
  }
>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});
