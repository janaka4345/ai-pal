'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { userAuthformSchema } from '@/lib/shema'
import axios from 'axios'
import { toast } from 'sonner'
// import axios from 'axios'

export function UserAuthForm({ className, ...props }) {
    const form = useForm({
        resolver: zodResolver(userAuthformSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    async function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        try {
            const res = await axios.post('/api/manualAuth/login', {
                values: values,
            })
            // console.log(res)
            if (res?.data?.success) {
                toast.success(res?.data?.success)
            }
            if (res?.data?.error) {
                toast.error(res?.data?.error)
            }
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="mt-4">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="*********"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="mt-4 w-full" type="submit">
                    Sign In with Email
                </Button>
            </form>
        </Form>
    )
}
