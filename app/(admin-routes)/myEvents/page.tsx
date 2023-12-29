"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import CardComponent from "../../_components/home/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const router = useRouter();

  const handleNavClick = (nav: string) => {
    router.push(nav);
  };

  return (
    <div className="flex flex-col gap-20 py-30 p-32">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold">Meus eventos</h1>
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-2xl">Em andamento</span>

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
      </div>

      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-2xl">Concluídas</span>

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
      </div>
    </div>
  );
}