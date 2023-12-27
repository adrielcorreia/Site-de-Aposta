'use client'
// Import necessary components and styles (adjust imports based on your project structure)
import { usePathname } from "next/navigation";
import { Navbar, NavbarContent, NavbarItem, Link, Avatar } from "@nextui-org/react";
import React from "react";

export function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Dados Básicos", href: "/" },
    { name: "Prêmio(s)", href: "/page2" },
    { name: "Opções", href: "/page3" },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar position="static" isBordered>
        <NavbarContent className="flex items-center justify-between">
          {/* Profile */}
          <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          {/* Navigation Links */}
          <div className="flex gap-4">
            {links.map((item, index) => (
              <React.Fragment key={index}>
                <NavbarItem isActive={item.href === pathname}>
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
                {index < links.length - 1 && (
                  <span className="flex items-center">

                    <span className="next-icon text-black" style={{ marginLeft: 5 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
