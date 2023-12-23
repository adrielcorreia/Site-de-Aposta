import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { FiFlag } from 'react-icons/fi';

// Icon component com tipagem explícita
interface CountryIconProps {
  code: string;
  label: string;
  icon: React.ReactNode;
}

const CountryIcon: React.FC<CountryIconProps> = ({ code, label, icon }) => (
  <div className="flex items-center">
    {icon} {label}
  </div>
);

export default function EventForm() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [numericValue, setNumericValue] = useState('');
  const [ticketValue, setTicketValue] = useState('');
  const [country, setCountry] = useState('US');

  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Lógica de validação
    if (!title || !phoneNumber || !category || !numericValue || !ticketValue) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    console.log('Dados do Formulário:', { title, phoneNumber, category, numericValue, ticketValue, country });
    // Lógica para enviar dados para o servidor, se necessário
  };

  const handleParticiparClick = () => {
    // Adicione qualquer lógica adicional antes da navegação, se necessário
    router.push('/page2');
  };

  const countryOptions = [
    { code: 'US', label: 'Estados Unidos', icon: <FiFlag /> },
    { code: 'BR', label: 'Brasil', icon: <FiFlag /> },
    { code: 'EU', label: 'União Europeia', icon: <FiFlag /> },
  ];

  return (
    <div className="layout p-8 shadow-md rounded-lg border border-blue-500 border-opacity-30 bg-white text-black">
      <form onSubmit={handleSubmit} onReset={() => { /* Adicione lógica para redefinir campos */ }}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-black font-inter text-lg">
            Título do Evento:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded bg-gray-200 shadow-md text-black focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Adicione rótulos explícitos para campos de entrada */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2 text-black font-inter text-lg">
            Telefone público para contato:
          </label>
          <div className="relative flex items-center">
            <label htmlFor="country" className="sr-only">
              País
            </label>
            <div className="flex items-center">
              <select
                id="country"
                name="country"
                className="h-full rounded-md border border-black border-opacity-30 bg-opacity-30 bg-white py-0 pl-4 pr-9 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              >
                {countryOptions.map((option) => (
                 <option key={option.code} value={option.code}>
                <CountryIcon code={option.code} label={option.label} icon={option.icon} />
               </option>
                ))}
              </select>
              <div className="ml-2">{countryOptions.find((option) => option.code === country)?.icon}</div>
            </div>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border bg-gray-200 shadow-md rounded text-black focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-black font-inter text-lg">
            Categoria do Evento:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-200 p-2 border shadow-md focus:outline-none focus:border-blue-500 rounded text-black"
          >
            <option value="">Selecione uma categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
          </select>
        </div>

        <div className="mb-4 flex space-x-4">
          <div>
            <label htmlFor="numericValue" className="block mb-2 text-black font-inter text-lg">
              Bilhetes:
            </label>
            <input
              type="number"
              id="numericValue"
              value={numericValue}
              onChange={(e) => setNumericValue(e.target.value)}
              className="w-full p-2 border rounded bg-gray-200 shadow-md text-black focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="ticketValue" className="block mb-2 text-black font-inter text-lg">
              Valor do Bilhete:
            </label>
            <input
              type="number"
              id="ticketValue"
              value={ticketValue}
              onChange={(e) => setTicketValue(e.target.value)}
              className="w-full p-2 border rounded  bg-gray-200 shadow-md text-black focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Enviar
        </Button>
        <Button
          type="button"
          onClick={handleParticiparClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
        >
          Próximo
        </Button> 
      </form>
    </div>
  );
}
