"use client";
import { ChatPage } from "@/components/component/chat-page";
import { useChat } from "@ai-sdk/react";
import React from "react";

export default function ChatLandingPage({
  params,
}: {
  params: { chatId?: string[] };
}) {
  const chatId = params.chatId?.join("/");
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  console.log(chatId);
  return (
    // <>
    //   <ChatPage />
    // </>
    <div className="stretch mx-auto flex w-full max-w-md flex-col py-24">
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

// "use client";

// import { type CoreMessage } from "ai";
// import { useState } from "react";
// import { AI, continueConversation } from "../actions";
// import { readStreamableValue, useUIState } from "ai/rsc";
// import { Input } from "@/components/ui/input";

// // Force the page to be dynamic and allow streaming responses up to 30 seconds
// export const dynamic = "force-dynamic";
// export const maxDuration = 30;

// export default function Chat({ params }: { params: { chatId?: string[] } }) {
//   const chatId = params.chatId?.join("/");
//   console.log(chatId);
//   const [messages, setMessages] = useState<CoreMessage[]>([]);
//   const [input, setInput] = useState("");
//   const [data, setData] = useState<any>();
//   const [prompt, setPrompt] = useState("");
//   const [conversation, setConversation] = useUIState<typeof AI>();
//   return (
//     <div className="stretch mx-auto flex w-full max-w-md flex-col py-24">
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//       {messages.map((m, i) => (
//         <div key={i} className="whitespace-pre-wrap">
//           {m.role === "user" ? "User: " : "AI: "}
//           {m.content as string}
//         </div>
//       ))}

//       <form
//         action={async () => {
//           const newMessages: CoreMessage[] = [
//             ...messages,
//             { content: input, role: "user" },
//           ];

//           setMessages(newMessages);
//           setInput("");

//           const result = await continueConversation(newMessages);
//           setData(result.data);
//           for await (const content of readStreamableValue(result.message)) {
//             setMessages([
//               ...newMessages,
//               {
//                 role: "assistant",
//                 content: content as string,
//               },
//             ]);
//           }
//         }}
//       >
//         <Input
//           className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={(e) => setInput(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// }
