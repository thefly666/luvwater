import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
      className="fixed top-4 right-4 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm transition-colors"
    >
      {language === 'en' ? 'Tiếng Việt' : 'English'}
    </button>
  );
};