'use client'
import React, { useState } from 'react';
import "../components/styles/event.css";

// Define o componente funcional EventForm
const EventForm = () => {
  // Utiliza o hook useState para criar estados para cada campo do formulário
  const [title, setTitle] = useState('');            // Estado para o título do evento
  const [phoneNumber, setPhoneNumber] = useState(''); // Estado para o número de telefone
  const [category, setCategory] = useState('');       // Estado para a categoria do evento
  const [numericValue, setNumericValue] = useState('');// Estado para a quantidade de bilhetes
  const [ticketValue, setTicketValue] = useState('');  // Estado para o valor do bilhete

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // para exibir os dados do formulário no console 
    console.log('Dados do formulário:', { title, phoneNumber, category, numericValue, ticketValue });
  };

  // Renderize o formulário no componente
  return (
    <form onSubmit={handleSubmit}>
      {/* Campo para o título do evento */}
      <div>
        <label>Título do Evento:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      {/* Campo para o número de telefone */}
      <div>
        <label>Número de Telefone:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      {/* Campo para a categoria do evento (dropdown) */}
      <div>
        <label>Categoria do Evento:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
      </div>
      {/* Campo para a quantidade de bilhetes (input numérico) */}
      <div>
        <label>Bilhetes</label>
        <input type="number" value={numericValue} onChange={(e) => setNumericValue(e.target.value)} />
      </div>
      {/* Campo para o valor do bilhete (input numérico) */}
      <div>
        <label>Valor do Bilhete:</label>
        <input type="number" value={ticketValue} onChange={(e) => setTicketValue(e.target.value)} />
      </div>
      {/* Botão de envio do formulário */}
      <button type="submit">enviar</button>
    </form>
  );
};
export default EventForm;
