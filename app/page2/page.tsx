'use client'
import React, { useState } from 'react';
import PremiosForm from '../components/PremiosForm';
import '../components/styles/event.css';

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
      </div>
    </main>
  );
}
