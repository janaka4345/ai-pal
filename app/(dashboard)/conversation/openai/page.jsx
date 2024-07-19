'use client'
import MessageBubble from '@/components/custom/MessageBubble'
import { useOpenaiConversationStore } from '@/store/conversationStore'
import { useEffect, useRef } from 'react'
import MessagePrompt from './_components/MessagePrompt'

export default function OpenaiConversation() {
    const containerRef = useRef(null)
    const messages = useOpenaiConversationStore((state) => state.messages)

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [messages[messages.length - 1]?.message.content])

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
                <MessagePrompt />
            </div>
            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
        </>
    )
}
