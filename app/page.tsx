export default function Home() {
  const router = useRouter()

  const handleNavClick = (nav: string) => {
    router.push(nav)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
    </main>
  );
}