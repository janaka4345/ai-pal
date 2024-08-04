'use client'

import { useReplicateImageStore } from '@/store/imageStore'
import ImageCard from './_components/ImageCard'
import ImagePrompt from './_components/ImagePrompt'

export default function ReplicateImageConversation() {
    // const [images, setImages] = useState([])
    const images = useReplicateImageStore((state) => state.images)

    return (
        <>
            <ImagePrompt />

            <div className="mx-auto mt-8 grid h-[60%] grid-cols-1 gap-4 overflow-auto md:grid-cols-2">
                {images.map((image, i) => (
                    <ImageCard key={i} image={image} />
                ))}
            </div>
        </>
    )
}
