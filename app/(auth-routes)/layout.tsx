import { Avatar, Button } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import HeaderWithoutAuth from "../_components/headerWithoutAuth";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (session) {
        redirect('/home')
    }

    return (
        <>
        <HeaderWithoutAuth />

        <main className="bg-white flex max-w-screen min-h-screen flex-col items-center justify-center">
            {children}
        </main>
        
        </>
    )
}