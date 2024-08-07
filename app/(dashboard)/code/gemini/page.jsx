'use client'
import CodeBubble from '@/components/custom/CodeBubble'
import MessageBubble from '@/components/custom/MessageBubble'
import { useEffect, useRef, useState } from 'react'
import CodePrompt from './_components/CodePrompt'
import { useGeminiCodeStore } from '@/store/codeStore'
import { useSession } from 'next-auth/react'

export default function CodeGeneration() {
    // const [messages, setMessages] = useState([])
    const messages = useGeminiCodeStore((state) => state.messages)

    const containerRef = useRef(null)
    const { data: session } = useSession()

    useEffect(() => {
        if (containerRef.current) {
            console.log(containerRef.current.scrollHeight)
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [messages[messages.length - 1]?.parts[0].text])

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
                                avatar={session.user.image || '/avatar.png'}
                            />
                        ) : (
                            <CodeBubble
                                key={i}
                                messageCode={message.parts[0].text}
                            />
                        )
                    )}
                </div>
                <CodePrompt />
            </div>
        </>
    )
}
