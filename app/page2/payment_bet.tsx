"use client";
import React, { createContext, useState, useRef } from "react";
import {Button} from "@nextui-org/react";
import TextArea from './textArea'
import '../components/components_css.css'

export default function Payment_bet() {    
     return (
        <main id="rifasPagamento" className="container mx-auto px-20 pt-10">
           <div className="rounded-xl border-solid border-4 border-slate-950 pl-7 mt-10 grid justify-items-stretch">
                <TextArea />
                <Button className="justify-self-center text-2xl mb-5 mt-5 font-bold" id="button">
                    Enviar
                </Button>  
            </div>
        </main>
  )
}

