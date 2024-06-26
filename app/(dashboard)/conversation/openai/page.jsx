'use client'
import { Heading } from '@/components/custom/Heading'
import MessagePrompt from './_components/MessagePrompt'
import { useEffect, useRef, useState } from 'react'
import MessageBubble from '@/components/custom/MessageBubble'

export default function OpenaiConversation() {
    const [messages, setMessages] = useState([])
    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [messages])

    return (
        <>
            {/* must spesify a height for use effect scrolling to work */}
            <div className="flex h-[80%] flex-col">
                <div
                    ref={containerRef}
                    className="h-[90%] overflow-y-auto overflow-x-clip"
                >
                    {messages.map((message, i) => (
                        <MessageBubble
                            key={i}
                            message={message.content}
                            avatar={
                                message.role === 'user'
                                    ? '/avatar.png'
                                    : '/ai-avatar.png'
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
    )
}
