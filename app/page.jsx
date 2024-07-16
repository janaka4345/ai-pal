'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Hero from './_components/Hero'
import Pricing from './_components/Pricing'
import Footer from './_components/Footer'
import Testimonials from './_components/Testimonials'
import About from './_components/About'

export default function LandingPage() {
    return (
        <section>
            <Hero />
            <About />
            <Pricing />
            <Testimonials />
            <Footer />
        </section>
    )
}
