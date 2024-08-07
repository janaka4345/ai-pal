'use client'

import { useState } from 'react'
import ImagePrompt from './_components/ImagePrompt'

import ImageBubble from '@/components/custom/ImageBubble'
import { useOpenaiImageStore } from '@/store/imageStore'
import { useSession } from 'next-auth/react'

export default function OpenaiImageConversation() {
    const { data: session } = useSession()
    // const [messages, setMessages] = useState([])

    const messages = useOpenaiImageStore((state) => state.images)

    return (
        <>
            {/* dalle 3 free tier only allowes 1 image and resolution 1024 only
      dalle 2free tier only allowes 5 image per min */}
            <ImagePrompt />
            <h1 className="mb-4 mt-4 text-xl font-normal leading-none tracking-tight text-red-400 md:text-xl lg:mb-6">
                Unfortunately OpenAi has stopped supporting free tier usage. Use
                Replicate instead while we work alternative for it.
            </h1>

            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}

            <div
                // className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8 w-[400px] mx-auto"
                className="h-[80%] overflow-y-auto overflow-x-clip"
            >
                {/* {messages.map((message, i) =>
          message.role === "user" ? (
            <MessageBubble
              key={i}
              message={message.content}
              role={message.role}
              avatar="avatar.png"
            />
          ) : (
            <Card
              key={i}
              className="rounded-lg overflow-hidden w-[150px] h-fit "
            >
              <CardContent className="p-0 pb-6">
                <div className="relative  ">
                  {message.content === "loading" ? (
                    <h1 className="w-[120px] h-[120px]">loading...</h1>
                  ) : (
                    <Image
                      alt="image"
                      width={120}
                      height={120}
                      src={message.content}
                      className="cursor-pointer mx-auto"
                      onClick={() => console.log("click")}
                    />
                  )}
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button>Download</Button>
                <Button variant="ghost">Save</Button>
              </CardFooter>
            </Card>
          )
        )} */}
                {messages.map((message, i) => (
                    <ImageBubble
                        key={i}
                        message={message.content}
                        avatar={session.user.image || '/avatar.png'}
                        role={message.role}
                    />
                ))}
            </div>
        </>
    )
}
