'use client'

import { Button} from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleNavClick = (nav: string) => {
    router.push(nav, {scroll: false})
  }

  return (
    <>
      <header className='w-screen p-4 fixed flex items-center justify-end gap-3'>
        <Button onClick={() => handleNavClick('/login')} color='primary'>Entrar</Button>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className='flex items-center justify-center p-5 gap-3'>
          <p className='text-xl'>Você ainda não está logado.</p>
        </div>
      </main>
    </>
  )
}