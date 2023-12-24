'use client'

import { Button} from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleNavClick = (nav: string) => {
    router.push(nav, {scroll: false})
  }

  return (
    <div className='flex items-center justify-center p-5 gap-3'>
      <p className='text-xl'>Você ainda não está logado.</p>
    </div>
  )
}