'use client'

import { Avatar, Button } from "@nextui-org/react"
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
                <Avatar className="transition-transform" as='button' size="lg" src={props.src} />
            </DropdownTrigger>

            <DropdownMenu disabledKeys={['name']}>
                <DropdownItem className="text-black opacity-100" key="name">Olá {props.name}!</DropdownItem>
                <DropdownItem onClick={logout} key="delete" className="text-danger" color="danger">Sair</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}