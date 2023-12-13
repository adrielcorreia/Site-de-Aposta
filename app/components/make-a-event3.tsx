
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/styles/event2.css';
const MakeAEvent3: React.FC = () => {
  // Estados para armazenar a data do sorteio e o tempo de expiração dos bilhetes
  const [drawDate, setDrawDate] = useState<Date | null>(null);
  const [ticketExpiration, setTicketExpiration] = useState<number>(0);

  // Função para lidar com a mudança na data do sorteio
  const handleDrawDateChange = (date: Date | null) => {
    setDrawDate(date);
  };

  // Função para lidar com a mudança no tempo de expiração dos bilhetes
  const handleTicketExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setTicketExpiration(value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Data do Sorteio:', drawDate);
    console.log('Tempo de Expiração do Bilhete (em dias):', ticketExpiration);
  };

  // Renderiza o formulário no componente
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Data do Sorteio:</label>
        <DatePicker
          selected={drawDate}
          onChange={handleDrawDateChange}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <div>
        <label>Tempo para um pedido expirar (em dias):</label>
        <input
          type="number"
          value={ticketExpiration}
          onChange={handleTicketExpirationChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MakeAEvent3;



