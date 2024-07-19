'use client'
import { promptSchema } from '@/lib/shema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import axios from 'axios'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import Spinner from '@/components/custom/Spinner'
import { useGeminiConversationStore } from '@/store/conversationStore'

export default function MessagePrompt() {
    const messages = useGeminiConversationStore((state) => state.messages)
    const setMessages = useGeminiConversationStore(
        (state) => state.updateMessages
    )

    console.log({ messages, setMessages })
    const form = useForm({
        resolver: zodResolver(promptSchema),
        defaultValues: {
            message: '',
        },
    })

    const isLoading = form.formState.isSubmitting

    async function onSubmit(values) {
        const userMessage = {
            role: 'user',
            // parts: values.message,
            parts: [{ text: values.message }],
        }

        const newMessages = [...messages, userMessage]
        const fullMessage = [
            ...messages,
            userMessage,
            { role: 'model', parts: [{ text: 'loading' }] },
        ]
        setMessages(fullMessage)

        try {
            //TODO Use server actions here
            const response = await axios.post('/api/conversationGemini', {
                messages: newMessages,
            })

            const newFullMessage = [...fullMessage]
            newFullMessage[newFullMessage.length - 1] = response.data

            setMessages(newFullMessage)

            if (response.status != 200) {
                throw new Error('Network response was not ok')
            }
            // Handle response data

            form.reset()
        } catch (error) {
            // TODO activate pro
            console.log(error)
        }
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mx-auto w-[80%] space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                            <ChatBubbleIcon className="text-violet-500" />
                                        </div>

                                        <Input
                                            autoFocus
                                            className="pl-10"
                                            disabled={isLoading}
                                            placeholder="Chat with AI"
                                            {...field}
                                        />
                                        <Button
                                            size="sm"
                                            variant="send"
                                            className="absolute bottom-0.5 end-0"
                                            disabled={
                                                isLoading || field.value === ''
                                            }
                                            type="submit"
                                        >
                                            {!isLoading ? (
                                                'Send'
                                            ) : (
                                                <Spinner text="Sending..." />
                                            )}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </>
    )
}
