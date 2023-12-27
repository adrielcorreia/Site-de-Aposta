'use client'

import React from "react";
import { Navbar, Image, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownTrigger, DropdownItem, DropdownMenu, Dropdown, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "../AcmeLogo.jsx";

export default function Navbar_1() {
  return (
    <Navbar shouldHideOnScroll className="bg-white text-black">
      <NavbarBrand>
        <Avatar draggable='false' size='lg' src="/logo.jpeg"></Avatar>
        <p className="font-bold text-inherit">RIFACIL</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-black">
            Eventos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-black">
            Minhas apostas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-black">
            Meus Eventos
          </Link>
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
        <Dropdown>
          <DropdownTrigger>
            <Button 
              className="bg-gray-400 justify-end flex gap-3 text-blue-600"
              size="lg"
            >
                Usuario01
                <Avatar
                  isBordered //é bom tirar esse header pq o merge ja vai coisar isso, pq o meu authentication ja tem
                  className="transition-transform"
                  color="success"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pinimg.com/originals/08/64/0b/08640b34412b64c5be6d0296bc6192cd.png"
                />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
