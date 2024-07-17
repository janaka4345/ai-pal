export { default } from 'next-auth/middleware';


//add protected routes here
export const config = { matcher: ['/dashboard', '/conversation', '/image-gen', '/video', '/music', '/code', '/api/token/tokenCount', '/api/codeGemini', '/api/codeOpenai', '/api/conversation', '/api/conversationGemini', '/api/doenloadFiles', '/api/image', '/api/imageReplicate'] }
// "/dashboard",
