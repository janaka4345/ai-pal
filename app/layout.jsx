import NavBar from '@/components/custom/NavBar'
// import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
// import SessionProvider from './api/auth/_components/SessionProvider'
import './globals.css'
import { Toaster } from 'sonner'

//TODO remove client side session provider
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AI Pal',
    description: 'All-in-one AI toolkit',
}

export default async function RootLayout({ children }) {
    // const session = await getServerSession()
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <SessionProvider session={session}> */}
                <NavBar />
                <main className="pt-[10dvh]">{children}</main>
                {/* </SessionProvider> */}
                <Toaster richColors />
            </body>
        </html>
    )
}
