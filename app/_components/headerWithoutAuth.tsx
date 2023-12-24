'use client'
import { Navbar, Image, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownTrigger, DropdownItem, DropdownMenu, Dropdown, Avatar } from "@nextui-org/react";
import { useRouter } from "next/navigation"


export default function HeaderWithoutAuth() {
    const router = useRouter()

    function handleNavClick(route: string) {
        router.push(route)
    }

  return (
    <Navbar shouldHideOnScroll className="bg-white text-black">
      <NavbarBrand>
        <Avatar draggable='false' size='lg' src="/logo.jpeg"></Avatar>
        <p className="font-bold text-inherit">RIFACIL</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <Link color="foreground" className="text-black" href='/'>Home</Link>
        </NavbarItem>
        <NavbarItem>
            <Link color="foreground" className="text-black" href='/about'>Sobre nós</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-black relative left-36">
            <Image         
              className="w-5 h-5 justify-end"
              src="https://cdn-icons-png.flaticon.com/512/1827/1827422.png"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <div className="flex-1 flex items-center justify-end gap-10">
            <Link href='/login'>Entrar</Link>
            <Button radius="sm" onClick={() => handleNavClick('/login')} color='primary'>Criar conta</Button>
        </div>        
      </NavbarContent>
    </Navbar>
  );
}
