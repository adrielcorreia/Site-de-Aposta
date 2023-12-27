// SelectingRaffle.jsx
import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";
import './components_css.css'

export default function SelectingRaffle() {
  const [groupSelected, setGroupSelected] = React.useState([]);
  const totalCheckboxes = 57; // Agora você quer de 1 a 50
  const raffleValue = 10; // Valor de cada rifa

  // Atualiza o total sempre que groupSelected mudar
  React.useEffect(() => {
    const total = groupSelected.length * raffleValue;
    console.log("Total:", total); // Exibe o total no console (opcional)
  }, [groupSelected]);

  // Gera um array de números de 1 a totalCheckboxes, com zeros à esquerda
  const checkboxValues = Array.from({ length: totalCheckboxes }, (_, index) => {
    const value = (index + 1).toString().padStart(2, '0'); // Sempre quatro dígitos
    return { value, label: value };
  });

  return (
    <div>
      <div id="rifas" className="flex flex-col gap-1 w-full pt-10 mt-10 rounded-xl pl-7 grid pb-10">
        <label htmlFor="" className="text-4xl flex justify-center pb-10">
          <img className="pb-5" src="https://cdn-icons-png.flaticon.com/512/3697/3697758.png" alt="" id="bilhete" />
          <b className="text-black">Rifas</b>
        </label>
        <CheckboxGroup
          className="gap-1"
          orientation="horizontal"
          value={groupSelected}
          onChange={setGroupSelected}
        >
          {checkboxValues.map(({ value, label }) => (
            <CustomCheckbox key={value} value={value} label={label} />
          ))}
        </CheckboxGroup>
      </div>
      <div className="">
        <div className="flex mt-10 ml-1 text-default-500 justify-center space-x-6">
          <div>
            <p className="bg-primary text-white rounded-t-lg font-bold flex justify-center p-2 text-3xl">Valor do Ticket </p>
            <p className="bg-slate-100 border-solid border-1 border-stone-700 font-bold text-black flex justify-center p-10 text-3xl">R$ {raffleValue.toFixed(2)}</p>
          </div>
          <div>
            <p className="bg-primary text-white rounded-t-lg font-bold flex justify-center p-2 text-3xl">Quantidade</p>
            <p className="bg-slate-100 border-solid border-1 border-stone-700 font-bold text-black flex justify-center p-10 text-3xl">{groupSelected.length}</p>
          </div>
          <div>
            <p className="bg-primary text-white rounded-t-lg font-bold flex justify-center p-2 text-3xl">Total</p>
            <p className="bg-slate-100 border-solid border-1 border-stone-700 font-bold text-black flex justify-center p-10 text-3xl">R$ {(groupSelected.length * raffleValue).toFixed(2)}</p>
          </div>
        </div>
      </div>  
    </div>        
  );
}
