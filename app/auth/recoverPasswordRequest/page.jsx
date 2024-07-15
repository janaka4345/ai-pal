import Link from 'next/link'
import { RecoverPasswordRequestForm } from '../_components/RecoverPasswordRequestForm'

export default function page() {
    return (
        <div className="mx-auto flex flex-col p-6">
            <div className="mx-auto flex w-[350px] flex-col justify-center gap-2">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Recover your password
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email below to recover the password
                    </p>
                </div>
                <RecoverPasswordRequestForm />
            </div>
            <p className="mx-auto mt-4 h-fit px-8 text-center text-sm font-light text-gray-500 text-muted-foreground">
                Already have the code?{' '}
                <Link
                    href="/auth/recoverPasswordVerify"
                    className="text-primary-600 font-medium hover:underline"
                >
                    Verify it
                </Link>
            </p>
            <p className="mx-auto mt-4 h-fit px-8 text-center text-sm font-light text-gray-500 text-muted-foreground">
                Go back to{' '}
                <Link
                    href="/auth/signin"
                    className="text-primary-600 font-medium hover:underline"
                >
                    Sign In
                </Link>
            </p>
        </div>
    )
}
