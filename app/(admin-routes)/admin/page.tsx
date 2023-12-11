import Perfil from "@/app/_components/perfilButton"
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { Button, Avatar } from "@nextui-org/react"
import { getServerSession } from "next-auth"

export default async function AdminPage() {
    const session = await getServerSession(nextAuthOptions)

    return (
        <>
            <header className="text-md w-screen p-4 px-8 fixed flex items-center justify-end gap-3">
                <Perfil name={`${session?.user.name}`} src={`${session?.user.image}`} />
            </header>

            <main className="flex w-screen h-screen gap-12 flex-col items-center justify-center">
                <p className="text-xl">Seja bem-vindo(a) {session?.user.name}.</p>
            </main>
        </>
    )
}