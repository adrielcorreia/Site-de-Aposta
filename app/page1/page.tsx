import React from 'react';
import Image from 'next/image';
import Navbar_1 from './components/navbar';
import Carousel1 from './components/Carousel1';
import Card_1 from './components/card_1';
import Footer1 from './components/footer_01';
import './styles/style.css';
import { Button } from '@nextui-org/react';

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
];

export default function Home() {
  return (
    <main>
      <Navbar_1 />
      <Carousel1 />
      <div className='pt-10 flex justify-between items-center'>
        <span className='text-black font-bold text-2xl ml-8'>Eventos</span>
        <span className='mr-8'>
          <Button isIconOnly variant="solid" className='bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/1086/1086933.png" width={20} height={20} alt="" />
          </Button>
        </span>
      </div>
      <Card_1 />
      <div className='pt-10 flex justify-end items-center'>
        <div className='flex items-center'>
          <p className='mr-2 text-black font-medium'>Criar Evento</p>
          <Button isIconOnly variant="solid" className='bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center mr-6'>
            <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" width={20} height={20} alt="" />
          </Button>
        </div>
      </div>
      <Footer1 />
    </main>
  );
}
