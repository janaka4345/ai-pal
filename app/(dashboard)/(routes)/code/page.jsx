"use client";
import { Code } from "lucide-react";
import { Heading } from "@/components/custom/Heading";
import { useState } from "react";
import CodePrompt from "./_components/CodePrompt";

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
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </>
  );
}
