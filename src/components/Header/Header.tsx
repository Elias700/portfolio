import { FaGlobe } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext.tsx';

export default function Header() {
  const { t, setLang, lang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? (stored as 'dark' | 'light') : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setOpen((v) => !v);
  const choose = (code: 'pt' | 'en') => {
    setLang(code);
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-10 py-4"
      style={{ backgroundColor: 'var(--header-bg)' }}
    >
      {/* Logo / Nome */}
      <p className="text-2xl italic font-dancing text-[#00B58C]">
        &lt;Dev Elias/&gt;
      </p>

      {/* Navegação */}
      <nav className="flex items-center justify-center bg-[#1C1E22] rounded-lg">
        <ul
          className="flex justify-center gap-10 h-full
                     [&>li]:flex [&>li]:items-center [&>li]:px-6 [&>li]:py-3
                     [&>li]:text-2xl [&>li]:text-[#00B58C] [&>li]:cursor-pointer
                     [&>li]:transition-all [&>li]:duration-500
                     [&>li]:hover:bg-[#2E3138] [&>li]:hover:text-[#CBCCD1]"
        >
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#projects">{t('nav.projects')}</a></li>
          <li><a href="#skills">{t('nav.skills')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
        </ul>
      </nav>

      {/* Ícones */}
      <div className="relative flex items-center gap-5">
        <div className="relative">
          <FaGlobe
            size={28}
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
          size={28}
          title="Light"
          onClick={() => setTheme('light')}
          className={`text-[#00B58C] cursor-pointer transition duration-500 hover:text-[#CBCCD1] ${
            theme === 'light' ? 'ring-1 ring-[#00B58C] rounded-full' : ''
          }`}
        />

        <FiMoon
          size={28}
          title="Dark"
          onClick={() => setTheme('dark')}
          className={`text-[#00B58C] cursor-pointer transition duration-500 hover:text-[#CBCCD1] ${
            theme === 'dark' ? 'ring-1 ring-[#00B58C] rounded-full' : ''
          }`}
        />
      </div>
    </header>
  );
}
