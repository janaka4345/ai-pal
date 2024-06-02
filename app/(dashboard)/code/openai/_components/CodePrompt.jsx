'use client'
import Spinner from '@/components/custom/Spinner'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { codePromptSchema } from '@/lib/shema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function CodePrompt({ messages, setMessages }) {
    const form = useForm({
        resolver: zodResolver(codePromptSchema),
        defaultValues: {
            prompt: '',
        },
    })

    const isLoading = form.formState.isSubmitting

    async function onSubmit(values) {
        const userMessage = {
            role: 'user',
            content: values.prompt,
        }
        const newMessages = [...messages, userMessage]
        // console.log({ newMessages });
        //TODO Use server actions here
        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
            { role: 'assistant', content: 'loading' },
        ])
        try {
            const response = await axios.post('/api/codeOpenai', {
                messages: newMessages,
            })

            setMessages((currentMessages) => {
                const updateArray = [...currentMessages]
                updateArray[updateArray.length - 1] = response.data
                return updateArray
            })

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
                        name="prompt"
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
                                            placeholder="Your Prompt to generate code"
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
