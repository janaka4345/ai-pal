import ReactMarkdown from 'react-markdown'
import LoadingCodeSkeleton from '../Skeletons/LoadingCodeSkeleton'

const CodeBubble = ({ messageCode }) => {
    return (
        <div className="ml-10 flex flex-row gap-2.5">
            <img
                className="h-8 w-8 rounded-full"
                src="/ai-avatar.png"
                alt="avatar image"
            />

            {messageCode != 'loading' ? (
                <ReactMarkdown
                    components={{
                        pre: ({ node, ...props }) => (
                            <div className="my-2 ml-10 block overflow-auto rounded-lg bg-black/20 p-3">
                                <pre {...props} />
                            </div>
                        ),
                        code: ({ node, ...props }) => (
                            <code
                                className="w-fit rounded-lg bg-gray-300 p-1"
                                {...props}
                            />
                        ),
                    }}
                    className="mb-6 flex w-[60dvw] flex-col gap-1 rounded-e-xl rounded-es-xl border-gray-200 bg-red-100 p-4 text-sm leading-7"
                >
                    {messageCode}
                </ReactMarkdown>
            ) : (
                <LoadingCodeSkeleton />
            )}
        </div>
    )
}
export default CodeBubble
