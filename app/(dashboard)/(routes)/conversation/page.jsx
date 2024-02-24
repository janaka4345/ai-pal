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
      console.log({
        1: containerRef.current.scrollHeight,
        2: containerRef.current.scrollTop,
      });
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    console.log({
      3: containerRef.current.scrollHeight,
      4: containerRef.current.scrollTop,
    });
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
      <div className="w-full  flex flex-col">
        <div ref={containerRef} className=" overflow-y-auto overflow-x-clip">
          {messages.map((message, i) => (
            <MessageBubble
              key={i}
              message={message.content}
              avatar={
                message.role === "user" ? "/avatar.png" : "/ai avatar.png"
              }
              role={message.role}
            />
          ))}
        </div>
        <div className=" fixed bottom-0 right-0 left-72 m-4 mb-0 pb-4 bg-white">
          <MessagePrompt messages={messages} setMessages={setMessages} />
        </div>
      </div>
      {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
    </>
  );
}
