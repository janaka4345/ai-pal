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

import { recoverPasswordSchema } from '@/lib/shema'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
// import axios from 'axios'

export function RecoverPasswordRequestForm({ className, ...props }) {
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(recoverPasswordSchema),
        defaultValues: {
            email: '',
        },
    })

    async function onSubmit(values) {
        console.log(values)
        try {
            const res = await axios.post(
                '/api/manualAuth/recoverPassword/request',
                {
                    values: values,
                }
            )
            console.log(res)
            if (res.data.success) {
                toast(
                    'If credentials are correct, an email has been sent to the provided email address'
                )
                router.push(`/auth/recoverPasswordVerify?email=${values.email}`)
            }
            // console.log({ res })
            // if (res?.error) {
            //     toast.error(res?.error)
            // }
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
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

                <Button
                    className="mt-4 w-full"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                >
                    Recover the Password
                </Button>
            </form>
        </Form>
    )
}
