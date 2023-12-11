'use client'
import React, { useState } from 'react';
import '../components/styles/event2.css'

 //Define uma interface Prize para representar a estrutura de um prêmio
interface Prize {
    prize: string;
    description: string;
    image: File | null;
  }
  
  const MakeAEvent2: React.FC = () => {
 // Estados para armazenar os prêmios, o nome e a descrição do novo prêmio, a imagem e a visibilidade do formulário
    const [prizes, setPrizes] = useState<Prize[]>([]);
    const [newPrize, setNewPrize] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [showForm, setShowForm] = useState(false);
  
 // Função para adicionar um novo prêmio à lista
    const handleAddPrize = () => {
      if (newPrize && newDescription) {
        setPrizes([...prizes, { prize: newPrize, description: newDescription, image }]);
        setNewPrize('');
        setNewDescription('');
        setImage(null);
        setShowForm(false);
      }
    };
     // Função para lidar com a mudança na seleção de uma nova imagem
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        setImage(files[0]);
      }
    };
  
    return (
      <div>
        <h1>Adicionar Prêmios</h1>
        <div>
          <label>Imagem do Prêmio:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
           {/* Mostra a imagem selecionada */}
           {image && (
              <div>
                <label>Imagem Selecionada:</label>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Imagem do Prêmio"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              </div>
            )}
        </div>
        // Botão para exibir o formulário de adição de prêmio ao clicar
        <button onClick={() => setShowForm(true)}>Adicionar Prêmio</button>
         
        {showForm && (
          <div>
            <label>Nome do Prêmio:</label>
            <input type="text" value={newPrize} onChange={(e) => setNewPrize(e.target.value)} />
  
            <label>Descrição do Prêmio:</label>
            <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
            <button onClick={handleAddPrize}>Adicionar</button>
            <button onClick={() => setShowForm(false)}>Cancelar</button>
          </div>
        )}
        {/* Mapeamento dos prêmios existentes para exibição */}
        {prizes.map((prize, index) => (
          <div key={index}>
            <h2>{prize.prize}</h2>
            <p>{prize.description}</p>
            {prize.image && (
              <img
                src={URL.createObjectURL(prize.image)}
                alt={`Imagem do prêmio ${prize.prize}`}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default MakeAEvent2;