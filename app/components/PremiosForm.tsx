import React, { useState, ChangeEventHandler } from 'react';
import { Button } from '@nextui-org/react';

interface PremiosFormProps {
  adicionarPremio: (novoPremio: any) => void;
}

const PremiosForm: React.FC<PremiosFormProps> = ({ adicionarPremio }) => {
  const [nomePremio, setNomePremio] = useState('');
  const [descricaoPremio, setDescricaoPremio] = useState('');
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [coverPhotoUrl, setCoverPhotoUrl] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nomePremio && descricaoPremio && coverPhoto) {
      const novoPremio = { nomePremio, descricaoPremio, coverPhotoUrl };
      adicionarPremio(novoPremio);
      setNomePremio('');
      setDescricaoPremio('');
      setCoverPhoto(null);
      setCoverPhotoUrl(undefined);
    } else {
      console.error("Por favor, preencha todos os campos");
    }
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile) {
      setCoverPhoto(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setCoverPhotoUrl(imageUrl);
    }
  };

  return (
    <div className="layout p-8 rounded-lg border border-black border-opacity-30">
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label className="block mb-2 text-black font-inter text-lg">Nome do Prêmio:</label>
          <input
            type="text"
            value={nomePremio}
            onChange={(e) => setNomePremio(e.target.value)}
            className="w-full p-2 border border-black border-opacity-30 rounded text-black"
            style={{ background: 'rgba(217, 217, 217, 0.30)' }}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black font-inter text-lg">Descrição do Prêmio:</label>
          <textarea
            value={descricaoPremio}
            onChange={(e) => setDescricaoPremio(e.target.value)}
            className="w-full p-2 border border-black border-opacity-30 rounded text-black"
            style={{ background: 'rgba(217, 217, 217, 0.30)' }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Capa do prêmio
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <img
                src={coverPhotoUrl}
                alt="Capa do Prêmio"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Carregar um arquivo</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">ou arraste e solte</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF até 10MB</p>
            </div>
          </div>
        </div>

        {/* Botão para esconder/mostrar a etiqueta da foto da capa do prêmio */}
        <Button
          type="button"
          onClick={() => setCoverPhotoUrl(undefined)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Remover Capa
        </Button>

        {/* Botão de Envio */}
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default PremiosForm;
