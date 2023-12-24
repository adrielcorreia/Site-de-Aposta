"use client";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function Card_1() {
      // Obtém o objeto router usando o hook useRouter
      const router = useRouter();

      const handleParticiparClick = () => {
          // Navega para a página desejada (substitua 'nome-da-rota' pelo nome real da sua rota)
          router.push('/page2-1');
      };

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <Card className="h-[300px] mr-10 cursor-pointer" onClick={handleParticiparClick} role="button">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Veículos</p>
          <h4 className="text-white font-medium text-large">Toyota SW4</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://blog.toyotasulpar.com.br/wp-content/uploads/2022/12/dicas-comprar-toyota-novo-curitiba.jpg"
        />
      </Card>
      <Card className="h-[300px] mr-10 cursor-pointer" onClick={handleParticiparClick}>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Consoles</p>
          <h4 className="text-white font-medium text-large">Playstation 5</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://uploads.metropoles.com/wp-content/uploads/2020/11/16115944/PS5-1-600x400.jpg"
        />
      </Card>
      <Card className="h-[300px] mr-10 cursor-pointer" onClick={handleParticiparClick}>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">imóveis</p>
          <h4 className="text-white font-medium text-large">Casas e Apartamentos</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/60rRkX55fIqhl4mfzt5D5gR__J_xEj08qtxQ0BRT1-TAvFmQV-YjDFs1ONDA7AawKiazQJC6fITry4TxbUETNf9aeL9FpSNgZhiq_I981wxtrsocro0AZmZk023zPzgGmsG-5fl3lD8cjP8L7O9ZH0M"
        />
      </Card>
      <Card className="h-[300px] mr-10 cursor-pointer" onClick={handleParticiparClick}>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Viagens</p>
          <h4 className="text-white font-medium text-large">Rio de Janeiro</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://centralderadiobrasil.com.br/wp-content/uploads/viagem-turismo.jpg"
        />
      </Card>
    </div>
  );
}
