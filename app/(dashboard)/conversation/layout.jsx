import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function layout({ children }) {
    return (
        <>
            <nav className="fixed flex flex-row gap-2">
                <Link
                    className={cn(buttonVariants({ variant: 'link' }))}
                    href="/conversation/gemini"
                >
                    gemini
                </Link>
                <Link
                    className={cn(buttonVariants({ variant: 'link' }))}
                    href="/conversation/openai"
                >
                    openai
                </Link>
            </nav>
            {children}
        </>
    )
}
