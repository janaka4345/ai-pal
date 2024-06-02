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
            Comming zoon
            <MusicPrompt music={music} setMusic={setMusic} />
            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
            <pre>{JSON.stringify(music, null, 2)}</pre>
        </>
    )
}
