
import React, { useState } from 'react';
import './styles/make-event4.css';
// Componente funcional para a seleção de bilhetes
const TicketSelection: React.FC = () => {
  // Estado para armazenar os bilhetes selecionados
  const [selectedTickets, setSelectedTickets] = useState<number[]>([]);
  // Número máximo de bilhetes permitidos
  const maxTickets = 10;

  // Função para lidar com o clique em um bilhete
  const handleTicketClick = (ticketNumber: number) => {
    // Verifica se o bilhete já foi selecionado
    if (selectedTickets.includes(ticketNumber)) {
      // Se já foi selecionado, remove da lista
      setSelectedTickets(selectedTickets.filter((number) => number !== ticketNumber));
    } else {
      // Se ainda não foi selecionado e não atingiu o limite máximo, adiciona à lista
      if (selectedTickets.length < maxTickets) {
        setSelectedTickets([...selectedTickets, ticketNumber]);
      }
    }
  };

  // Renderiza o componente
  return (
    <div>
      <h2>Selecione seus bilhetes (Máximo {maxTickets}):</h2>
      {/* Grid para mostrar os números dos bilhetes */}
      <div className="ticket-grid">
        {Array.from({ length: 100 }, (_, index) => index + 1).map((ticketNumber) => (
          <div
            key={ticketNumber}
            className={`ticket ${selectedTickets.includes(ticketNumber) ? 'selected' : ''}`}
            onClick={() => handleTicketClick(ticketNumber)}
          >
            {ticketNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente funcional para a geração de bilhete aleatório
const RandomTicket: React.FC = () => {
  // Estado para armazenar o bilhete aleatório gerado
  const [randomTicket, setRandomTicket] = useState<number | null>(null);

  // Função para gerar um bilhete aleatório
  const generateRandomTicket = () => {
    const randomTicketNumber = Math.floor(Math.random() * 100) + 1;
    // Define o bilhete aleatório no estado
    setRandomTicket(randomTicketNumber);
  };

  // Renderiza o componente
  return (
    <div>
      <h2>Seu bilhete aleatório:</h2>
      {/* Botão para gerar um bilhete aleatório */}
      <button onClick={generateRandomTicket}>Gerar Bilhete Aleatório</button>
      {/* Mostra o bilhete aleatório gerado */}
      <div className="random-ticket">{randomTicket !== null && randomTicket}</div>
    </div>
  );
};

// Componente principal que renderiza a seleção de bilhetes e o bilhete aleatório
const MakeAEvent4: React.FC = () => {
  return (
    <div>
      <TicketSelection />
      <RandomTicket />
    </div>
  );
};

// Exporta o componente principal
export default MakeAEvent4;
