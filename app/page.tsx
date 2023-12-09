import Image from 'next/image'
import { Button, Link } from '@nextui-org/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-start">
      <div className='flex justify-between p-5 gap-3'>
        <Button color='primary'>Entrar</Button>
        <Button color='primary' variant="bordered">Registrar</Button>
      </div>
    </main>
  )
}