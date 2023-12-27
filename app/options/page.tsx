'use client'
import MakeAEventOpcoes from "../components/MakeAEventOpcoes";
import "../components/styles/event.css"

export default function Home() {
    return (
      <main className="max-w-screen-xl mx-auto items-center justify-center p-24">
        <div>
        <h1 className='text-black font-inter text-3xl font-bold leading-normal'>Opções</h1>
        <h3 className='text-black font-inter font-normal text-opacity-60 leading-normal'>Escolha o modelo do evento::</h3>
        <MakeAEventOpcoes/>
        </div>
      </main>
    );
  }