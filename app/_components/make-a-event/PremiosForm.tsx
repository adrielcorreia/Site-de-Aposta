import React, { useState, ChangeEventHandler, FormEvent } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';

interface Premio {
  id: number;
  nomePremio: string;
  descricaoPremio: string;
  coverPhotoUrl?: string;
}

export default function PremiosForm() {
  const [nomePremio, setNomePremio] = useState('');
  const [descricaoPremio, setDescricaoPremio] = useState('');
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [coverPhotoUrl, setCoverPhotoUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (nomePremio && descricaoPremio && coverPhoto) {
        const novoPremio: Premio = {
          id: Date.now(),
          nomePremio,
          descricaoPremio,
          coverPhotoUrl,
        };

        // Simulando uma requisição assíncrona (pode ser uma chamada à API)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setNomePremio('');
        setDescricaoPremio('');
        setCoverPhoto(null);
        setCoverPhotoUrl(undefined);
        setError(null);
      } else {
        setError('Por favor, preencha todos os campos');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário', error);
      setError('Erro ao enviar o formulário. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
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
    <div className="layout p-8 bg-white shadow-md rounded-lg border border-opacity-30">
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <Input
            size='lg'
            radius='full'
            label='Nome do Prêmio:'
            labelPlacement='outside'
            placeholder='Digite o nome do prêmio'
            type="text"
            value={nomePremio}
            onChange={(e) => setNomePremio(e.target.value)}
            isInvalid={nomePremio == '' ? true : false}
            color={nomePremio == '' ? 'danger' : 'default'}
            isRequired
          />
        </div>

        <div className="mb-4 ">
          <Textarea
            size='lg'
            minRows={2}
            radius='full'
            label='Descrição do Prêmio:'
            labelPlacement='outside'
            placeholder='Digite a descrição do prêmio'
            value={descricaoPremio}
            onChange={(e) => setDescricaoPremio(e.target.value)}
            isInvalid={descricaoPremio == '' ? true : false}
            color={descricaoPremio == '' ? 'danger' : 'default'}
            isRequired
          />
        </div>

        <div className="mb-4 rounded-md p-4 bg-gray-200">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Capa do prêmio
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {coverPhotoUrl ? (
              <div className="card">
                <img
                  src={coverPhotoUrl}
                  alt="Capa do Prêmio"
                  className="w-full h-32 object-cover rounded"
                />
                <div className="card-body">
                  <Button
                    type="button"
                    onClick={() => setCoverPhotoUrl(undefined)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Remover Capa
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center">
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
                <p className="pl-1 text-black">ou arraste e solte</p>
              </div>
            )}
          </div>
        </div>

        {error && (
          <div style={{ color: 'red' }} className="mb-4">
            <p>{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2 ${
            loading && 'opacity-50 cursor-not-allowed'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </Button>
      </form>
    </div>
  );
};