'use client'
import { buttonVariants } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Hero from './_components/Hero'

export default function LandingPage() {
    const session = useSession()
    return (
        <section className="">
            <Hero />
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <div>Landingp page</div>
            <Link className={buttonVariants()} href="/dashboard">
                dashboard
            </Link>
            <br />
            <Link href="/testAuthRoute">auth test route</Link>
            <br />
        </section>
    )
}
