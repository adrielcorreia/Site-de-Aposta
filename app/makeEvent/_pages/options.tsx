"use client";

import Options from "../../_components/make-a-event/MakeEventOptions";

export default function MakeEventOptions() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-black font-inter text-3xl font-bold leading-normal">
          Opções
        </h1>
        <h3 className="text-black font-inter font-normal text-opacity-60 leading-normal">
          Escolha o modelo do evento:
        </h3>
      </div>

      <Options />
    </div>
  );
}
