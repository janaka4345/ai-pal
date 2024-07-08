import Link from 'next/link'
import RegisterForm from '../_components/RegisterForm'

export default function page() {
    return (
        <section className="lg:p-8">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to create a new Account
                </p>
            </div>
            <RegisterForm />
            <p className="mt-4 text-sm font-light text-gray-500">
                Already have an account?{' '}
                <Link
                    href="/auth/signin"
                    className="text-primary-600 font-medium hover:underline"
                >
                    Login here
                </Link>
            </p>
        </section>
    )
}
