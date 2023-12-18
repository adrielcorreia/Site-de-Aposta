import { Avatar, Button } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (session) {
        redirect('/home')
    }

    return (
        <>{children}</>
    )
}