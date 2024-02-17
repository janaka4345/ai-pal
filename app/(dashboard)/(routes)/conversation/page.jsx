"use client";
import { MessageSquare } from "lucide-react";
import { Heading } from "@/components/custom/Heading";
import MessagePrompt from "./_components/MessagePrompt";
import { useEffect, useRef, useState } from "react";
import MessageBubble from "@/components/custom/MessageBubble";

export default function Conversation() {
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

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
        <div
          ref={containerRef}
          className="h-[300px] overflow-y-auto overflow-x-clip"
        >
          {/* <pre>{JSON.stringify(messages, null, 2)}</pre> */}
          {messages.map((message, i) => (
            <MessageBubble
              message={message.content}
              avatar={
                message.role === "user" ? "/avatar.png" : "/ai avatar.png"
              }
              role={message.role}
            />
          ))}
        </div>
        <MessagePrompt messages={messages} setMessages={setMessages} />
      </div>
      {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
    </>
  );
}
