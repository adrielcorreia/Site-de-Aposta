import { Inter } from 'next/font/google'
import '../globals.css'

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <>
        <main>
            {children}
        </main>
      </>
  );
}