'use client'

import { Button, Link, Card, CardHeader, CardFooter } from "@nextui-org/react"
import { GoogleIcon } from "../../_icons/_googleIcon"
import { signIn } from "next-auth/react"

export default function Login() {
    return (
        <main className="flex min-h-screen gap-12 flex-col items-center justify-center">
            <Card className="flex justify-center p-8 gap-12">
                <CardHeader className="justify-center text-center">
                    <h1 className="underline text-4xl">Entrar</h1>
                </CardHeader>
                
                <div>
                    <Button onClick={() => signIn('google', {callbackUrl: '/admin'})} startContent={<GoogleIcon/>} variant="bordered" className="p-6 text-xl rounded w-full">Entrar com o Google</Button>

                    <CardFooter className="justify-center">
                        <Link href="/">Voltar para página inicial</Link>
                    </CardFooter>
                </div>
            </Card>
        </main>
    )
}