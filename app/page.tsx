'use client'

import { Button} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { getSession } from 'next-auth/react'

export default function Home() {
  const router = useRouter()

  const handleNavClick = (nav: string) => {
    router.push(nav, {scroll: false})
  }

  return (
    <main className="flex min-h-screen flex-col items-end justify-start">
      <div className='flex justify-between p-5 gap-3'>

        <Button onClick={() => handleNavClick('/login')} color='primary'>Entrar</Button>
        <Button onClick={() => handleNavClick('/signup')} color='primary' variant="bordered">Registrar</Button>

      </div>
    </main>
  )
}