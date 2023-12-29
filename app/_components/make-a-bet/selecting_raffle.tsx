'use client'

import { useState, useEffect } from "react";
import { Button, CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox.jsx";
import { useRouter } from "next/navigation";

export default function SelectingRaffle() {
  const router = useRouter()
  const [groupSelected, setGroupSelected] = useState<any>([]);

  const totalCheckboxes = 57; // Agora você quer de 1 a 50
  const raffleValue = 10; // Valor de cada rifa

  // Atualiza o total sempre que groupSelected mudar
  useEffect(() => {
    const total = groupSelected.length * raffleValue;
    console.log("Total:", total); // Exibe o total no console (opcional)
  }, [groupSelected]);

  // Gera um array de números de 1 a totalCheckboxes, com zeros à esquerda
  const checkboxArray = Array.from({ length: totalCheckboxes }, (_, index) => {
    const value = (index + 1).toString().padStart(2, '0'); // Sempre quatro dígitos
    return { value, label: value };
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div id="rifas" className="flex flex-col gap-1 w-full p-10 bg-blue-100 rounded-xl grid pb-10">
        <label htmlFor="" className="flex gap-5 text-4xl flex justify-center pb-10">
          <img className="w-10 pb-5" src="https://cdn-icons-png.flaticon.com/512/3697/3697758.png" alt="" id="bilhete" />
          <b className="text-black">Rifas</b>
        </label>
        <CheckboxGroup
          className="gap-1 "
          orientation="horizontal"
          value={groupSelected}
          onChange={setGroupSelected}
        >
          {checkboxArray.map(({ value, label }) => (
            <CustomCheckbox key={value} value={value} label={label} />
          ))}
        </CheckboxGroup>
      </div>

      <div className="flex flex-col w-3/5 items-center justify-center py-20 gap-5">
        <div className="flex gap-5 w-full">
          <div className="w-full">
            <p className="bg-primary text-white rounded-t-lg font-bold flex justify-center p-2 text-xl">Valor do Ticket </p>
            <p className="bg-slate-100 border-solid border-1 border-stone-700 font-bold text-black flex justify-center p-10 text-3xl">R$ {raffleValue.toFixed(2)}</p>
          </div>

          <div className="w-full">
            <p className="bg-primary text-white rounded-t-lg font-bold flex justify-center p-2 text-xl">Quantidade</p>
            <p className="bg-slate-100 border-solid border-1 border-stone-700 font-bold text-black flex justify-center p-10 text-3xl">{groupSelected.length}</p>
          </div>

          <div className="w-full">
            <p className="bg-primary text-white rounded-t-lg font-bold flex justify-center p-2 text-xl">Total</p>
            <p className="bg-slate-100 border-solid border-1 border-stone-700 font-bold text-black flex justify-center p-10 text-3xl">R$ {(groupSelected.length * raffleValue).toFixed(2)}</p>
          </div>
        </div>
          
        <Button
          className="text-2xl font-bold bg-primary text-white w-full"
          onClick={() => router.push('/makeBet/payment')} // Adiciona a função de clique
        >
          Confirmar Compra
        </Button>
        </div>
    </div>        
  );
}
