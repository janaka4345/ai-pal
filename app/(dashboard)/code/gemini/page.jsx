'use client'
import CodeBubble from '@/components/custom/CodeBubble'
import MessageBubble from '@/components/custom/MessageBubble'
import { useEffect, useRef, useState } from 'react'
import CodePrompt from './_components/CodePrompt'

export default function CodeGeneration() {
    const [messages, setMessages] = useState([
        {
            role: 'user',
            parts: [{ text: 'hi' }],
        },
        {
            role: 'model',
            parts: [
                {
                    text: "###### Code Blocks This markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this```<main>  <h1>This is a larger code block</h1></main>```",
                },
            ],
        },
    ])

    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            console.log(containerRef.current.scrollHeight)
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [messages[messages.length - 1].parts[0].text])

    return (
        <>
            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
            <div className="flex h-[80%] flex-col">
                <div ref={containerRef} className="h-[90%] overflow-auto">
                    {messages.map((message, i) =>
                        message?.role === 'user' ? (
                            <MessageBubble
                                key={i}
                                message={message?.parts[0]?.text}
                                role={message?.role}
                                avatar="/avatar.png"
                            />
                        ) : (
                            <CodeBubble
                                key={i}
                                messageCode={message.parts[0].text}
                            />
                        )
                    )}
                </div>
                <CodePrompt messages={messages} setMessages={setMessages} />
            </div>
        </>
    )
}
