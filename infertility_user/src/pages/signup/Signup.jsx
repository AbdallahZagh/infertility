import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Form from './components/Form'

const Signup = () => {
    const { i18n } = useTranslation();
//   const [selectedDate, setSelectedDate] = useState('');
//   const [gender, setGender] = useState('')
//   const [country, setCountry] = useState('')

const [formData, setFormData] = useState({
    email: '',
    password: '',
    gender: '',
    birthDate: '',
    phone: '',
    country: ''
  });


    console.log(formData)


return (
  <div className='h-screen flex items-center flex-col bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
    <Header/>
    <Form formData={formData} setFormData={setFormData} 
    // selectedDate={selectedDate} setSelectedDate={setSelectedDate} gender={gender} setGender={setGender} country={country} setCountry={setCountry}
    />
    <div className='absolute bottom-0 left-3'>
      <LanguageSwitcher/>
    </div>
  </div>
  )
}

export default Signup