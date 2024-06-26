'use client'
import { imagePromptSchema } from '@/lib/shema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import Spinner from '@/components/custom/Spinner'
import { ChatBubbleIcon } from '@radix-ui/react-icons'

export default function ImagePrompt({ messages, setMessages }) {
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(imagePromptSchema),
        defaultValues: {
            imagePrompt: '',
        },
    })

    const isLoading = form.formState.isSubmitting

    async function onSubmit(values) {
        console.log(values)
        setMessages((currentMessages) => [
            ...currentMessages,
            { role: 'user', content: values.imagePrompt },
            { role: 'assistant', content: 'loading' },
        ])
        try {
            // console.log({ newmessages });
            //TODO Use server actions here
            const response = await axios.post('/api/image', values)

            // setMessages(response);

            // if (response.status != 200) {
            //   throw new Error("Network response was not ok");
            // }
            //   // Handle response data

            // const urls=response.data.map(url=>(

            // ))
            const urls = response.data.data
            setMessages((currentMessages) => {
                const updateArray = [...currentMessages]
                updateArray.pop()
                updateArray.push({ role: 'assistant', content: urls })

                console.log(updateArray)

                return updateArray
            })
            console.log(messages)
            // TODO form fselet fields arnt resreting
            form.reset({
                imagePrompt: '',
            })

            // console.log({ response });
        } catch (error) {
            //   // TODO activate pro
            console.log(error)
        } finally {
            router.refresh()
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
                        name="imagePrompt"
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
                                            placeholder="Your Image Prompt"
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
                                                'Generate'
                                            ) : (
                                                <Spinner text="Generating..." />
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
