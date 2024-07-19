'use client'
import Spinner from '@/components/custom/Spinner'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { imagePromptSchema } from '@/lib/shema'
import { useReplicateImageStore } from '@/store/imageStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function ImagePrompt() {
    const setImages = useReplicateImageStore((state) => state.updateImages)

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
        setImages([])
        try {
            // console.log({ newImages });
            //TODO Use server actions here
            const response = await axios.post('/api/imageReplicate', values)
            // setImages(response);

            // if (response.status != 200) {
            //   throw new Error("Network response was not ok");
            // }
            //   // Handle response data

            // const urls=response.data.map(url=>(

            // ))
            const urls = response.data
            setImages(urls)
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
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </>
    )
}
