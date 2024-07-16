'use client'
import About from './_components/About'
import Footer from './_components/Footer'
import Hero from './_components/Hero'
import Pricing from './_components/Pricing'
import Testimonials from './_components/Testimonials'

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
