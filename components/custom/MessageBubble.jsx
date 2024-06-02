'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
import LoadingSkeleton from '@/components/Skeletons/LoadingSkeleton'

export default function MessageBubble({ message, avatar, role }) {
    return (
        //role === "assistant"||role ==="model"  assistance required for open ai responses and model required for gemini ai api
        // TODO change api response to return an uniform responses across different apis
        <div
            className={cn('m-10 flex w-fit min-w-[200px] items-start gap-2.5', {
                'ml-auto flex-row-reverse': role === 'user',
                'ml-10 flex-row': role === 'assistant' || role === 'model',
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
                            role === 'assistant' || role === 'model',
                    }
                )}
            >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900">
                        {role === 'user' ? 'Bonnie Green' : 'AI Assistant'}
                    </span>
                </div>

                {message === 'loading' ? (
                    <LoadingSkeleton />
                ) : (
                    <p className="py-2.5 text-sm font-normal text-gray-900">
                        {message}
                    </p>
                )}

                {(role === 'assistant' || role === 'model') &&
                    message != 'loading' && (
                        <Button
                            onClick={() =>
                                navigator.clipboard.writeText(message)
                            }
                            variant="ghostCopy"
                            size="icon"
                            className="absolute right-0 top-0"
                        >
                            <Copy className="h-5 w-5" />
                        </Button>
                    )}
            </div>
        </div>
    )
}
