"use client";
import { Heading } from "@/components/custom/Heading";
import MessageBubble from "@/components/custom/MessageBubble";
import { MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MessagePrompt from "./_components/MessagePrompt";

export default function GeminiConversation() {
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);
console.log(messages);
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
      {/* must spesify a height for use effect scrolling to work */}
      <div className=" h-[85%]  flex flex-col">
        <div
          ref={containerRef}
          className="h-[90%] overflow-y-auto overflow-x-clip"
        >
          {messages && messages.map((message, i) => (
            <MessageBubble
              key={i}
              message={message.parts[0].text}
              // message='hi'
              avatar={
                message.role === "user" ? "/avatar.png" : "/ai-avatar.png"
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
