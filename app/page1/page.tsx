// ./app/page1/page.tsx

import React from 'react';
import Image from 'next/image';
import Navbar_1 from './components/navbar';
import Carousel1 from './components/Carousel1';
import './styles/style.css'

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
    </main>
  );
}
