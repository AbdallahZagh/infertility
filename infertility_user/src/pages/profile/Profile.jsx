import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Form from './components/Form'

/* =====================================================================
   API INTEGRATION (commented for demo)
   ---------------------------------------------------------------------
   This page is demoing with mock JSON data so it runs offline.

   // import { fetchData, postData, updateData, deleteData } from '../../api/crudServices';
   // Example:
   // useEffect(() => {
   //   const load = async () => {
   //     try {
   //       const res = await fetchData('/api/endpoint');
   //       const res = await postData('/api/endpoint');
   //       setState(res);
   //     } catch (e) { console.error(e); }
   //   };
   //   load();
   // }, []);

   ===================================================================== */

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