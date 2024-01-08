import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HeaderWithAuth from "../_components/headerWithAuth";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/')
    }

    return (
        <>
            <HeaderWithAuth name={`${session?.user.name}`} src={`${session?.user.image}`} />

            <main className="max-w-screen">{children}</main>

            <footer></footer>
        </>
        
    )
}