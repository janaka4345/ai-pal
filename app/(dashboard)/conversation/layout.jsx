import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MessageSquare } from 'lucide-react'
import { Heading } from '@/components/custom/Heading'

export default function layout({ children }) {
    return (
        <>
            <Heading
                title="Conversation"
                description="something descriptive"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-secondary"
            />
            <nav className="flex flex-row gap-2">
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
