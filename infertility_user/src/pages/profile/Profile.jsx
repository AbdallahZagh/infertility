import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Form from './components/Form'

const Profile = () => {
      const { i18n } = useTranslation();

      const [formData, setFormData] = useState({
          email: 'aa',
          name: 'ss',
          gender: 'male',
          birthDate: '2-10-2025',
          phone: '0932200022',
          country: {
            label: 'Afghanistan',
            value: 'Afghanistan',
            flag: 'https://flagcdn.com/w40/af.png'
          }
        });

  return (
    <div className='h-screen flex justify-between items-center bg-[#F5F5F5] relative  overflow-hidden' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
         <div className='w-[82%] h-screen flex items-center flex-col bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
       <Header/>
    <Form 
    formData={formData} setFormData={setFormData} 
    // selectedDate={selectedDate} setSelectedDate={setSelectedDate} gender={gender} setGender={setGender} country={country} setCountry={setCountry}
    />
    </div>
    </div>
  )
}

export default Profile