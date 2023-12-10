import { Button, Link, Input } from "@nextui-org/react"

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div>
                <form className='flex flex-col items-start justify-center gap-3'>
                    <div className="w-full flex flex-col items-start justify-center gap-2">
                        <p className="text-">E-mail</p>
                        <Input type='email' label='Digite seu email' className='rounded-md'></Input>
                        <p className="mt-5">Senha</p>
                        <Input type='password' label='Digite sua senha ' className='rounded-md'></Input>
                    </div>
                    
                    <div className='w-full flex items-center flex-col gap-4'>
                        <Button color='primary' className='w-full'>Entrar</Button>
                        <p>ou</p>
                        <Button className="w-full">Entrar com o Google</Button>
                        <p className='text-sm text-slate-500'>Ainda não tem uma conta? <Link color='primary' href='/register' underline='always' className='text-sm'>Registre-se</Link></p>
                    </div>
            
                </form>
            </div>
        </main>
    )
}