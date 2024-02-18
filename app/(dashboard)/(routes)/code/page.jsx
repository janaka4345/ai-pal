"use client";
import { Code } from "lucide-react";
import { Heading } from "@/components/custom/Heading";
import { useState } from "react";
import CodePrompt from "./_components/CodePrompt";
import ReactMarkdown from "react-markdown";
export default function CodeGeneration() {
  const [messages, setMessages] = useState([]);

  return (
    <>
      <Heading
        title="Code Generation"
        description="something descriptive"
        icon={Code}
        iconColor="text-green-500"
        bgColor="bg-secondary"
      />
      <CodePrompt messages={messages} setMessages={setMessages} />
      {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
      {/* <pre>{JSON.stringify(messages, null, 2)}</pre> */}
      {messages.map((message, i) => (
        <ReactMarkdown
          key={i}
          components={{
            pre: ({ node, ...props }) => (
              <div className="overflow-auto w-full my-2 bg-black/20 p-3 rounded-lg">
                <pre {...props} />
              </div>
            ),
            code: ({ node, ...props }) => (
              <code className="bg-black/20 rounded-lg p-20" {...props} />
            ),
          }}
          className="overflow-hidden text-sm  leading-7"
        >
          {message.content}
        </ReactMarkdown>
      ))}
    </>
  );
}
