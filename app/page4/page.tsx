'use client'
import React from 'react';
import GerenciadorPremios from '../components/Gerenciador';
import '../components/styles/event.css';



const ListaPremios: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-black">Lista de Prêmios</h1>
      <GerenciadorPremios premios={[]} excluirPremio={function (id: number): void {
        throw new Error('função não implementada');
      } } />
    </div>
  );
};

export default ListaPremios;
