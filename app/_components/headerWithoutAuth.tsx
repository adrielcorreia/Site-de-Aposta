'use client'

import { useRouter } from "next/navigation"
import { Link, Button, Avatar } from "@nextui-org/react"

export default function HeaderWithoutAuth() {
    const router = useRouter()

    function handleNavClick(route: string) {
        router.push(route)
    }

    return (
        <header className='z-50 bg-gray-100 w-screen p-2 px-8 fixed flex items-center justify-between gap-10'>
            <div draggable='false' className="flex-1"><Avatar draggable='false' size='lg' src="/logo.jpeg"></Avatar></div>
            
            <div className="flex-1 flex justify-center gap-10">
                <Link color="foreground" href='/'>Home</Link>
                <Link color="foreground" href='/about'>Sobre nós</Link>
            </div>

            <div className="flex-1 flex items-center justify-end gap-10">
                <Link href='/login'>Entrar</Link>
                <Button radius="sm" onClick={() => handleNavClick('/login')} color='primary'>Criar conta</Button>
            </div>
        </header>
    )
}