'use client'
import { Heading } from '@/components/custom/Heading'
import { Video } from 'lucide-react'

export default function Videos() {
    return (
        <>
            <Heading
                title="Video Generation"
                description="something descriptive"
                icon={Video}
                iconColor="text-red-500"
                bgColor="bg-red-700/10"
            />
            <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:mb-6">
                Comming Soon
            </h1>
        </>
    )
}
