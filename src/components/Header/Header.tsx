import { useState } from "react";
import { MdLanguage } from "react-icons/md";

export default function Navbar() {
  // Estado para controlar o idioma
  const [isEnglish, setIsEnglish] = useState(false);

  // Objetos com textos nos dois idiomas
  const texts = {
    pt: {
      title: "Portfólio",
      menu: ["Home", "Sobre mim", "Projetos", "Contato"]
    },
    en: {
      title: "Portfolio",
      menu: ["Home", "About Me", "Projects", "Contact"]
    }
  };

  // Função para alternar o idioma
  const toggleLanguage = () => setIsEnglish(prev => !prev);

  return (
    <nav className="flex justify-between p-10 bg-green-950">
      <p className="text-[#00B58C] text-3xl font-light">
        {isEnglish ? texts.en.title : texts.pt.title}
      </p>

      <ul className="flex gap-5 [&>li]:text-[#00B58C] [&>li]:cursor-pointer [&>li]:hover:text-white [&>li]:transition [&>li]:duration-[1000ms] text-3xl">
        {(isEnglish ? texts.en.menu : texts.pt.menu).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <MdLanguage
        className="text-3xl text-[#00B58C] cursor-pointer"
        onClick={toggleLanguage} // alterna o idioma ao clicar
      />
    </nav>
  );
}
