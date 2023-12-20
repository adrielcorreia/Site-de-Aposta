"use client";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const links = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Sobre", href: "/sobre" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <div>
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Navbar */}
      <Navbar position="static" isBordered>
        <NavbarContent className="flex flex-1 gap-4" justify="center">
          {links.map((item, index) => (
            <NavbarItem key={index} isActive={item.href === pathname}>
              <Link color="foreground" href={item.href}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
}