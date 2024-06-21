export default function LoadingCodeSkeleton() {
    return (
        <div className="mt-2 max-w-sm animate-pulse">
            <div className="mb-4 h-2 w-48 rounded-full bg-gray-500"></div>
            <div className="mb-4 h-2 w-40 rounded-full bg-gray-500"></div>
            <div className="mb-4 h-2 w-40 rounded-full bg-gray-500"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
