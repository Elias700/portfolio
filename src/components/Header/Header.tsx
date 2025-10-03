import { FaGlobe } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {


  return (
   <header className="bg-[#20272F] p-10 flex justify-between fixed top-0 left-0 right-0 w-[100%] z-50">
      <p className='text-[#00B58C] text-2xl **font-dancing** italic'>PortFólio</p>
      <nav className='flex justify-center'>
        <ul className='[&>li]:text-[#00B58C] [&>li]:cursor-pointer [&>li]:text-2xl [&>li]:hover:text-[#CBCCD1] [&>li]:transition [&>li]:duration-[500ms] flex justify-center gap-10'>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Meus projetos</li>
          <li>Habilidades</li>
          <li>Contato</li>
        </ul>
      </nav>
        <div className='flex gap-5'>
          <FaGlobe size={30} color="#00B58C" className='cursor-pointer '/>
          <FiSun size={30} color="#00B58C" className='cursor-pointer '/>
          <FiMoon size={30} color="#00B58C" className='cursor-pointer '/>
        </div> 
   </header>
  );
}
