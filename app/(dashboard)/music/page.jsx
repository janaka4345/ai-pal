'use client'

import { Heading } from '@/components/custom/Heading'
import MusicPrompt from './_components/MusicPrompt'
import { useState } from 'react'
import { Music } from 'lucide-react'

export default function MusicGeneration() {
    const [music, setMusic] = useState()

    return (
        <>
            <Heading
                title="Music Generation"
                description="something descriptive"
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="bg-emerald-700/10"
            />
            <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:mb-6">
                Comming Soon
            </h1>
            {/* <MusicPrompt music={music} setMusic={setMusic} /> */}
            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
            {/* <pre>{JSON.stringify(music, null, 2)}</pre> */}
        </>
    )
}
