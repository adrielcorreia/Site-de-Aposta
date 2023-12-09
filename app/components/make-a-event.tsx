'use client'
import React, { useState } from 'react';
import '../components/event.css'
const EventForm = () => {
  const [title, setTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [numericValue, setNumericValue] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Dados do formulário:', { title, phoneNumber, category, numericValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título do Evento:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Número de Telefone:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div>
        <label>Categoria do Evento:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
      </div>
      <div>
        <label>bilhetes (Apenas Números):</label>
        <input type="number" value={numericValue} onChange={(e) => setNumericValue(e.target.value)} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default EventForm;
