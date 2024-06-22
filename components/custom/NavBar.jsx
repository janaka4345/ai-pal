import { cn } from '@/lib/utils'
import User from './User'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="fixed start-0 top-0 z-20 h-[10dvh] w-full border-b border-gray-200 backdrop-blur-md">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center p-4">
                <a href="/" className="flex items-center space-x-3">
                    <svg
                        fill="none"
                        viewBox="0 0 184 100"
                        className="h-[40px] w-[60px]"
                    >
                        <g
                            strokeLinecap="round"
                            strokeWidth="3"
                            clipPath="url(#a)"
                        >
                            <path
                                stroke="#000"
                                d="M39.8 70c.8.6 2.4.2 3.3.1 5.6-.7 11.1-2.3 16.8-3.3a55.5 55.5 0 0 1 22.3.5"
                            />
                            <path
                                stroke="#000"
                                d="M94.9 47.4c-1.7 3.5-5.8 6-8.3 9-3.5 4-7.2 11-4.8 16.5.6 1.2 7.8 10 9.7 8.1"
                            />
                            <path
                                stroke="#fff"
                                d="M51.5 23.9c-.1-.5.1-.8.2-1.2 0-.4.2-.3.5-.6.4-.4 1.5-.4 2.1-.6.9-.2 3.1-.2 3.1 1 0 .5.1 1-.1 1.4-.2.3-.4.3-.4.7"
                            />
                            <path
                                stroke="#fff"
                                d="M56.1 24.9c.7-1.2-.2-2.3-.4-3.4M51.3 23.2l-.2.3M51.7 24s0 0 0 0l.3-.5.2-.2H52M53.3 21.5c-.3.5-.8 1-1 1.5l-.3.2"
                            />
                            <path
                                stroke="#000"
                                d="M52.3 23.3c.3 0 .6-.2 1-.4.1-.1.3 0 .5-.2l.3-.1v-.2"
                            />
                            <path
                                stroke="#fff"
                                d="M50 24.6c.2 0 .2-.2.3-.3M50.6 24l.3-.1.4-.3.4-.3.5-.3.9-.4.3-.2s0 0 0 0c.2-.1.1-.3.1-.3 0-.1 0-.1 0 0v.6l-.4.7-.2.2c0 .1.2 0 .2 0l.5-.1.3-.3.1-.2.3.3c0 .2.2.3.3.5l1 .4.7.1.7.1.6-.3.1-.4v-.4c0-.2-.3-.3-.4-.4l-1.2-.4a2.8 2.8 0 0 1-1.3-.8l-.2-.2"
                            />
                            <path
                                stroke="#000"
                                d="M51.7 24.3h.1l.5-.3.8-.5c.4-.2.7-.2 1.1-.2.3 0 .6.2.8.3l.5.4c.3.2.4.6.6 1l.1.4.2.5"
                            />
                            <path
                                stroke="#fff"
                                d="m50.6 23.7-.2.1M50.2 24s0 0 0 0l.4-.2.5-.3.1-.1h.3M51.6 23.4c.2.3.6.4.9.7l.2.4s0 0 0 0l.3-.2c.1-.1.3 0 .4.1l.3.3v.1s0 .1 0 0c0 0 0 0 0 0l.2-.2.2-.6c0-.1 0-.2.2-.3 0 0 0 0 0 0v.3l-.2.7-.1.3v.1h.1l.8-.2c.5-.2 1-.4 1.2-.9v-.3l-.1-.4c-.3-.3-.6-.5-1-.6h-2.1l-.6.2"
                            />
                            <path
                                stroke="#000"
                                d="m55.7 23.4.2.2 1 .8c.2.2.5.3.6.6v.6"
                            />
                            <path
                                stroke="#000"
                                d="m56 27 .3-.2c.1-.1.3-.3.5-.3h.4l.5-.5.3-.9s0 0 0 0l-.7-.1"
                            />
                            <path
                                stroke="#fff"
                                d="M55 23.3v-.2c.2-.1.2-.3.2-.5 0 0 0 0 0 0l.2.4 1 1 .5.5h.3l.1.3.3.3.2.4.2-.5v-1l-.4-.7s0-.1 0 0c-.1 0-.1.3 0 .4.1.5.4 1 .7 1.5.2.4.4 1 .2 1.4l-.4.6-.5.5M55.4 5.3c-1.1.2-2.5 2.3-3 3.1-.9 1.8-1.3 3.5-.6 5.4.5 1.4 1.6 2.4 3.1 2.4 1.6 0 6 1.9 6-.3"
                            />
                            <path
                                stroke="#002BFF"
                                d="M56 12.5c-.5-1-3-3.4-.2-3.4 1.5 0 1.6 2 1.6 3.4"
                            />
                            <path
                                stroke="#0F0"
                                d="M87.5 34.5c.2.9 1 .7 1.7.7 1.6 0 3.4-2.1 4.1-3.5.6-.9 1.2-1.3.8-2.5-.3-1.1-3.2-2.4-4.1-1.7M87.5 34c.6 0 3.7-2 4.3-2"
                            />
                            <path stroke="#0F0" d="M92 31c-4-3-4.2 1-4.5.5" />
                            <path
                                stroke="#002AFF"
                                d="M54 26c0 1.8.3 3.5-.9 5-.7.9-1.4 2.9-1.4 4 0 2.4 0 5-1.7 7M54 24c-2.3 0-4 4.1-4 7"
                            />
                            <path stroke="#0F0" d="m89.8 31-.3.6M88.7 28.5h0" />
                            <path
                                stroke="#000"
                                d="M88.2 26c-1 1.8-5.6 11.6-1.4 11.5 6.4-.1 13.5-11.3 4.2-12.1"
                            />
                            <path
                                stroke="#002AFF"
                                d="M52.1 28.3c.3.2-.1.9-.2 1.1l-.8 1.3c-.4.5-.3 1.3-.6 1.9M58.8 12.8c.2 0 .5.1.3.4"
                            />
                            <path
                                stroke="#000"
                                d="M56.3 15.3c-3.9-.9-5.9-5.9-1.9-7.6.9-.4 1.5-.7 2.4-.2 1 .6 2.9 3 3.2 4 .3 1 1 1.5.2 2.4-.8.8-1.5.8-2.6.8M51 25c.2-.4 1.4-2.5 1.7-2.7l.7-.3h.6c.2 0 .6-.1 1.1.1.4.3.5.5.8 1.4l.1.5c0 .1-.6 3.9-.5 4"
                            />
                        </g>
                        <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M55.5 28c-1.9 10-4.6 17.9-7.4 27.7-1.9 6.3-3.4 12.8-5.9 19-2.3 5.9-6 7.8-12 10.1-1.9.8-8 1.7-5.9 1.7"
                        />
                        <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M51.5 24c-4.4 8.1-2.9 21.4 1.7 29 5.1 8.8 12.4 16.7 19.3 24.1 1.4 1.5 9 11 11.9 10M120.1 41c-.5 16.6-3.7 33-5.1 49.6M120.1 41.5c8.1 2 16.2 8.6 22.8 13.4 2 1.4 6.5 4.2 7 7.1.4 3.2-4.6 6.5-6.6 7.9-7 5-15.5 7.1-24 7.1M144 77c-5 0-8.8 1.8-13 4.4-.7.4-7.6 4.1-5.5 6.2.8.7 3.7.5 4.5.4 3.1 0 6.5-.6 9.3-2.1 2.8-1.6 4.2-4.8 4.2-8"
                        />
                        <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M143.5 77c.6 2.6 1.1 5.2 2 7.6.4 1.2 2.2.8 3.2.8M159.9 45.2c-2 6.8-4 13.7-6.3 20.4-1 3.3-1.7 7-1.7 10.5 0 1.1-.7 6 .5 6.5"
                        />
                        <defs>
                            <clipPath id="a">
                                <path
                                    fill="#fff"
                                    d="M0 0h84v84H0z"
                                    transform="translate(39 2)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="hidden self-center whitespace-nowrap text-2xl font-semibold md:block">
                        AI Pal
                    </span>
                </a>

                <div className="mx-auto hidden w-full items-center justify-between md:flex md:w-auto">
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
                        <li>
                            <a
                                href="#"
                                className="rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#pricing"
                                className="rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="hidden space-x-3 md:order-2 md:flex md:space-x-0">
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div> */}
                {/* TODO session change fix */}
                <Link
                    href="/dashboard"
                    className={cn(buttonVariants(), 'mr-4')}
                >
                    Dashboard
                </Link>
                <User />
            </div>
        </nav>
    )
}
