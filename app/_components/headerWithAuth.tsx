'use client'

import { useRouter } from "next/navigation"
import { Link, Avatar } from "@nextui-org/react"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import Perfil from "./perfilButton"

export default function HeaderWithAuth(props: { src: string, name: string }) {
    return (
        <header className='z-50 bg-gray-100 w-screen p-2 px-8 fixed flex items-center justify-between gap-10'>
            <div className="flex-1"><Avatar size='lg' src="/logo.jpeg"></Avatar></div>
            
            <div className="flex-1 flex justify-center gap-10">
                <Link color="foreground" href='/home'>Eventos</Link>
                <Link color="foreground" href='/mybets'>Minhas apostas</Link>
                <Link color="foreground" href='/myevents'>Meus eventos</Link>
            </div>

            <div className="flex-1 flex items-center justify-end gap-10">
                <Perfil name={props.name} src={props.src}/>
            </div>
        </header>
    )
}