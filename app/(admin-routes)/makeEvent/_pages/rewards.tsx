"use client";

import PremiosForm from "../../../_components/make-a-event/PremiosForm";
import { useState } from "react";
import { Button } from "@nextui-org/react";

interface Premio {
  nomePremio: string;
  descricaoPremio: string;
  coverPhotoUrl?: string;
}

export default function Rewards() {
  const [premios, setPremios] = useState<Premio[]>([]);

  const adicionarPremio = (novoPremio: Premio) => {
    setPremios([...premios, novoPremio]);
  };

  return (
    <div className="flex flex-col gap-2 items-end justify-end">
      <div className="w-full flex justify-between">
        <div>
          <h1 className="text-black font-inter text-3xl font-bold leading-normal">
            Prêmio(s)
          </h1>
          <h3 className="text-black font-inter font-normal text-opacity-60 leading-normal">
            Insira um ou mais prêmios que os ganhadores serão contemplados:
          </h3>
        </div>

        <Button className="text-white rounded-full bg-blue-500">
          Ver Lista de Prêmios
        </Button>
      </div>

      <div className="w-full">
        <PremiosForm />
      </div>
    </div>
  );
}
