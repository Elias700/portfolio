import { FaGlobe } from 'react-icons/fa';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext.tsx';

export default function Header() {
  const { t, setLang, lang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? (stored as 'dark' | 'light') : 'dark';
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setOpen((v) => !v);
  const toggleMobile = () => setMobileOpen((v) => !v);
  const choose = (code: 'pt' | 'en') => {
    setLang(code);
    setOpen(false);
  };
  return (
    <header className="px-6 md:px-10 py-4 flex items-center justify-between fixed top-0 left-0 right-0 w-full z-50" style={{ backgroundColor: 'var(--header-bg)', height: '10vh'}}>
      <p className='text-[#00B58C] text-xl md:text-2xl font-dancing italic'>&lt;Dev Elias/&gt;</p>

      <nav className='hidden md:flex justify-center'>
        <ul 
            className='flex justify-center gap-8 lg:gap-10 
            [&>li]:relative 
            [&>li]:text-[#00B58C] 
            [&>li]:cursor-pointer 
            [&>li]:text-xl lg:[&>li]:text-2xl 
            [&>li]:transition-all 
            [&>li]:duration-500 
            [&>li]:hover:text-[#CBCCD1] 
            [&>li]:after:content-[""] 
            [&>li]:after:absolute 
            [&>li]:after:left-0 
            [&>li]:after:-bottom-1 
            [&>li]:after:h-[2px] 
            [&>li]:after:w-0 
            [&>li]:after:bg-[#CBCCD1] 
            [&>li]:hover:after:w-full 
            [&>li]:after:transition-all 
            [&>li]:after:duration-500'
          >
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
            <li><a href="#skills">{t('nav.skills')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
      </nav>

      <div className="relative flex items-center gap-4 md:gap-5">
        <div className="relative">
          <FaGlobe
            size={24}
            className="text-[#00B58C] cursor-pointer transition duration-500 hover:text-[#CBCCD1]"
            onClick={toggleMenu}
          />

          {open && (
            <div className="absolute right-0 z-50 w-40 mt-2 border border-[#00B58C] shadow-lg">
              <button
                onClick={() => choose('pt')}
                className={`block w-full px-4 py-2 text-left text-[#CBCCD1] bg-[#1d1f24] transition duration-500 hover:bg-[#2E3138] cursor-pointer ${
                  lang === 'pt' ? 'ring-1 ring-[#00B58C]' : ''
                }`}
              >
                Português
              </button>

              <button
                onClick={() => choose('en')}
                className={`block w-full px-4 py-2 text-left text-[#CBCCD1] bg-[#1d1f24] transition duration-500 hover:bg-[#2E3138] cursor-pointer ${
                  lang === 'en' ? 'ring-1 ring-[#00B58C]' : ''
                }`}
              >
                English
              </button>
            </div>
          )}
        </div>

        <FiSun
          size={24}
          title="Light"
          onClick={() => setTheme('light')}
          className={`text-[#00B58C] cursor-pointer transition duration-500 hover:text-[#CBCCD1] ${
            theme === 'light' ? 'ring-1 ring-[#00B58C] rounded-full' : ''
          }`}
        />

        <FiMoon
          size={24}
          title="Dark"
          onClick={() => setTheme('dark')}
          className={`text-[#00B58C] cursor-pointer transition duration-500 hover:text-[#CBCCD1] ${
            theme === 'dark' ? 'ring-1 ring-[#00B58C] rounded-full' : ''
          }`}
        />

        {/* Botão Hamburger - visível em mobile/tablet */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-[#00B58C] hover:text-[#CBCCD1] transition duration-500"
          onClick={toggleMobile}
        >
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Menu Mobile/Tablet (overlay) */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 z-40" >
          <ul className="flex flex-col gap-2 p-4">
            <li className='py-2'><a onClick={() => setMobileOpen(false)} className='block text-[#00B58C] text-lg' href="#home">{t('nav.home')}</a></li>
            <li className='py-2'><a onClick={() => setMobileOpen(false)} className='block text-[#00B58C] text-lg' href="#about">{t('nav.about')}</a></li>
            <li className='py-2'><a onClick={() => setMobileOpen(false)} className='block text-[#00B58C] text-lg' href="#projects">{t('nav.projects')}</a></li>
            <li className='py-2'><a onClick={() => setMobileOpen(false)} className='block text-[#00B58C] text-lg' href="#skills">{t('nav.skills')}</a></li>
            <li className='py-2'><a onClick={() => setMobileOpen(false)} className='block text-[#00B58C] text-lg' href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
