'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import LoadingSkeleton from '@/components/Skeletons/LoadingSkeleton'
import Image from 'next/image'

export default function ImageBubble({ message, avatar, role }) {
    return (
        <div
            className={cn('m-10 flex w-fit min-w-[200px] items-start gap-2.5', {
                'ml-auto flex-row-reverse': role === 'user',
                'ml-10 flex-row': role === 'assistant',
            })}
        >
            <img
                className="h-8 w-8 rounded-full"
                src={avatar}
                alt="avatar image"
            />
            <div
                className={cn(
                    'leading-1.5 relative flex w-full max-w-[320px] flex-col border-gray-200 p-4',
                    {
                        'rounded-s-xl rounded-ee-xl bg-green-100':
                            role === 'user',
                        'rounded-e-xl rounded-es-xl bg-red-100':
                            role === 'assistant',
                    }
                )}
            >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900">
                        {role === 'user' ? 'Bonnie Green' : 'AI Assistant'}
                    </span>
                </div>
                {role === 'assistant' &&
                    (message === 'loading' ? (
                        <LoadingSkeleton />
                    ) : (
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {message.map(({ url }, i) => (
                                <Image
                                    key={url}
                                    placeholder="blur"
                                    blurDataURL="/blur.jpg"
                                    className="h-auto w-auto"
                                    priority
                                    src={url}
                                    sizes="(min-width: 2900px) 23vw, (min-width: 2680px) 25vw, (min-width: 2540px) 21.67vw, (min-width: 2280px) calc(22.92vw + 60px), (min-width: 1940px) 28.13vw, (min-width: 1220px) 33vw, (min-width: 800px) 50vw, (min-width: 540px) 33.33vw, calc(50vw - 8px)"
                                    //   fill
                                    width={256}
                                    height={171}
                                    alt="Picture of the author"
                                />
                            ))}
                        </div>
                    ))}

                {role === 'user' && (
                    <p className="py-2.5 text-sm font-normal text-gray-900">
                        {message}
                    </p>
                )}

                {/* {role === "assistant" && message != "loading" && (
          <Button
            onClick={() => navigator.clipboard.writeText(message)}
            variant="ghostCopy"
            size="icon"
            className="absolute top-0 right-0 "
          >
            <Copy className="w-5 h-5" />
          </Button>
        )} */}
            </div>
        </div>
    )
}
