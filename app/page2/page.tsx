'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import PremiosForm from '../components/PremiosForm';
import '../components/styles/event.css';
import { Button } from '@nextui-org/react';
import {  GrAdd  } from "react-icons/gr";

interface Premio {
  nomePremio: string;
  descricaoPremio: string;
  coverPhotoUrl?: string;
}

export default function Home() {
  const [premios, setPremios] = useState<Premio[]>([]);

  const adicionarPremio = (novoPremio: Premio) => {
    setPremios([...premios, novoPremio]);
  };

  return (
    <main className="max-w-screen-xl mx-auto items-center justify-center p-24">
        <div className='flex justify-end items-center space-x-4 '>
           <Button className="rounded-full bg-blue-500">
          < GrAdd  className="text-white text-4xl" /><Link className='text-black font-inter font-normal text-opacity-60 leading-normal block ' href="/page4">Ver Lista de Prêmios</Link>
          </Button>
        </div>
      <div>
        <h1 className="text-black font-inter text-3xl font-bold leading-normal">Prêmio(s)</h1>
        <h3 className="text-black font-inter font-normal text-opacity-60 leading-normal">
          Insira um ou mais prêmios que os ganhadores serão contemplados:
        </h3>  
      
      
        <PremiosForm adicionarPremio={adicionarPremio} />
        <div className='p-4 mr-2 w-20 h-20 transition-all duration-200 hover:scale-110'>
           <Button className="rounded-full bg-blue-500">
           <Link className='text-black font-inter font-normal text-opacity-60 leading-normal block ' href="/page3">Próxima Página</Link>
          </Button>
        </div>
    </div>
    </main>
  );
}
