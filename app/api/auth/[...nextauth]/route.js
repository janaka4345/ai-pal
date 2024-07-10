import error from '@/app/auth/error/page'
import prisma from '@/lib/prismaClient'
import { userAuthformSchema } from '@/lib/shema'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'


export const authOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({}),
        // ...add more providers here
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.

            async authorize(credentials) {
                // console.log(credentials);
                const validatedFields = userAuthformSchema.safeParse(credentials)
                // console.log(validatedFields);
                // This is where you need to retrieve user data
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials

                if (!validatedFields.success) {
                    return null //TODO throw ann error
                }

                const { email, password } = validatedFields.data

                const logingUser = await prisma.user.findFirst({
                    where: {
                        email: email
                    }
                })
                // console.log(logingUser);
                if (!logingUser || !logingUser.password) {
                    throw error //TODO THorow error
                }

                const isPasswordMatching = await compare(password, logingUser.password)
                // console.log(isPasswordMatching);

                if (isPasswordMatching) {
                    // console.log();
                    const user = { id: logingUser.id, name: logingUser.name, image: logingUser.image, email: logingUser.email, emailVerified: logingUser.emailVerified }
                    console.log({ user });
                    return user
                } else {
                    throw error
                }

            },
            // async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)
            // const res = await fetch("/your/endpoint", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            // })
            // const user = await res.json()

            // If no error and we have user data, return it
            // if (res.ok && user) {
            //     return user
            // }
            // Return null if user data could not be retrieved
            // return null
            // }
        }),
    ],
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     return true
        // },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },Ks
        async session({ session, user, token }) {
            session.user.id = token.sub
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {

            // console.log({ token, user, account, profile, isNewUser });
            return token
        }
    },

    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },

}
export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
