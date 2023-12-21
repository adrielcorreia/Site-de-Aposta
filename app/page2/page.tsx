'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import PremiosForm from '../components/PremiosForm';
import '../components/styles/event.css';
import { Button } from '@nextui-org/react';

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
      <div>
        <h1 className="text-black font-inter text-3xl font-bold leading-normal">Prêmio(s)</h1>
        <h3 className="text-black font-inter font-normal text-opacity-60 leading-normal">
          Insira um ou mais prêmios que os ganhadores serão contemplados:
        </h3>
        <PremiosForm adicionarPremio={adicionarPremio} />
       <div className='grid grid-cols-2 gap-4 '>
      <div className='bg-red-500 rounded-md shadow-md p-2 transition-transform duration-300 transform hover:scale-105 '>
        <Link className='text-black font-inter font-normal text-opacity-60 leading-normal block ' href="/page4">Ver Lista de Prêmios</Link>
     </div>
     <div className='bg-blue-500 rounded-md shadow-md p-2 transition-transform duration-300 transform hover:scale-105'>
        <Link className='text-black font-inter font-normal text-opacity-60 leading-normal block ' href="/page3">Próxima Página</Link>
     </div>
     </div>
    </div>
    </main>
  );
}
