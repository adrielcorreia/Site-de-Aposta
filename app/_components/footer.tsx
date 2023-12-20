import { Avatar } from "@nextui-org/react";


export default function Footer() {
    return (
        <footer className="min-w-screen p-14 pb-5 bg-gray-100">
            <div className="flex justify-between">
                <div className="flex flex-col gap-8">
                    <Avatar size="lg" src="/logo.jpeg" />

                    <span>
                        Lorem ipsum dolor sit amet<br></br>
                        consectetur adipisicing elit. <br></br>
                        Ratione blanditiis voluptates <br></br> 
                        assumenda saepe, sint ipsum sapiente quas?
                    </span>

                    <div className="flex gap-7 w-2/6 justify-center">
                        <p>F</p>
                        <p>I</p>
                        <p>X</p>
                    </div>
                </div>


                <div className="flex gap-5">
                    <div className="flex flex-col gap-3 w-100">
                        <h1 className="text-xl font-bold">Páginas</h1>
                        
                        <p>Home</p>
                        <p>Sobre nós</p>
                        <p>Termos de uso</p>
                        <p>Política de privacidade</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-bold">Ajuda</h1>
                        
                        <p>Central de ajuda</p>
                        <p>Dúvidas frequentes</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-bold">Contato</h1>
                        
                        <p>(XX) XXXXX-XXXX</p>
                        <p>email@softex.com</p>
                    </div>
                </div>
            </div>

            <span className="max-w-sreen block text-center pb-0">
                Copyright @ 2023
            </span>
        </footer>
    )
}