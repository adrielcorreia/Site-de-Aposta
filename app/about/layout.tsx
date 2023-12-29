import { ReactNode } from "react";
import HeaderWithoutAuth from "../_components/headerWithoutAuth";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    return (
        <>
        <HeaderWithoutAuth />

        <main className="flex max-w-screen min-h-screen flex-col items-center justify-start p-32 px-64">
            {children}
        </main>
        
        </>
    )
}