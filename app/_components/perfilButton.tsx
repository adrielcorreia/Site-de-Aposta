'use client'

import { Avatar } from "@nextui-org/react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem} from "@nextui-org/react";

export default function Perfil(props: {src: string, name: string}) {
    const router = useRouter()

    async function logout() {
        await signOut({
            redirect: false
        })

        router.replace('/')
    }

    return (
        <Dropdown>
            <DropdownTrigger>
                <div className="transition bg-slate-200 p-2 px-5 flex items-center justify-center gap-10 rounded-xl " style={{cursor: 'pointer'}}>
                    <h1>{props.name}</h1>
                    <Avatar className="transition-transform" size="lg" src={props.src} />
                </div>
                
            </DropdownTrigger>

            <DropdownMenu>
                <DropdownItem className="text-black opacity-100" key="name">Configurações</DropdownItem>
                <DropdownItem onClick={logout} key="delete" className="text-danger" color="danger">Sair</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}