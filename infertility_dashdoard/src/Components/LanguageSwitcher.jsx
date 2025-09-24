import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        onLanguageChange(lng);
    }

    console.log(i18n.language)
  return (
    <div className={`mb-4 flex gap-4 ${i18n.language == 'en' ?  'flex-row-reverse' : ''}`}>
      <button
        onClick={() => changeLanguage('en')}
        className={
          i18n.language === 'en'
            ? 'bg-blue-500 text-white px-4 py-2 rounded mr-2'
            : 'bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-300'
        }
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={
          i18n.language === 'ar'
            ? 'bg-blue-500 text-white px-4 py-2 rounded'
            : 'bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300'
        }
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;