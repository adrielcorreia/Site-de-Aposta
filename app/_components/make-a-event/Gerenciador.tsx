import React from 'react';

interface Premio {
  id: number;
  nomePremio: string;
  descricaoPremio: string;
  coverPhotoUrl?: string;
}

interface GerenciadorPremiosProps {
  premios: Premio[];
  excluirPremio: (id: number) => void;
}

const GerenciadorPremios: React.FC<GerenciadorPremiosProps> = ({ premios, excluirPremio }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 text-black">Lista de Prêmios</h2>

      {premios.map((premio) => (
        <div key={premio.id} className="mb-4 border p-4 rounded">
          <div className="mb-2">
            <span className="font-bold text-black">Nome do Prêmio:</span> {premio.nomePremio}
          </div>
          <div className="mb-2">
            <span className="font-bold text-black">Descrição:</span> {premio.descricaoPremio}
          </div>
          {premio.coverPhotoUrl && (
            <div className="mb-2">
              <span className="font-bold">Foto:</span>
              <img src={premio.coverPhotoUrl} alt="Foto do prêmio" className="w-32 h-32" />
            </div>
          )}
          <button
            onClick={() => excluirPremio(premio.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
};

export default GerenciadorPremios;
