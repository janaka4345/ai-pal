'use client'
import MessageBubble from '@/components/custom/MessageBubble'
import { useEffect, useRef, useState } from 'react'
import MessagePrompt from './_components/MessagePrompt'
import { useGeminiConversationStore } from '@/store/conversationStore'
import { useSession } from 'next-auth/react'

export default function GeminiConversation() {
    // const [messages, setMessages] = useState([])
    const containerRef = useRef(null)

    const messages = useGeminiConversationStore((state) => state.messages)
    // const setMessages = useGeminiConversationStore(
    //     (state) => state.updateMessages
    // )
    console.log(messages)
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
        //TODO dependancy array mus depend on primitives
        // }, [messages[messages.length - 1].parts[0].text])
    }, [messages[messages.length - 1]?.parts[0].text])
    const { data: session } = useSession()
    return (
        <>
            {/* must spesify a height for use effect scrolling to work */}
            <div className="flex h-[80%] flex-col">
                <div
                    ref={containerRef}
                    className="h-[90%] overflow-y-auto overflow-x-clip"
                >
                    {messages &&
                        messages.map((message, i) => (
                            <MessageBubble
                                key={i}
                                message={message.parts[0].text}
                                // message='hi'
                                avatar={
                                    message.role === 'user'
                                        ? session.user.image
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
