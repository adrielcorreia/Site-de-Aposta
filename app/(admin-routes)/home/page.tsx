import Perfil from "@/app/_components/perfilButton"
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function AdminPage() {
    const session = await getServerSession(nextAuthOptions)

    return (
        <>
            <div className="flex bg-white h-screen gap-12 flex-col items-center justify-center">
                <p className="text-xl">Seja bem-vindo(a) {session?.user.name}.</p>
            </div>
        </>
    )
}