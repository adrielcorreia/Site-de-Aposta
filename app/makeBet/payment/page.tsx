"use client";

import TextArea from "../../_components/make-a-bet/textArea";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div
      id="rifasPagamento"
      className="flex flex-col items-center justify-center py-52 p-14"
    >
      <div className="w-3/5 shadow-md rounded-lg border p-5 grid justify-items-stretch">
        <TextArea />

        <Button
          color="primary"
          size="lg"
          className="justify-self-center mb-5 mt-5 font-bold"
          id="button"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
}