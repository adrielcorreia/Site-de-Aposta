import { Button, Link } from "@nextui-org/react"

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div>
                <form className='flex flex-col items-center justify-center gap-3'>
                <input className='p-2 w-auto rounded-md' type='text' placeholder='insira seu e-mail'></input>
                <input className='p-2 w-auto rounded-md' type='password' placeholder='insira sua senha'></input>

                <div className='flex flex-col gap-4'>
                    <Button color='primary' className=''>Entrar</Button>
                    <p className='text-sm text-slate-500'>Não tem uma conta? <Link color='primary' href='#' underline='always' className='text-sm'>Registre-se</Link></p>
                </div>
            
                </form>
            </div>
        </main>
    )
}