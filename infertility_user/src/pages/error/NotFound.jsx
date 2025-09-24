import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import NotFound from './NotFound';
import LanguageSwitcher from '../../components/LanguageSwitcher';

function NotFound() { 
    const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
      <LanguageSwitcher language={i18n.language} onLanguageChange={changeLanguage} />
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">{t('notFound')}</p>
        <p className="text-gray-500 mt-2">
          {t('pageNotFoundText')}
        </p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">
          {t('goHome')}
        </a>
      </div>
    </div>
  );
}

export default NotFound;