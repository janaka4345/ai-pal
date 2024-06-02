'use client'

import { useState } from 'react'
import ImageCard from './_components/ImageCard'
import ImagePrompt from './_components/ImagePrompt'

export default function ReplicateImageConversation() {
    const [images, setImages] = useState([])

    return (
        <>
            <ImagePrompt images={images} setImages={setImages} />

            {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}

            <div className="mx-auto mt-8 grid w-[400px] grid-cols-1 gap-4 md:grid-cols-2">
                {images.map((image, i) => (
                    <ImageCard key={i} image={image} />
                ))}
            </div>
        </>
    )
}
