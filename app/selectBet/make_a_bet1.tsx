"use client";
import React, { createContext, useState, useRef } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import Selecting_raffle from './selecting_raffle'
import {Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import './components_css.css'

export default function Make_a_bet1() {    
    // Obtém o objeto router usando o hook useRouter
    const router = useRouter();

    const handleParticiparClick = () => {
        // Navega para a página desejada (substitua 'nome-da-rota' pelo nome real da sua rota)
        router.push('/page2');
      };
    
     return (
        <main className="container mx-auto px-20 pt-10">
            <div className="flex flex-row gap-11 grid grid-cols-2 md:grid-cols-2">
                <div>
                    <Card shadow="sm" key={1} id="image_color">
                        <CardBody className="overflow-visible p-0">
                            <Image
                                isZoomed
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={"generic_car"}
                                className="w-full object-cover h-[200px] lg:h-[300px]"
                                src={'https://us.123rf.com/450wm/alexutemov/alexutemov1706/alexutemov170600058/79716844-flat-verde-carro-tipo-de-ve%C3%ADculo-design-sedan-estilo-vector-gen%C3%A9rico-cl%C3%A1ssico-neg%C3%B3cio-auto.jpg?ver=6'}
                                />
                        </CardBody>
                        <CardFooter className="justify-between">
                            <b className="text-sm lg:text-2xl text-black">{'Celtus'}</b>
                            <p className="text-default-500 text-sm lg:text-2xl">{'R$ 10'}</p>
                        </CardFooter>  
                    </Card>
                </div>
                <div className="ml-2">
                    <h1 className="text-2xl text-black font-bold pb-2">Sorteio Celtus</h1>
                    <span className="text-black text-xl mt-10">Descrição:</span>
                    <p className="text-black pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nulla, iaculis eu commodo a, imperdiet vel libero. Integer sed ipsum tincidunt, ullamcorper tortor eget, imperdiet lorem. Phasellus facilisis erat vitae nisi lacinia faucibus. Duis sed ipsum feugiat, dictum sapien id, porttitor lorem. Integer ornare sapien quis velit vulputate viverra. Suspendisse ornare scelerisque tellus eget congue. Curabitur auctor nunc eget nisi euismod volutpat. Pellentesque ultricies augue mi, vel pellentesque ante fringilla nec.</p>
                </div>
            </div>
            <div className="rounded-xl pl-7 mt-10 grid justify-items-stretch">
                <Selecting_raffle />
                <Button
                    className="justify-self-center text-2xl mb-20 mt-10 font-bold ml-1 bg-primary text-white p-2 hover:bg-blue-600 w-7/12"
                    onClick={handleParticiparClick} // Adiciona a função de clique
                >
                    Confirmar Compra
                </Button>
            </div>
        </main>
  )
}

