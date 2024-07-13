'use client'

import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp'
import axios from 'axios'
import { verificationTokenSchema } from '@/lib/shema'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter()
    const email = useSearchParams().get('email')

    const form = useForm({
        resolver: zodResolver(verificationTokenSchema),
        defaultValues: {
            email: email || '',
            verificationToken: '',
        },
    })
    async function onSubmit(values) {
        console.log(values)
        const response = await axios.post('/api/manualAuth/verifyEmail', {
            values,
        })
        console.log(response)
        if (response.data.success) {
            toast.success(response.data.success)
            router.push('/auth/signin')
        }
        if (response.data.error) {
            toast.error(response.data.error)
        }
    }
    async function requestNewToken() {
        // const response = await axios.post('/api/manualAuth/verifyEmail', {
        //     values,
        // })
        // console.log(response)
        // if (response.data.success) {
        //     toast.success(response.data.success)
        //     router.push('/auth/signin')
        // }
        // if (response.data.error) {
        //     toast.error(response.data.error)
        // }

        if (!email && !form.getValues('email')) {
            return toast.error('Empty email is provided')
        }

        const res = await axios.post('/api/manualAuth/newVerificationToken/', {
            values: { email: email || form.getValues('email') },
        })
        console.log(res)

        if (res.data.success) {
            toast.success(res.data.success)
            router.refresh()
        }
        if (res.data.error) {
            toast.error(res.data.error)
        }
    }
    return (
        <div className="g-6 mx-auto flex flex-col">
            <div className="mx-auto flex h-[60svh] w-[350px] flex-col justify-around">
                <h1>Verify Your Email Address</h1>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-2/3 space-y-6"
                    >
                        {email ? (
                            <p>
                                {' '}
                                Please enter the one-time password sent to your
                                email.
                                <br />
                                <span>{email}</span>
                            </p>
                        ) : (
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter Your Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="sample@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <FormField
                            control={form.control}
                            name="verificationToken"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>
                                        
                                        Please enter the one-time password sent
                                        to your email.
                                    </FormLabel> */}
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot
                                                    className="mx-1 bg-gray-300"
                                                    index={0}
                                                />
                                                <InputOTPSlot
                                                    className="mx-1 bg-gray-300"
                                                    index={1}
                                                />
                                                <InputOTPSlot
                                                    className="mx-1 bg-gray-300"
                                                    index={2}
                                                />
                                                <InputOTPSeparator />
                                                <InputOTPSlot
                                                    className="mx-1 bg-gray-300"
                                                    index={3}
                                                />
                                                <InputOTPSlot
                                                    className="mx-1 bg-gray-300"
                                                    index={4}
                                                />
                                                <InputOTPSlot
                                                    className="mx-1 bg-gray-300"
                                                    index={5}
                                                />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Verify Email</Button>
                    </form>
                </Form>
                <p>
                    Dindt recive the code?
                    <Button variant="link" onClick={requestNewToken}>
                        Request Another
                    </Button>
                </p>
            </div>
        </div>
    )
}
