import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Toaster, toast } from 'react-hot-toast'; // Imported for toasts
import Header from '../../components/Header';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Form from './components/Form'


const Signup = () => {
    const { i18n, t } = useTranslation();
//   const [selectedDate, setSelectedDate] = useState('');
//   const [gender, setGender] = useState('')
//   const [country, setCountry] = useState('')

const [formData, setFormData] = useState({
    email: '',
    password: '',
    gender: '',
    birthDate: '',
    phone: '',
    country: { value: '', flag: '' }
  });


     const handleSignup = (e) => { 
        e.preventDefault();
  console.log(formData,'aa')
  const currentCountryValue = formData.country?.value; 

        toast.dismiss(); // Reset toasts
        // --- Client-Side Validation ---

        if (!formData.email || !formData.password || !formData.gender || !formData.birthDate || !formData.phone || !currentCountryValue) {
            toast.error(t('all-fields-required') || 'All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error(t('invalid-email') || 'Please enter a valid email address.');
            return;
        }

        if (formData.password.length < 8) {
            toast.error(t('password-length') || 'Password must be at least 8 characters long.');
            return;
        }

        // Basic phone number validation (simple check for digits)
        const phoneRegex = /^\+?(\d[\s-]?){8,15}\d$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error(t('invalid-phone') || 'Please enter a valid phone number (min 10 digits).');
            return;
        }

        console.log('Validation successful! Attempting signup with:', formData);

        // --- API Integration Placeholder (Currently Bypassed) ---

        /*
        // UNCOMMENT THIS BLOCK AND CHANGE handleSignup TO `async (e)` WHEN READY TO USE API
        
        // try {
        //     const response = await fetch('/api/signup', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             email: formData.email,
        //             password: formData.password,
        //             gender: formData.gender,
        //             birthDate: formData.birthDate,
        //             phone: formData.phone,
        //             country: currentCountryValue
        //         })
        //     });
        //
        //     if (!response.ok) {
        //         const errorData = await response.json();
        //         toast.error(errorData.message || t('signup-failed'));
        //         return;
        //     }
        //
        //     // Handle successful signup
        //     const data = await response.json();
        //     console.log('Signup successful!', data);
        //     toast.success(t('signup-success') || 'Account created successfully!');
        //
        // } catch (error) {
        //     console.error('Signup error:', error);
        //     toast.error(t('network-error') || 'A network error occurred. Please try again.');
        // } finally {
        //     // setLoading(false);
        // }
        */

        // If no API call is made (current state), show success toast after validation
        toast.success(t('signup-success') || 'Account created successfully!');
        
        // Optionally clear form state after success (for non-API scenario)
    };
 

    console.log(formData)


return (
  <div className='h-screen flex items-center flex-col bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
    <Header/>
    <Form formData={formData} setFormData={setFormData}  handleSignup={handleSignup}
    />
    <div className='absolute bottom-0 left-3'>
      <LanguageSwitcher/>
      <Toaster position='top-center'/>
    </div>
  </div>
  )
}

export default Signup