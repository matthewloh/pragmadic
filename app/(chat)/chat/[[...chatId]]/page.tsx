import { ChatPage } from "@/components/component/chat-page";
import React from "react";

export default function ChatLandingPage({
  params,
}: {
  params: { chatId?: string[] };
}) {
  const chatId = params.chatId?.join("/");
  // console.log(chatId);
  return (
    <>
      <ChatPage />
    </>
  );
}
