import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { OAuthUserConfig } from "next-auth/providers/oauth";

const nextAuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider(<OAuthUserConfig<any>> {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            /*authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
            callbacks: {
                async session() {
                  
                },
            }*/
        })
    ],
    secret: process.env.SECRET
}

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST, nextAuthOptions }