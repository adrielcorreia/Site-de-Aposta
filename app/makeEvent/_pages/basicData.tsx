"use client";

import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import { useState } from "react";

interface FormInfo {
  id?: number;
  title: string;
  phoneNumber: string;
  category: string;
  ticketQuantity: number;
  ticketValue: number;
}

const categories = [
  "Eletrodomésticos",
  "Eletroeletrônicos",
  "Imóveis",
  "Lazer",
  "Veículos",
];

export default function MakeEventBasicData() {
  const [data, setData] = useState<FormInfo>({
    title: "",
    phoneNumber: "",
    category: "",
    ticketQuantity: 0,
    ticketValue: 0,
  });

  const handleNext = () => {
    if (
      !data.title ||
      !data.phoneNumber ||
      !data.category ||
      !data.ticketQuantity ||
      !data.ticketValue
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log(data);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-black font-inter text-3xl font-bold leading-normal">
          Dados Básicos
        </h1>
        <h3 className="text-black font-inter font-normal text-opacity-60 leading-normal">
          Insira os dados básicos do seu evento:
        </h3>
      </div>

      <div className="p-8 shadow-md rounded-lg border">
        <form className="flex flex-col gap-9">
          <Input
            size="lg"
            radius="full"
            label="Título"
            placeholder="Digite o título"
            labelPlacement="outside"
            type="text"
            key="title"
            value={data?.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            isInvalid={data.title == "" ? true : false}
            color={data.title == "" ? "danger" : "default"}
            isRequired
          />

          <Input
            size="lg"
            radius="full"
            label="Telefone público para contato"
            placeholder="Digite seu telefone"
            labelPlacement="outside"
            type="text"
            key="phoneNumber"
            value={data?.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            isInvalid={data.phoneNumber == "" ? true : false}
            color={data.phoneNumber == "" ? "danger" : "default"}
            isRequired
          />

          <Select
            size="lg"
            radius="full"
            id="category"
            label="Categoria"
            labelPlacement="outside"
            placeholder="Selecione a categoria"
            onChange={(e) => setData({ ...data, category: e.target.value })}
            isInvalid={data.category == "" ? true : false}
            color={data.category == "" ? "danger" : "default"}
            isRequired
          >
            {categories.map((category: string) => (
              <SelectItem key={category}>{category}</SelectItem>
            ))}
          </Select>

          <div className="flex justify-center">
            <Input
              size="lg"
              radius="full"
              placeholder="0"
              label="Bilhetes"
              labelPlacement="outside"
              type="number"
              key="ticketQuantity"
              onChange={(e) =>
                setData({ ...data, ticketQuantity: Number(e.target.value) })
              }
              isInvalid={data.ticketQuantity <= 0 ? true : false}
              color={data.ticketQuantity <= 0 ? "danger" : "default"}
              className="w-4/12 p-2"
              isRequired
            />

            <Input
              size="lg"
              radius="full"
              placeholder="0.00"
              label="Valor por bilhete"
              labelPlacement="outside"
              type="number"
              key="ticketValue"
              onChange={(e) =>
                setData({ ...data, ticketValue: Number(e.target.value) })
              }
              isInvalid={data.ticketValue <= 0 ? true : false}
              color={data.ticketValue <= 0 ? "danger" : "default"}
              className="w-4/12 p-2"
              isRequired
              startContent={<span className="">R$</span>}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
