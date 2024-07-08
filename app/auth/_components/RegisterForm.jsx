'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { registerSchema } from '@/schema/formSchema'
// import { registerAction }

export default function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
        },
    })
    async function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // try {
        // const res = await registerAction(values)
        // Generating the toaster message
        //     res.success &&
        //         toast.success(res.success, {
        //             // description: 'My description',
        //             duration: 1500,
        //         })
        //     res.error &&
        //         toast.error(res.error, {
        //             // description: 'My description',
        //             duration: 1500,
        //         })
        // } catch (error) {
        //     console.log({ error })
        // }
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-4 grid grid-cols-2 gap-4"
            >
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your first name"
                                    {...field}
                                />
                            </FormControl>
                            {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your last name"
                                    {...field}
                                />
                            </FormControl>
                            {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="col-start-1 col-end-2">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email address"
                                    {...field}
                                />
                            </FormControl>
                            {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="col-start-1 col-end-2 row-start-3">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter a strong password"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem className="col-start-2 col-end-3 row-start-3">
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Re-Enter your password"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="col-start-1 col-end-3 row-start-4 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    I accept the{' '}
                                    <Link
                                        className="text-primary-600 font-medium hover:underline"
                                        href="#"
                                    >
                                        Terms and Conditions
                                    </Link>
                                </FormLabel>
                                {/* <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <Link href="/examples/forms">mobile settings</Link> page.
                </FormDescription> */}
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                <Button
                    className="col-start-1 col-end-3 row-start-5 w-full"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                >
                    Create an account
                </Button>
            </form>
        </Form>
    )
}
