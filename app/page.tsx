"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import CarouselComponent from "./_components/home/carousel";
import CardComponent from "./_components/home/card";

export default function Home() {
  const router = useRouter();

  const handleNavClick = (nav: string) => {
    router.push(nav);
  };

  return (
    <main>
      <CarouselComponent />

      <div className="pt-10 flex justify-between items-center">
        <span className="text-black font-bold text-2xl ml-8">Eventos</span>
        <span className="mr-8">
          <Button
            isIconOnly
            variant="solid"
            className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1086/1086933.png"
              width={20}
              height={20}
              alt=""
            />
          </Button>
        </span>
      </div>

      <CardComponent />

      <div className="pt-10 flex justify-end items-center pb-10">
        <div className="flex items-center">
          <Button
            onClick={() => handleNavClick("/makeEvent")}
            variant="solid"
            className="bg-gray-100 h-10 rounded-full flex items-center justify-center mr-6"
          >
            Criar Evento
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
              width={20}
              height={20}
              alt=""
            />
          </Button>
        </div>
      </div>
    </main>
  );
}