// SelectingRaffle.jsx
import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";

export default function SelectingRaffle() {
  const [groupSelected, setGroupSelected] = React.useState([]);
  const totalCheckboxes = 51; // Altere conforme necessário

  // Gera um array de números de 0 a totalCheckboxes - 1, formatando com zeros à esquerda
  const checkboxValues = Array.from({ length: totalCheckboxes }, (_, index) => {
    const formattedValue = index.toString().padStart(4, '0');
    return { value: formattedValue, label: formattedValue };
  });

  return (
    <div className="flex flex-col gap-1 w-full pt-10 mt-10">
      <label htmlFor="" className="text-4xl flex justify-center pb-10">
        <img className="pb-5" src="https://cdn-icons-png.flaticon.com/512/3697/3697758.png" alt="" id="bilhete" />
        <b>Bilhetes</b>
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
      <p className="mt-4 ml-1 text-default-500">
        Rifas Selecionadas: {groupSelected.join(", ")}
      </p>
    </div>
  );
}
