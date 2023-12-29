"use client";

import { Tabs, Tab, Button } from "@nextui-org/react";
import { useState } from "react";
import Rewards from "./_pages/rewards";
import MakeEventBasicData from "./_pages/basicData";
import MakeEventOptions from "./_pages/options";

export default function MakeEvent() {
  const [selected, setSelected] = useState<number>(1);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-60 p-14">
      <Tabs
        aria-label="Options"
        color="primary"
        size="lg"
        variant="bordered"
        selectedKey={String(selected)}
        onSelectionChange={(key: any) => setSelected(key)}
      >
        <Tab className="w-full" key={1} title="Dados Básicos">
          <MakeEventBasicData />
        </Tab>

        <Tab className="w-full" key={2} title="Prêmios">
          <Rewards />
        </Tab>

        <Tab className="w-full" key={3} title="Opções">
          <MakeEventOptions />
        </Tab>
      </Tabs>

      <div className="w-full flex justify-start">
        {selected == 2 && (
          <Button
            onClick={() => setSelected(selected - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          >
            Anterior
          </Button>
        )}

        <Button
          onClick={() => setSelected(selected < 3 ? selected + 1 : selected)}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          {selected == 3 ? "Finalizar" : "Próximo"}
        </Button>
      </div>
    </div>
  );
}
