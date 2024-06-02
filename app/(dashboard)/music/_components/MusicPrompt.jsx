'use client'
import { musicPromptSchema } from '@/lib/shema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import axios from 'axios'

export default function MessagePrompt({ music, setMusic }) {
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(musicPromptSchema),
        defaultValues: {
            musicPrompt: '',
        },
    })

    const isLoading = form.formState.isSubmitting

    async function onSubmit(values) {
        try {
            setMusic(undefined)
            // console.log({ newMusic });
            //TODO Use server actions here
            const response = await axios.post('/api/music', values)
            console.log(response)
            // setMusic(response.music.audio);

            if (response.status != 200) {
                throw new Error('Network response was not ok')
            }
            // Handle response data
            form.reset()
        } catch (error) {
            // TODO activate pro
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
                    className="mx-auto w-fit space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="musicPrompt"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Music Prompt</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder="Your music Prompt"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isLoading} type="submit">
                        {!isLoading ? 'Submit' : 'Submitting'}
                    </Button>
                </form>
            </Form>
        </>
    )
}
