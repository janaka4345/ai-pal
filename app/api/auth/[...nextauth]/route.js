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
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
        CredentialsProvider({

            async authorize(credentials) {
                const validatedFields = userAuthformSchema.safeParse(credentials)


                if (!validatedFields.success) {
                    throw new Error('Invalid Fields')

                }

                const { email, password } = validatedFields.data

                const logingUser = await prisma.user.findFirst({
                    where: {
                        email: email
                    }
                })
                // console.log(logingUser);
                if (!logingUser || !logingUser.email) {
                    throw new Error('User does not exist')
                    //TODO THorow error
                }
                if (logingUser && logingUser.email && !logingUser.password) {
                    throw new Error('User Signed in with a provider') //TODO elaborate message
                    //TODO THorow error
                }
                if (!logingUser.emailVerified) {
                    // return null //TODO THorow error
                    // throw error //TODO THorow error
                    throw new Error('verify your Email')

                }

                const isPasswordMatching = await compare(password, logingUser.password)
                // console.log(isPasswordMatching);

                if (isPasswordMatching) {
                    // console.log();
                    const user = { id: logingUser.id, name: logingUser.name, image: logingUser.image, email: logingUser.email, emailVerified: logingUser.emailVerified }
                    console.log({ user });
                    return user
                } else {
                    throw new Error('Invalid Credentials')

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


        }),
    ],
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     return true
        // },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },
        async session({ session, user, token }) {
            if (session?.user && token?.sub) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {

            // console.log({ token, user, account, profile, isNewUser });
            return token
        }
    },

    events: {
        async linkAccount({ user }) {
            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    emailVerified: new Date()
                }
            })
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
