"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import CarouselComponent from "../../_components/home/carousel";
import CardComponent from "../../_components/home/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const router = useRouter();

  const handleNavClick = (nav: string) => {
    router.push(nav);
  };

  return (
    <div className="flex flex-col gap-20 p-32">
      <CarouselComponent />

      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-2xl">Eventos</span>

          <div>
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
          </div>
        </div>

        <CardComponent />
        <div className="w-full flex justify-end px-5">
          <Button onClick={() => router.push('makeEvent')} size="lg" color="primary">
            Criar Evento <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
      </div>
    </div>
  );
}