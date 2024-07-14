'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { userAuthformSchema } from '@/lib/shema'
import { signIn } from 'next-auth/react'
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
        try {
            const res = await signIn('credentials', {
                email: values.email,
                password: values.password,
                redirect: true,
                callbackUrl: '/dashboard',
            })
            // console.log({ res })
            if (res?.error) {
                toast.error(res?.error)
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
                                <Input
                                    placeholder="example@sample.com"
                                    {...field}
                                />
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
                <Button
                    className="mt-4 w-full"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                >
                    Sign In with Email
                </Button>
            </form>
        </Form>
    )
}
