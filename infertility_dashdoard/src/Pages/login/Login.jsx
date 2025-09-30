import React, { useState } from 'react'

import Form from './components/Form'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../Components/LanguageSwitcher';
import Header from './components/Header';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {

            const { t, i18n } = useTranslation();

              const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  

      console.log(i18n.language)
          console.log('pp')

  

  return (
    <div className='h-screen flex items-center flex-col bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
      <Header/>
      <Form/>
      <div className='absolute bottom-0 left-3'> 
        <LanguageSwitcher language={i18n.language} onLanguageChange={changeLanguage} />
      </div>
    </div>
  )
}

export default Login