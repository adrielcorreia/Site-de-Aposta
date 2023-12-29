import { Inter } from 'next/font/google'
import '@/app/globals.css'

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <>
        <main className='p-16'>
            {children}
        </main>
      </>
  );
}