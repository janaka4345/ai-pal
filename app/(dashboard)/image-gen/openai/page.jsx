'use client'

import { useState } from 'react'
import ImagePrompt from './_components/ImagePrompt'

import ImageBubble from '@/components/custom/ImageBubble'

export default function OpenaiImageConversation() {
    const [messages, setMessages] = useState([])

    return (
        <>
            {/* dalle 3 free tier only allowes 1 image and resolution 1024 only
      dalle 2free tier only allowes 5 image per min */}
            <ImagePrompt messages={messages} setMessages={setMessages} />

            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}

            <div
                // className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8 w-[400px] mx-auto"
                className="h-[90%] overflow-y-auto overflow-x-clip"
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
                        avatar="/avatar.png"
                        role={message.role}
                    />
                ))}
            </div>
        </>
    )
}
