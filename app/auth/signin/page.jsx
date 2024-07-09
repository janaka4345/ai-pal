import Link from 'next/link'

import SocialAuth from '../_components/SocialAuth'
import { UserAuthForm } from '../_components/UserAuthForm'

// export const metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components.",
// }

export default function page() {
    return (
        <div className="mx-auto flex flex-col p-6">
            <div className="mx-auto flex w-[350px] flex-col justify-center gap-2">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Log in with Email
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                {/* <UserAuthForm /> */}
                <UserAuthForm />
                <SocialAuth />
            </div>
            <p className="h-fit text-sm font-light text-gray-500">
                Dont have an account?{' '}
                <Link
                    href="/auth/register"
                    className="text-primary-600 font-medium hover:underline"
                >
                    Register
                </Link>
            </p>
            <p className="mx-auto mt-4 px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{' '}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        </div>
    )
}
