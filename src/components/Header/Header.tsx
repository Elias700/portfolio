import { FaGlobe } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext.tsx';

export default function Header() {
  const { t, setLang, lang } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const choose = (code: 'pt' | 'en') => {
    setLang(code);
    setOpen(false);
  };
  return (
    <header className="bg-[#20272F] p-10 flex justify-between fixed top-0 left-0 right-0 w-[100%] z-50">
      <p className='text-[#00B58C] text-2xl font-dancing italic'>&lt;/&gt; Elias Ribeiro</p>
      
      <nav className='flex justify-center'>
        <ul className='[&>li]:text-[#00B58C] [&>li]:cursor-pointer [&>li]:text-2xl [&>li]:hover:text-[#CBCCD1] [&>li]:transition [&>li]:duration-[500ms] flex justify-center gap-10'>
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#projects">{t('nav.projects')}</a></li>
          <li><a href="#skills">{t('nav.skills')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
        </ul>
      </nav>

      <div className='flex gap-5 relative'>
        <div className='relative'>
          <FaGlobe size={30} className='cursor-pointer text-[#00B58C] hover:text-[#CBCCD1] transition duration-[500ms]' onClick={toggleMenu} />
          {open && (
            <div className='absolute right-0 mt-2 w-40  border border-[#00B58C] shadow-lg z-50'>
              <button
                  onClick={() => choose('pt')}
                  className={`block w-full text-left px-4 py-2 text-[#CBCCD1]
                              bg-[#1d1f24] hover:bg-[#2E3138]
                              transition duration-[500ms] cursor-pointer
                              ${lang === 'pt' ? 'ring-1 ring-[#00B58C]' : ''}`}
                >
                  Português
                </button>

                <button
                  onClick={() => choose('en')}
                  className={`block w-full text-left px-4 py-2 text-[#CBCCD1]
                              bg-[#1d1f24] hover:bg-[#2E3138]
                              transition duration-[500ms] cursor-pointer
                              ${lang === 'en' ? 'ring-1 ring-[#00B58C]' : ''}`}
                >
                  English
              </button>
            </div>
          )}
        </div>
        <FiSun size={30} className='cursor-pointer text-[#00B58C] hover:text-[#CBCCD1] transition duration-[500ms]'/>
        <FiMoon size={30} className='cursor-pointer text-[#00B58C] hover:text-[#CBCCD1] transition duration-[500ms]'/>
      </div>
    </header>
  );
}
// #2E3138