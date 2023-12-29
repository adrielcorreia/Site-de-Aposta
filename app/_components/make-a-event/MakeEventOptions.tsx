import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Options() {
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

  const totalBilhetes = 20;
  const [bilhetesEscolhidos, setBilhetesEscolhidos] = useState<number[]>([]);

  const handleEscolherBilhete = (numero: number) => {
    const index = bilhetesEscolhidos.indexOf(numero);
    if (index !== -1) {
      setBilhetesEscolhidos((prev) => prev.filter((item) => item !== numero));
    } else {
      setBilhetesEscolhidos((prev) => [...prev, numero]);
    }
  };

  return (
    <div className="layout p-8 bg-white  shadow-md rounded-lg border border-opacity-30">
      <h1 className="text-3xl font-bold mb-4 text-black">Sorteio</h1>

      {/* MakeAEvent3 Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col md:flex-row md:items-start mb-4">
          {/* Bilhetes Escolhidos */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="rounded-md  p-4 bg-gray-200 ">
              <h2 className="text-xl font-semibold mb-2 text-black">Bilhetes Escolhidos</h2>
              <div className="grid grid-cols-5 gap-4">
                {[...Array(totalBilhetes)].map((_, index) => (
                  <div
                    key={index + 1}
                    className={`${
                      bilhetesEscolhidos.includes(index + 1)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700'
                    } px-4 py-2 rounded cursor-pointer`}
                    onClick={() => handleEscolherBilhete(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 pl-0 md:pl-2 mb-4 md:mb-0"></div>

          {/* Date and Expiration */}
          <div className="w-full md:w-1/2 pl-0 md:pl-2 mb-4 md:mb-0">
            <div className="mb-4">
              <label className="block mb-2 text-black font-inter text-lg">Informa data do sorteio:</label>
              <DatePicker
                selected={drawDate}
                onChange={handleDrawDateChange}
                showTimeSelect
                dateFormat="Pp"
                className="border bg-gray-200 border-gray-400 p-2 text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-black font-inter text-lg">Informa data do final do sorteio:</label>
              <DatePicker
                selected={drawDate}
                onChange={handleDrawDateChange}
                showTimeSelect
                dateFormat="Pp"
                className="border bg-gray-200 shadow-md border-gray-400 p-2 text-black"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};