'use client'
// Import necessary components and styles (adjust imports based on your project structure)
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Breadcrumbs,
} from "@nextui-org/react";

export function Header() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  const links = [
    { name: "Dados Básicos", href: "/" },
    { name: "Prêmio(s)", href: "/page2" },
    { name: "Opções", href: "/page3" },
  ];

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
                <span
                  className={`px-2 py-0.5 border-solid border rounded transition-all ${
                    item.href === pathname
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
}
