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
        href: '/conversation',
        color: 'text-violet-500',
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        color: 'text-pink-700',
        href: '/image-gen',
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
        href: '/code',
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
            <div className="flex h-full flex-col space-y-4 bg-primary py-4 text-white">
                <div className="flex-1 px-3 py-2">
                    <Link
                        href="/"
                        className="mb-14 flex flex-col-reverse gap-2 pl-3 md:flex-row md:items-center md:gap-3"
                    >
                        <div className="relative mx-auto mr-4 h-8 w-8 md:mx-0">
                            <Image fill alt="Logo" src="/logo-sass.png" />
                        </div>
                        {/* TODO name Changeks */}
                        <h1 className={cn('text-2xl font-bold')}>SAAS</h1>
                    </Link>
                    <div className="space-y-1">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white',
                                    pathname === route.href
                                        ? 'bg-white/10 text-white'
                                        : 'text-zinc-400'
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
                {/* <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} /> */}
            </div>
        </>
    )
}
