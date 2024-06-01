import ReactMarkdown from "react-markdown";

const CodeBubble = ({messageCode}) => {

  return (
    <>
      <img className="w-8 h-8 rounded-full" src='/ai-avatar.png' alt="avatar image" />
    
    <ReactMarkdown
              components={{
                pre: ({ node, ...props }) => (
                  <div className="overflow-auto min-w-[200px] max-w-[400px] my-2 bg-black/20 p-3 rounded-lg block ml-10">
                    <pre {...props} />
                  </div>
                ),
                code: ({ node, ...props }) => (
                  <code
                    className="bg-black/20 rounded-lg w-fit p-1"
                    {...props}
                  />
                ),
              }}
              className=" text-sm  leading-7"
            >
              {messageCode}
            </ReactMarkdown>
            </>
  )
}
export default CodeBubble