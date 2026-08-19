import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import enTranslations from '../locales/en';
import kuTranslations from '../locales/ku';
import arTranslations from '../locales/ar';

type Language = 'en' | 'ku' | 'ar';
type Translations = typeof enTranslations;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  isRtl: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  en: enTranslations,
  ku: kuTranslations,
  ar: arTranslations,
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('ferkar-lang') as Language;
    return saved && ['en', 'ku', 'ar'].includes(saved) ? saved : 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('ferkar-lang', newLang);
  };

  const isRtl = lang === 'ku' || lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang], isRtl }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
