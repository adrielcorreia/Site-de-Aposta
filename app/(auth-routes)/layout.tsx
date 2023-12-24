import { Avatar, Button } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import HeaderWithoutAuth from "../_components/headerWithoutAuth";
import Carousel1 from "../page1/components/Carousel1";
import Card_1 from "../page1/components/card_1";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (session) {
        redirect('/home')
    }

    return (
        <>
        <HeaderWithoutAuth />

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

        <div className='pt-10 flex justify-end items-center pb-10'>
            <div className='flex items-center'>
            <p className='mr-2 text-black font-medium'>Criar Evento</p>
            <Button isIconOnly variant="solid" className='bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center mr-6'>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" width={20} height={20} alt="" />
            </Button>
            </div>
        </div>
        
        </>
    )
}