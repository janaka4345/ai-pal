import { Heading } from '@/components/custom/Heading'
import { Code } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function layout({ children }) {
    return (
        <>
            <Heading
                title="Code Generation"
                description="something descriptive"
                icon={Code}
                iconColor="text-green-500"
                bgColor="bg-secondary"
            />
            <nav className="fixed flex flex-row gap-2">
                <Link
                    className={cn(buttonVariants({ variant: 'link' }))}
                    href="/code/gemini"
                >
                    gemini code
                </Link>
                <Link
                    className={cn(buttonVariants({ variant: 'link' }))}
                    href="/code/openai"
                >
                    openai code
                </Link>
            </nav>
            {children}
        </>
    )
}
