export default function LoadingCodeSkeleton() {
    return (
        <div className="mt-2 w-[60dvw] max-w-sm animate-pulse rounded-e-xl rounded-es-xl border-gray-200 bg-red-100 p-4">
            {/* className=" text-sm flex flex-col gap-1 leading-7 mb-6" */}
            <div className="mb-4 h-2 w-48 rounded-full bg-gray-500"></div>
            <div className="mb-4 h-2 w-40 rounded-full bg-gray-500"></div>
            <div className="mb-4 h-2 w-40 rounded-full bg-gray-500"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
