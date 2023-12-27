import React from "react";
import {Textarea} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import {months} from "./data";
import {years} from "./data2";
import '../components/components_css.css'

export default function TextArea() {

  return (
    <div className="w-full grid grid-cols-12 gap-4">
        <Textarea
          isRequired
          key='flat'
          variant='flat'
          label="Número do cartão"
          labelPlacement="outside"
          placeholder="Digite os número do cartão"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        <Textarea
          isRequired
          key='flat'
          variant='flat'
          label="Nome Titular cartão"
          labelPlacement="outside"
          placeholder="Digite exatamente igual impresso no cartão"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />

        <div className="grid grid-rows-1 grid-flow-col gap-4 flex items-end col-span-12 md:col-span-6 mb-6 md:mb-0">
            <Select 
                label="Select an month" 
                className="max-w-xs select" 
              >
                {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                    {month.label}
                </SelectItem>
                ))}
            </Select>
            
            <Select 
                label="Select a year" 
                className="max-w-xs select" 
             >
                {years.map((year) => (
                <SelectItem key={year.value} value={year.value}>
                    {year.label}
                </SelectItem>
                ))}
            </Select>
            
        </div>

        <Textarea
          isRequired
          key='flat'
          variant='flat'
          label="Código de segurança"
          labelPlacement="outside"
          placeholder="Digite exatamente igual impresso no cartão"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
    </div>
  );
}