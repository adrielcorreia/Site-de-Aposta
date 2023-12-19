'use client'
import PremiosForm from "../components/PremiosForm";
import "../components/styles/event.css"

export default function Home() {
    return (
      <main className="max-w-screen-xl mx-auto items-center justify-center p-24">
        <div>
        <h1 className='text-black font-inter text-3xl font-bold leading-normal'>Prêmio(s)</h1>
        <h3 className='text-black font-inter font-normal text-opacity-60 leading-normal'>Insira um ou mais prêmios que os ganhadores serão contemplados:</h3>
          <PremiosForm adicionarPremio={function (novoPremio: any): void {
            throw new Error("Function not implemented.");
          } }/>
        </div>
      </main>
    );
  }