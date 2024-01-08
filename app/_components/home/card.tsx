"use client";

import { AuthContext } from "@/app/contexts/auth";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from "react";
import { api } from "@/services/api";

const arr: object[] = [
  {
    category: 'Veículos',
    title: 'Toyota SW4',
    src: 'https://1.bp.blogspot.com/-4tgiGIrObp8/XpUKi58zxyI/AAAAAAAAktk/txMr_S-qL_IDmN1X8gDfVMoJQMEig31ugCLcBGAsYHQ/s1600/B0921596-83B4-4F18-9808-D87C2C6FF36F.jpeg'
  },

  {
    category: 'Eletroeletrônicos',
    title: 'Playstation 5',
    src: 'https://uploads.metropoles.com/wp-content/uploads/2020/11/16115944/PS5-1-600x400.jpg'
  },

  {
    category: 'Imóveis',
    title: 'Apartamento',
    src: 'https://lh3.googleusercontent.com/60rRkX55fIqhl4mfzt5D5gR__J_xEj08qtxQ0BRT1-TAvFmQV-YjDFs1ONDA7AawKiazQJC6fITry4TxbUETNf9aeL9FpSNgZhiq_I981wxtrsocro0AZmZk023zPzgGmsG-5fl3lD8cjP8L7O9ZH0M'
  },

  {
    category: 'Lazer',
    title: 'Viagem ao Rio de Janeiro',
    src: 'https://centralderadiobrasil.com.br/wp-content/uploads/viagem-turismo.jpg'
  }
]

export default function CardComponent() {
  const { users, addUser }: any = useContext(AuthContext)
  const router = useRouter();

  useEffect(() => {
    async function loadItems() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const response = await api.get('/users')
      addUser(response.data)
    }

    loadItems()
    console.log(users)
  }, []);
  

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {
        arr.map((content:any, key: number) => (
          <div key={`card ${key}`} onClick={() => router.push('/makeBet')}>

            <Card className="h-[300px] cursor-pointer" role="button">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{content.category}</p>
                <h4 className="text-white font-medium text-large">{content.title}</h4>
              </CardHeader>

              <Image
                isZoomed
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={content.src}
              />
              
            </Card>
          </div>
        ))
      }
    </div>
  );
}