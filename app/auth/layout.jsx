import { reviews } from '@/lib/data'
export default function layout({ children }) {
    const number = Math.floor(Math.random() * reviews.length)
    return (
        <div className="relative mx-auto h-[calc(100dvh-10dvh)] w-full max-w-none items-center justify-center overflow-hidden px-4 lg:grid lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-[calc(100dvh-10dvh)] flex-col items-center justify-center bg-muted p-10 text-black dark:border-r lg:flex">
                <div className="flex items-center text-lg font-medium">
                    " {reviews[number].quote} "
                </div>
                <div className="ml-auto mt-4">
                    <p>{reviews[number].name}</p>
                    <p>{reviews[number].position}</p>
                </div>
            </div>
            {children}
        </div>
    )
}
