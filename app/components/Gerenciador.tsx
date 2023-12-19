import React, { useState } from 'react';
import PremiosForm from './PremiosForm';

interface Premio {
  nomePremio: string;
  descricaoPremio: string;
}

const GerenciadorPremios: React.FC = () => {
  const [premios, setPremios] = useState<Premio[]>([]);

  const adicionarPremio = (novoPremio: Premio) => {
    setPremios([...premios, novoPremio]);
  };

  const excluirPremio = (index: number) => {
    const novaListaPremios = [...premios];
    novaListaPremios.splice(index, 1);
    setPremios(novaListaPremios);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Gerenciador de Prêmios</h1>
      <PremiosForm adicionarPremio={adicionarPremio} />

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Lista de Prêmios</h2>
        <ul>
          {premios.map((premio, index) => (
            <li key={index} className="mb-2">
              {premio.nomePremio} - {premio.descricaoPremio}
              <button
                onClick={() => excluirPremio(index)}
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GerenciadorPremios;
