
import React, { useState } from 'react';
//import "../components/styles/event.css";
import { useRouter } from 'next/navigation';

export default function EventForm() {
  // Obtém o objeto router usando o hook useRouter
  const router = useRouter();

  const handleParticiparClick = () => {
    // Navega para a página desejada (substitua 'nome-da-rota' pelo nome real da sua rota)
    router.push('/page2');
  };

  // Utiliza o hook useState para criar estados para cada campo do formulário
  const [title, setTitle] = useState(''); // Estado para o título do evento
  const [phoneNumber, setPhoneNumber] = useState(''); // Estado para o número de telefone
  const [category, setCategory] = useState(''); // Estado para a categoria do evento
  const [numericValue, setNumericValue] = useState(''); // Estado para a quantidade de bilhetes
  const [ticketValue, setTicketValue] = useState(''); // Estado para o valor do bilhete
  const [country, setCountry] = useState(''); // Adicionado estado para o país

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // para exibir os dados do formulário no console
    console.log('Dados do formulário:', { title, phoneNumber, category, numericValue, ticketValue });
  };

  // Renderize o formulário no componente
  return (
    <div className="layout p-8 rounded-lg border border-black border-opacity-30">
      <form onSubmit={handleSubmit} className="">
        {/* Campo para o título do evento */}
        <div className="mb-4" >
          <label className="block mb-2 text-black font-inter text-lg">Título do Evento:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 tex-black border border-black border-opacity-30 rounded text-black"
            style={{ background: 'rgba(217, 217, 217, 0.30)' }}
            
          />
        </div>
        {/* Campo para o número de telefone */}
        <div className="mb-4">
    <label className="block mb-2 text-black font-inter text-lg">Telefone público para contato:</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">País</label>
            <select
  id="country"
  name="country"
  className="h-full rounded-md border border-black border-opacity-30 bg-opacity-30 bg-white py-0 pl-4 pr-9 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm"
  style={{ background: 'rgba(217, 217, 217, 0.30)' }}
  onChange={(e) => setCountry(e.target.value)}
  value={country}
>
  <option value="US">US</option>
  <option value="BR">BR</option>
  <option value="EU">EU</option>
</select>

        </div>
        <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 pl-20 border border-black border-opacity-30 rounded text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            style={{ background: 'rgba(217, 217, 217, 0.30)' }}
        />
    </div>
</div>

        {/* Campo para a categoria do evento (dropdown) */}
        <div className="mb-4">
          <label className="block mb-2 text-black font-inter text-lg">Categoria do Evento:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-black border-opacity-30 rounded text-black"
          >
            <option value="">Selecione uma categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>
        {/* Campo para a quantidade de bilhetes (input numérico) */}
        <div className="mb-4 flex space-x-4">
            {/* Campo para a quantidade de bilhetes (input numérico) */}
            <div>
              <label className="block mb-2 text-black font-inter text-lg">Bilhetes:</label>
              <input
                type="number"
                value={numericValue}
                onChange={(e) => setNumericValue(e.target.value)}
                className="w-full p-2 border border-black border-opacity-30 rounded text-black"
                style={{ background: 'rgba(217, 217, 217, 0.30)' }}
              />
            </div>
            {/* Campo para o valor do bilhete (input numérico) */}
            <div>
              <label className="block mb-2 text-black font-inter text-lg">Valor do Bilhete:</label>
              <input
                type="number"
                value={ticketValue}
                onChange={(e) => setTicketValue(e.target.value)}
                className="w-full p-2 border border-black border-opacity-30 rounded text-black"
                style={{ background: 'rgba(217, 217, 217, 0.30)' }}
              />
            </div>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Enviar
        </button>
        <button
          type="submit"
          onClick={handleParticiparClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
        >
          Próximo
        </button>
      </form>
    </div>
  );
}