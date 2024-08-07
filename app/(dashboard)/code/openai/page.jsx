'use client'
import MessageBubble from '@/components/custom/MessageBubble'
import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CodePrompt from './_components/CodePrompt'
import { useSession } from 'next-auth/react'
export default function CodeGeneration() {
    const [messages, setMessages] = useState([])
    const { data: session } = useSession()

    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [messages[messages.length - 1]?.message.content])

    return (
        <>
            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
            <div className="flex h-[80%] flex-col">
                <div
                    ref={containerRef}
                    className="h-[90%] overflow-y-auto overflow-x-clip"
                ></div>
                <h1 className="mb-4 mt-4 text-xl font-normal leading-none tracking-tight text-red-400 md:text-xl lg:mb-6">
                    Unfortunately OpenAi has stopped supporting free tier usage.
                    Use Gemini instead while we work alternative for it.
                </h1>
                {messages.map((message, i) =>
                    message.role === 'user' ? (
                        <MessageBubble
                            key={i}
                            message={message.parts[0].text}
                            role={message.role}
                            avatar={session.user.image || '/avatar.png'}
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
