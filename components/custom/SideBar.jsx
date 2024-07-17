'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
    Code,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
    VideoIcon,
} from 'lucide-react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500',
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation/gemini',
        color: 'text-violet-500',
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        color: 'text-pink-700/replicate',
        href: '/image-gen/replicate',
    },
    // {
    //   label: "Replicate Image Generation",
    //   icon: ImageIcon,
    //   color: "text-pink-700",
    //   href: "/imageReplicate",
    // },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        color: 'text-orange-700',
        href: '/video',
    },
    {
        label: 'Music Generation',
        icon: Music,
        color: 'text-emerald-500',
        href: '/music',
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: 'text-green-700',
        href: '/code/gemini',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
]
export default function SideBar() {
    const pathname = usePathname()
    return (
        <>
            <div className="h-full w-full space-y-4 bg-gray-900 py-4 text-white">
                <div className="flex h-full flex-col gap-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                'w-full cursor-pointer rounded-lg p-3 text-sm font-medium text-zinc-400 transition hover:bg-white/10 hover:text-white',
                                {
                                    'mt-auto': route.href === '/settings',
                                    'bg-white/10 text-white':
                                        pathname === route.href,
                                }
                            )}
                        >
                            <div className="flex flex-1 items-center">
                                <route.icon
                                    className={cn(
                                        'mx-auto mr-3 h-8 w-8 md:mx-0 md:h-5 md:w-5',
                                        route.color
                                    )}
                                />
                                <span className="hidden md:ml-2 md:flex">
                                    {route.label}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
