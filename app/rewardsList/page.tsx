'use client'
import React, { useState } from 'react';
import GerenciadorPremios from '../components/Gerenciador';
import '../components/styles/event.css';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto items-center justify-center p-24">
      <div>
      <h1 className='text-black font-inter text-3xl font-bold leading-normal'>lista de premios</h1>
      <GerenciadorPremios premios={[]} excluirPremio={function (id: number): void {
          throw new Error('Function not implemented.');
        } }/>
      </div>
    </main>
  );
}
