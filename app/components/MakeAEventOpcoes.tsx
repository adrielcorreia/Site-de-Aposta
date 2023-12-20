import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const MakeAEvent4: React.FC = () => {
  // States for MakeAEvent3
  const [drawDate, setDrawDate] = useState<Date | null>(null);
  const [ticketExpiration, setTicketExpiration] = useState<number>(0);

  const handleDrawDateChange = (date: Date | null) => {
    setDrawDate(date);
  };

  const handleTicketExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setTicketExpiration(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Data do Sorteio:', drawDate);
    console.log('Tempo de Expiração do Bilhete (em dias):', ticketExpiration);
  };

  // States for MakeAEvent4
  const totalBilhetes = 20;
  const [bilhetesEscolhidos, setBilhetesEscolhidos] = useState<number[]>([]);
  const [bilhetesAleatorios, setBilhetesAleatorios] = useState<number[]>([]);
  const [quantidadeAleatoria, setQuantidadeAleatoria] = useState<number>(4);

  const handleEscolherBilhete = (numero: number) => {
    const index = bilhetesEscolhidos.indexOf(numero);
    if (index !== -1) {
      setBilhetesEscolhidos((prev) => prev.filter((item) => item !== numero));
    } else {
      setBilhetesEscolhidos((prev) => [...prev, numero]);
    }
  };

  const handleSortearAleatorio = () => {
    const bilhetesAleatorios: number[] = [];
    while (bilhetesAleatorios.length < quantidadeAleatoria) {
      const numeroAleatorio = Math.floor(Math.random() * totalBilhetes) + 1;
      if (!bilhetesAleatorios.includes(numeroAleatorio)) {
        bilhetesAleatorios.push(numeroAleatorio);
      }
    }
    setBilhetesAleatorios(bilhetesAleatorios);
  };

  const handleAumentarQuantidade = () => {
    setQuantidadeAleatoria((prev) => prev + 1);
  };

  const handleDiminuirQuantidade = () => {
    setQuantidadeAleatoria((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sorteio</h1>

      {/* MakeAEvent3 Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block mb-2 text-black font-inter text-lg">Data do Sorteio:</label>
          <DatePicker
            selected={drawDate}
            onChange={handleDrawDateChange}
            showTimeSelect
            dateFormat="Pp"
            className='border border-gray-400 p-2 text-black'
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black font-inter text-lg">Tempo para um pedido expirar (em dias):</label>
          <input
            type="number"
            value={ticketExpiration}
            onChange={handleTicketExpirationChange}
            className="border border-gray-400 p-2 text-black"
            style={{ background: 'rgba(217, 217, 217, 0.30)' }}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Enviar
        </button>
      </form>

      {/* MakeAEvent4 Content */}
      <div className="flex mb-4">
        {/* Bilhetes Escolhidos */}
        <div className="w-1/2 pr-2 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Bilhetes Escolhidos</h2>
          <div className="rounded-md shadow-md p-4">
            <div className="grid grid-cols-5 gap-4">
              {[...Array(totalBilhetes)].map((_, index) => (
                <div
                  key={index + 1}
                  className={`${
                    bilhetesEscolhidos.includes(index + 1)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  } px-4 py-2 rounded cursor-pointer`}
                  onClick={() => handleEscolherBilhete(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bilhetes Aleatórios */}
        <div className="w-1/2 pl-2 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Bilhetes Aleatórios</h2>
          <div className="rounded-md shadow-md p-4">
            <div className="grid grid-cols-4 gap-4">
              {bilhetesAleatorios.map((numero) => (
                <div key={numero} className="bg-green-500 text-white px-4 py-2 rounded">
                  {numero}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quantity of randomly drawn tickets */}
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold mr-2">Quantidade de Bilhetes Aleatórios:</h2>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
          onClick={() => handleDiminuirQuantidade()}
        >
          -
        </button>
        <span className="mx-2 text-black">{quantidadeAleatoria}</span>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
          onClick={() => handleAumentarQuantidade()}
        >
          +
        </button>
      </div>

      {/* Button to draw random tickets */}
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
        onClick={() => handleSortearAleatorio()}
      >
        Sortear Aleatórios
      </button>
    </div>
  );
};

export default MakeAEvent4;
