import { useEffect, useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from '../../i18n/LanguageContext.tsx';
import Logo from '../../assets/logo-elias-removebg-preview.png';

export default function Header() {
  const { t, setLang, lang } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? (stored as 'dark' | 'light') : 'dark';
  });
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setOpen((v) => !v);

  // Melhora a UX: fecha o menu de idioma ao abrir/fechar o mobile
  const toggleMobile = () => {
    setMobileOpen((v) => !v);
    setOpen(false);
  };

  const choose = (code: 'pt' | 'en') => {
    setLang(code);
    setOpen(false);
  };

  return (
    <header
      className={`px-6 md:px-10 py-4 flex items-center justify-between fixed top-0 left-0 right-0 w-full z-50 h-[var(--header-height)] 
   bg-[var(--header-bg)] transition-shadow duration-300 
   ${isScrolled ? 'shadow-[0_4px_15px_rgba(0,0,0,0.4)]' : ''}`}
    >
      <img
        src={Logo}
        alt="Logo"
        className='h-12 w-auto md:h-16 lg:h-20' />

      {/* Menu desktop */}
      <nav className='hidden md:flex'>
        <ul
          className='flex justify-center gap-8 lg:gap-10 
     [&>li]:relative 
     [&>li]:text-[var(--primary-500)] 
     [&>li]:cursor-pointer 
     [&>li]:text-xl lg:[&>li]:text-2xl 
     [&>li]:transition-all 
     [&>li]:duration-500 
     [&>li]:hover:text-[var(--text-muted)] 
     [&>li]:after:content-[""] 
     [&>li]:after:absolute 
     [&>li]:after:left-0 
     [&>li]:after:-bottom-1 
     [&>li]:after:h-[2px] 
     [&>li]:after:w-0 
     [&>li]:after:bg-[var(--text-muted)] 
     [&>li]:hover:after:w-full 
     [&>li]:after:transition-all 
     [&>li]:after:duration-500'
        >
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#projects">{t('nav.projects')}</a></li>
          <li><a href="#skills">{t('nav.skills')}</a></li>
          <li><a href="#certifications">{t('nav.certifications')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
        </ul>
      </nav>

      {/* Ícones e menu mobile */}
      <div className="relative flex items-center gap-4 md:gap-5">
        {/* Seleção de idioma */}
        <div className="relative">
          <FaGlobe
            size={24}
            className="text-[var(--primary-500)] cursor-pointer transition duration-500 hover:text-[var(--text-muted)]"
            onClick={toggleMenu}
          />

          {open && (
            <div className="absolute right-0 z-[60] w-40 mt-2 border border-[var(--primary-500)] shadow-lg bg-[var(--card-bg)]">
              <button
                onClick={() => choose('pt')}
                className={`
         block w-full px-4 py-2 text-left cursor-pointer transition duration-500 hover:opacity-90
         text-[var(--text-primary)]
         bg-[var(--card-bg)]
         hover:bg-[var(--hover-bg)] 
         ${lang === 'pt' ? 'bg-[var(--hover-bg)]' : ''}
        `}
              >
                Português
              </button>

              <button
                onClick={() => choose('en')}
                className={`
         block w-full px-4 py-2 text-left cursor-pointer transition duration-500 hover:opacity-90
         text-[var(--text-primary)]
         bg-[var(--card-bg)]
         hover:bg-[var(--hover-bg)] 
         ${lang === 'en' ? 'bg-[var(--hover-bg)]' : ''}
        `}
              >
                English
              </button>
            </div>
          )}
        </div>

        {/* Botões de tema */}
        <FiSun
          size={24}
          title="Light"
          onClick={() => setTheme('light')}
          className={`text-[var(--primary-500)] cursor-pointer transition duration-500 hover:text-[var(--text-muted)] ${theme === 'light' ? 'ring-1 ring-[var(--primary-500)] rounded-full' : ''
            }`}
        />
        <FiMoon
          size={24}
          title="Dark"
          onClick={() => setTheme('dark')}
          className={`text-[var(--primary-500)] cursor-pointer transition duration-500 hover:text-[var(--text-muted)] ${theme === 'dark' ? 'ring-1 ring-[var(--primary-500)] rounded-full' : ''
            }`}
        />

        {/* Menu hambúrguer */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-[var(--primary-500)] hover:text-[var(--text-muted)] transition duration-500"
          onClick={toggleMobile}
        >
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
  <div className="md:hidden fixed top-[var(--header-height)] left-0 right-0 z-[9999] bg-[var(--card-bg)] border-t border-[var(--primary-500)] shadow-xl">
    <ul className="flex flex-col gap-2 p-4">
      <li className='py-2'>
        <a onClick={() => setMobileOpen(false)} className='block text-[var(--primary-500)] text-lg' href="#home">{t('nav.home')}</a>
      </li>
      <li className='py-2'>
        <a onClick={() => setMobileOpen(false)} className='block text-[var(--primary-500)] text-lg' href="#about">{t('nav.about')}</a>
      </li>
      <li className='py-2'>
        <a onClick={() => setMobileOpen(false)} className='block text-[var(--primary-500)] text-lg' href="#projects">{t('nav.projects')}</a>
      </li>
      <li className='py-2'>
        <a onClick={() => setMobileOpen(false)} className='block text-[var(--primary-500)] text-lg' href="#skills">{t('nav.skills')}</a>
      </li>
      <li className='py-2'>
        <a onClick={() => setMobileOpen(false)} className='block text-[var(--primary-500)] text-lg' href="#certifications">{t('nav.certifications')}</a>
      </li>
      <li className='py-2'>
        <a onClick={() => setMobileOpen(false)} className='block text-[var(--primary-500)] text-lg' href="#contact">{t('nav.contact')}</a>
      </li>
    </ul>
  </div>
)}

    </header>
  );
}
