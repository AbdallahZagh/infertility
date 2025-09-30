import React from 'react'
import Input from '../../../components/Input'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Select from '../../../components/Select';
import DateInput from '../../../components/DateInput';
import CountrySelect from '../../../components/CountrySelect';

const Form = (
    // {selectedDate, setSelectedDate, gender, setGender, country, setCountry}
    { formData, setFormData, handleSignup }
) => {
          const { t, i18n } = useTranslation();
          const genders = [{
            en: 'Male',
            ar: 'ذكر'
          },
          {
            en: 'female',
            ar: 'أنثى'
          }
        ]

  return (
    <div className='w-[100%] h-[100%] -mt-12 flex justify-center items-center relative'>
        <div className='w-80 h-[85%] bg-clip-content border-2 border-[#F7A9A0] rounded-xl z-10 absolute top-1.5 left-[222px] p-4'></div>
        <div className='w-80 h-[40%] bg-clip-content border-2 border-[#88E5E5] rounded-xl z-10 absolute bottom-11 right-[222px] p-4'></div>
    <div className='w-[70%] h-[85%] -mt-10 rounded-xl bg-white z-20 shadow flex justify-evenly items-center flex-col'>
        <div className='w-[85%] text-center'>
        <p className='font-medium text-lg'>{t('login1')}</p>
        </div>
        <form onSubmit={handleSignup} className='w-[100%] h-[70%] grid grid-cols-3'>
            <Input label={t('email')} name={'email'} type={'email'} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            <Input label={t('password')} name={'password'} type={'password'} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
            <Select label={t('gender')} data={genders} selected={formData.gender} setSelected={(val) => setFormData({ ...formData, gender: val })}/>
            <DateInput label={t('birthDate')} selectedDate={formData.birthDate} onDateSelect={(val) => setFormData({ ...formData, birthDate: val })}/>
            <Input label={t('phoneNum')} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
            <CountrySelect label={t('country')} selected={formData.country} setSelected={(val) => setFormData({ ...formData, country: val })}/>
              <div className='w-[100%] h-24 flex justify-center items-center flex-col relative col-span-3'>
            <button type='submit' className='w-[50%] h-12 bg-gradient-to-b from-[#E45E47] to-[#EB996E] text-white text-lg rounded-lg drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:from-[#EB996E] hover:to-[#E45E47] transition-colors ease-in-out duration-300'>{t('signup')}</button>
            <div className={`w-[80%] flex justify-center ${i18n.language == 'en' ?  'flex-row-reverse' : ''}`}>
            <p>{t('login2')}<Link to='/' className='text-[#EB996E] hover:text-[#E45E47] transition-colors ease-in-out duration-100'>{t('login')}</Link></p>
            </div>
        </div>
        </form>
        
    </div>
    </div>

  )
}

export default Form