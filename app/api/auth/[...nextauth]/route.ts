import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { OAuthUserConfig } from "next-auth/providers/oauth";

const nextAuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider(<OAuthUserConfig<any>> {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            },

            async authorize() {
                const response = await fetch('http://localhost:3000/api/auth/signin')
                const user = await response.json()

                if (user && response.ok) {
                    return user
                }

                return null
            }
        })
    ],
    secret: process.env.SECRET,
}

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST, nextAuthOptions }