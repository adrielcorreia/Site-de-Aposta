import Image from 'next/image'
import { Button } from '@nextui-org/react'
'use client'
import React from 'react';
import EventForm from './components/make-a-event';
import '../app/components/styles/event.css'
import MakeAEvent2 from '../app/components/make-a-event2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1>dados basicos</h1>
        <EventForm />
      </div>
      <div>
        <h1>dados basicos</h1>
        <MakeAEvent2 />
      </div>
    </main>
  );
}