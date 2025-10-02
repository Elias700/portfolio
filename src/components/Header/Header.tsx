import { FaGlobe } from 'react-icons/fa';
import { useState } from 'react';


export default function Navbar() {

  const [lenguage, setLenguage] = useState<string>('');

  return (
   <header className="bg-green-950 p-10 flex justify-between">
      <p className='text-[#00B58C] text-2xl **font-dancing** italic'>Elias Ribeiro</p>
      <nav className='flex justify-center'>
        <ul className='[&>li]:text-[#00B58C] [&>li]:cursor-pointer [&>li]:text-2xl [&>li]:hover:text-[#CBCCD1] [&>li]:transition [&>li]:duration-[500ms] flex justify-center gap-10'>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Meus projetos</li>
          <li>Habilidades</li>
          <li>Contato</li>
        </ul>
      </nav>
        <FaGlobe size={30} color="#00B58C" className='cursor-pointer '/>
   </header>
  );
}
