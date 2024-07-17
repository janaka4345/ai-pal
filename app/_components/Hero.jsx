import Link from 'next/link'
import Companies from './Companies'

export default function Hero() {
    return (
        <section id="hero" className="">
            <div className="mx-auto flex h-[calc(100dvh-10dvh)] max-w-screen-xl flex-col px-4 py-8 text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-secondary-foreground md:text-5xl lg:text-6xl">
                    <span className="bg-gradient-to-r from-cyan-500 to-primary bg-clip-text text-6xl text-transparent lg:text-8xl">
                        Create.
                    </span>
                    <span className="bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-6xl text-transparent lg:text-8xl">
                        Code.
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-6xl text-transparent lg:text-8xl">
                        Converse.
                    </span>
                    <br />
                    <span className="">All-in-one AI toolkit</span>
                </h1>
                <p className="my-8 text-lg font-normal text-secondary-foreground sm:px-16 lg:px-48 lg:text-xl">
                    Stuck on a design? Struggling with code? Need a creative
                    chat buddy? We've got you covered.
                </p>
                <div className="mt-16 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link
                        href="/dashboard"
                        className="mt-auto inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-primary focus:ring-4 focus:ring-primary"
                    >
                        Get started
                        <svg
                            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                            fill="none"
                            aria-hidden="true"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                    <Link
                        href="#"
                        className="rounded-lg border border-gray-700 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-secondary hover:text-primary focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:ms-4"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
            <Companies />
        </section>
    )
}
