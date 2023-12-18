import Perfil from "@/app/_components/perfilButton"
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { Button, Avatar } from "@nextui-org/react"
import { getServerSession } from "next-auth"
import { SessionProvider, useSession } from "next-auth/react"

export default async function AdminPage() {
    const session = await getServerSession(nextAuthOptions)

    return (
        <>
            <header className="bg-slate-100 text-md w-screen p-2 px-8 fixed flex items-center justify-end gap-2">
                <div className="flex items-center justify-center gap-10">
                    <Perfil name={`${session?.user.name}`} src={`${session?.user.image}`} />
                </div>
                
            </header>

            <main className="flex w-screen h-screen gap-12 flex-col items-center justify-center">
                <p className="text-xl">Seja bem-vindo(a) {session?.user.name}.</p>
            </main>
        </>
    )
}