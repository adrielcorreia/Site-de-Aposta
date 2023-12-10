import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { OAuthUserConfig } from "next-auth/providers/oauth";
import { getSession } from "next-auth/react";

const handler = NextAuth({
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
            callbacks: {
                async session({ session, user, token }: any) {
                  return console.log(session)
                },
            }
        })
    ],
    secret: process.env.SECRET
})

export { handler as GET, handler as POST }