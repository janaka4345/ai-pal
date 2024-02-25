export default function LoadingSkeleton() {
  return (
    <div className="max-w-sm mt-2 animate-pulse">
      <div className="h-2 bg-gray-500 rounded-full  w-48 mb-4"></div>
      <div className="h-2 bg-gray-500 rounded-full  w-40 mb-4"></div>
      <div className="h-2 bg-gray-500 rounded-full  w-40 mb-4"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
