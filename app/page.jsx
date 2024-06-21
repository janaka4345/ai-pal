'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Hero from './_components/Hero'
import Pricing from './_components/Pricing'
import Footer from './_components/Footer'
import Testimonials from './_components/Testimonials'

export default function LandingPage() {
    return (
        <section className="">
            <Hero />
            <Pricing />
            <Testimonials />
            <Footer />

            <Link href="/testAuthRoute">auth test route</Link>
            <br />
        </section>
    )
}
