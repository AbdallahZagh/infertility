import React, { useState } from 'react'
import Header from '../../components/Header'
import Form from './components/Form'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { Toaster, toast } from 'react-hot-toast';

/* =====================================================================
   API INTEGRATION (commented for demo)
   ---------------------------------------------------------------------
   This page is demoing with mock JSON data so it runs offline.

   // import { fetchData, postData, updateData, deleteData } from '../../api/crudServices';
   // Example:
   // useEffect(() => {
   //   const load = async () => {
   //     try {
   //       const res = await postData('/api/endpoint');
   //       setState(res);
   //     } catch (e) { console.error(e); }
   //   };
   //   load();
   // }, []);

   ===================================================================== */


const Login = () => {

      const { i18n, t } = useTranslation();

      console.log(i18n.language)
   
      const [formData, setFormData] = useState({
    email: '', 
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
  console.log(formData)


    // Reset toasts
    toast.dismiss();

    if (!formData.email) {
      toast.error(t('email-required'));
      return;
    }

    if (!formData.password) {
      toast.error(t('password-required'));
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t('invalid-email'));
      return;
    }

    if (formData.password.length < 8) {
      toast.error(t('password-length'));
      return;
    }

    // If all checks pass, show success toast
    toast.success(t('success'));
    // console.log('Login successful!', { formData.email, formData.password });
    // In a real app, you would now make an API call
  };

  return (
    <div className='h-screen flex items-center flex-col bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
      <Header/>
      <Form handleLogin={handleLogin} handleChange={handleChange}/>
      <div className='absolute bottom-0 left-3'>
        <LanguageSwitcher/>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default Login