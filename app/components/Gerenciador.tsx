import React, { useState } from 'react';
import PremiosForm from './PremiosForm';

interface Premio {
  nomePremio: string;
  descricaoPremio: string;
  coverPhotoUrl?: string;
}

const GerenciadorPremios: React.FC = () => {
  const [premios, setPremios] = useState<Premio[]>([]);

  const adicionarPremio = (novoPremio: Premio) => {
    setPremios([...premios, novoPremio]);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Gerenciador de Prêmios</h1>
      <PremiosForm adicionarPremio={adicionarPremio} />

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Lista de Prêmios</h2>
        <ul>
          {premios.map((premio, index) => (
            <li key={index} className="mb-4">
              <div>
                <strong>{premio.nomePremio}</strong>
                <p>{premio.descricaoPremio}</p>
                {premio.coverPhotoUrl && (
                  <img
                    src={premio.coverPhotoUrl}
                    alt={`Capa do Prêmio ${premio.nomePremio}`}
                    className="mx-auto h-24 w-24 rounded-full object-cover mt-2"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GerenciadorPremios;
