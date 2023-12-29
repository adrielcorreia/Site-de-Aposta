'use client'

import { Avatar, Button, Link } from "@nextui-org/react"
import { FacebookIcon } from "../../_icons/facebookIcon"
import { InstagramIcon } from "../../_icons/instagramIcon"
import { TwitterIcon } from "../../_icons/twitterIcon"

export default function Footer() {
    return (
        <footer className="min-w-screen p-14 pb-5 bg-gray-100">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center items-start gap-8">
                    <Avatar size="lg" src="/logo.jpeg" />

                    <span className="text-black">
                        Lorem ipsum dolor sit amet<br></br>
                        consectetur adipisicing elit. <br></br>
                        Ratione blanditiis voluptates <br></br> 
                        assumenda saepe, sint ipsum sapiente quas?
                    </span>

                    <div className="flex gap-2 justify-start">
                        <Button variant="light" isIconOnly radius="sm" >
                            <FacebookIcon /> 
                        </Button>

                        <Button variant="light" isIconOnly radius="sm" >
                            <InstagramIcon />
                        </Button>

                        <Button variant="light" isIconOnly radius="sm" >
                            <TwitterIcon />
                        </Button>
                    </div>
                </div>


                <div className="flex gap-5">
                    <div className="flex flex-col gap-3 w-100">
                        <h1 className="text-xl text-black font-bold">Páginas</h1>
                        
                        <Link href='/'>Home</Link>
                        <Link href='/about' >Sobre nós</Link>
                        <Link href='' >Termos de uso</Link>
                        <Link href='' >Política de privacidade</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl text-black font-bold">Ajuda</h1>
                        
                        <Link href='' >Central de ajuda</Link>
                        <Link href='' >Dúvidas frequentes</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl text-black font-bold">Contato</h1>
                        
                        <Link href='' >(XX) XXXXX-XXXX</Link>
                        <Link href='' >email@softex.com</Link>
                    </div>
                </div>
            </div>

            <span className="max-w-sreen block text-center text-black pb-0">
                Copyright @ 2023
            </span>
        </footer>
    )
}