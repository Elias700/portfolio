import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { translations } from './translations.ts';
import type { Lang, TranslationDict } from './translations.ts';

export type LanguageContextType = {
  lang: Lang;
  t: (key: keyof TranslationDict) => string;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang');
    return (stored === 'en' || stored === 'pt') ? (stored as Lang) : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = useMemo(() => {
    const table = translations[lang];
    return (key: keyof TranslationDict) => table[key] ?? String(key);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation deve ser usado dentro de LanguageProvider');
  return ctx;
}
