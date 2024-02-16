"use client";
import { MessageSquare } from "lucide-react";
import { Heading } from "@/components/custom/Heading";
import MessagePrompt from "./_components/MessagePrompt";
import { useState } from "react";

export default function Conversation() {
  const [messages, setMessages] = useState([]);

  return (
    <>
      <Heading
        title="Conversation"
        description="something descriptive"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-secondary"
      />
      <div className="w-full h-[400px] flex flex-col">
        <div className="h-[300px] overflow-y-auto overflow-x-clip">
          <pre>{JSON.stringify(messages, null, 2)}</pre>
        </div>
        <MessagePrompt messages={messages} setMessages={setMessages} />
      </div>
      {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
    </>
  );
}
