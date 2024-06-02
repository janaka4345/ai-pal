'use client'
import { Code } from 'lucide-react'
import { Heading } from '@/components/custom/Heading'
import { useEffect, useRef, useState } from 'react'
import CodePrompt from './_components/CodePrompt'
import ReactMarkdown from 'react-markdown'
import MessageBubble from '@/components/custom/MessageBubble'
export default function CodeGeneration() {
    const [messages, setMessages] = useState([])

    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [messages])

    return (
        <>
            <Heading
                title="Code Generation"
                description="something descriptive"
                icon={Code}
                iconColor="text-green-500"
                bgColor="bg-secondary"
            />

            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
            <div className="flex h-[85%] flex-col">
                <div
                    ref={containerRef}
                    className="h-[90%] overflow-y-auto overflow-x-clip"
                ></div>
                {messages.map((message, i) =>
                    message.role === 'user' ? (
                        <MessageBubble
                            key={i}
                            message={message.parts[0].text}
                            role={message.role}
                            avatar="/avatar.png"
                        />
                    ) : (
                        <ReactMarkdown
                            key={i * 10 + 10}
                            components={{
                                pre: ({ node, ...props }) => (
                                    <div className="my-2 w-full overflow-auto rounded-lg bg-black/20 p-3">
                                        <pre {...props} />
                                    </div>
                                ),
                                code: ({ node, ...props }) => (
                                    <code
                                        className="w-fit rounded-lg bg-black/20 p-1"
                                        {...props}
                                    />
                                ),
                            }}
                            className="overflow-hidden text-sm leading-7"
                        >
                            {message.content}
                        </ReactMarkdown>
                    )
                )}
                <CodePrompt messages={messages} setMessages={setMessages} />
            </div>
        </>
    )
}
