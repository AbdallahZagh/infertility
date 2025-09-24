import React from 'react'

import Form from './components/Form'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../Components/LanguageSwitcher';
import Header from './components/Header';

const Login = () => {

      const { i18n } = useTranslation();

      console.log(i18n.language)
  

  return (
    <div className='h-screen flex items-center flex-col bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
      <Header/>
      <Form/>
      <div className='absolute bottom-0 left-3'>
        <LanguageSwitcher/>
      </div>
    </div>
  )
}

export default Login