export { default } from 'next-auth/middleware'

//add protected routes here
export const config = { matcher: ['/dashboard', '/conversation', '/image-gen', '/video', '/music', '/code'] }
// "/dashboard",
