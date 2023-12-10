import { Button, Link, Card, CardHeader, CardFooter } from "@nextui-org/react"
import { GoogleIcon } from "../_icons/_googleIcon"

export default function SignUp() {
    return (
        <main className="flex min-h-screen gap-12 flex-col items-center justify-center">
            <Card className="flex justify-center p-8 gap-12">
                <CardHeader className="justify-center text-center">
                    <h1 className="underline text-4xl">Cadastro</h1>
                </CardHeader>
                
                <div>
                    <Button startContent={<GoogleIcon/>} variant="bordered" className="p-6 text-xl rounded w-full">Cadastrar-se com o Google</Button>
                
                    <CardFooter className="justify-center">
                        <Link href="/">Voltar para página inicial</Link>
                    </CardFooter>
                </div>
            </Card>
        </main>
    )
}