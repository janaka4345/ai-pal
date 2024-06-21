import { Heading } from '@/components/custom/Heading'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Image as LucidImage } from 'lucide-react'
import Link from 'next/link'

export default function layout({ children }) {
    return (
        <>
            <Heading
                title="Image Generation"
                description="something descriptive"
                icon={LucidImage}
                iconColor="text-pink-500"
                bgColor="bg-pink-700/10"
            />
            <nav className="flex flex-row gap-2">
                <Link
                    className={cn(buttonVariants({ variant: 'link' }))}
                    href="/image-gen/openai"
                >
                    openai
                </Link>
                <Link
                    className={cn(buttonVariants({ variant: 'link' }))}
                    href="/image-gen/replicate"
                >
                    replicate
                </Link>
            </nav>
            {children}
        </>
    )
}
