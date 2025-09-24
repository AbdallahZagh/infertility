import React, { useState } from 'react'
import Input from '../../../components/Input'
import { Link } from 'react-router-dom'
import { useSSR, useTranslation } from 'react-i18next';
import Select from '../../../components/Select';
import DateInput from '../../../components/DateInput';
import CountrySelect from '../../../components/CountrySelect';

const Form = (
    // {selectedDate, setSelectedDate, gender, setGender, country, setCountry}
    { formData, setFormData }
) => {
          const { t, i18n } = useTranslation();
          const genders = [
          {
            en: 'Male',
            ar: 'ذكر'
          },
          {
            en: 'female',
            ar: 'أنثى'
          }
        ]

        const [edit, setEdit] = useState(false)

        console.log(formData)

  return (
    <div className='w-[100%] h-[100%] -mt-12 flex justify-center items-center relative'>
        <div className='w-80 h-[85%] bg-clip-content border-2 border-[#F7A9A0] rounded-xl z-10 absolute top-6 left-[9.5%] p-4'></div>
        <div className='w-80 h-[40%] bg-clip-content border-2 border-[#88E5E5] rounded-xl z-10 absolute bottom-9 right-[9.5%] p-4'></div>
    <div className='w-[80%] h-[85%] -mt-3 rounded-xl bg-white z-20 shadow flex justify-evenly items-center flex-col'>
        <div className='w-[85%] relative'>
        {/* <p className='font-medium text-lg'>{t('login1')}</p> */}
        {edit ? 
        <div className={`absolute ${i18n.language == 'ar' ? '-right-14' : '-left-14'} -top-5 flex justify-start items-center gap-3`}>
        <button className={` bg-[#44AEC3] rounded-lg text-white text-lg px-10 py-2 drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:bg-[#44aec3d1] transition-colors ease-in-out duration-300`}>{t("edit")}</button>
        <button className={` bg-gradient-to-b from-[#E45E47] to-[#EB996E] rounded-lg text-white text-lg px-10 py-2 drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:from-[#EB996E] hover:to-[#E45E47] transition-colors ease-in-out duration-300`} onClick={()=> setEdit(false)}>{t("cancel")}</button>
        </div>
        : 
        <button className={`absolute ${i18n.language == 'ar' ? '-right-14' : '-left-14'} -top-5 bg-gradient-to-b from-[#E45E47] to-[#EB996E] rounded-lg text-white text-lg px-10 py-2 drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:from-[#EB996E] hover:to-[#E45E47] transition-colors ease-in-out duration-300`} onClick={()=> setEdit(true)}>{t("edit")}</button>
        }
        </div>
        <form className='w-[100%] h-40 grid grid-cols-3 grid-rows-2'>
            <Input label={t('email')} name={'email'} type={'email'} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} edit={edit}/>
            <Input label={t('name')} name={'name'} type={'text'} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} edit={edit}/>
            <Select label={t('gender')} data={genders} selected={formData.gender} setSelected={(val) => setFormData({ ...formData, gender: val })} edit={edit}/>
            <DateInput label={t('birthDate')} selectedDate={formData.birthDate} onDateSelect={(val) => setFormData({ ...formData, birthDate: val })} edit={edit}/>
            <Input label={t('phoneNum')} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} edit={edit}/>
            <CountrySelect label={t('country')} selected={formData.country} setSelected={(val) => setFormData({ ...formData, country: val })} edit={edit}/>
        </form>
        {/* <div className='w-[85%] h-24 flex justify-center items-center flex-col relative'>
            <button className='w-[50%] h-12 bg-gradient-to-b from-[#E45E47] to-[#EB996E] text-white text-lg rounded-lg drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:from-[#EB996E] hover:to-[#E45E47] transition-colors ease-in-out duration-300'>{t('signup')}</button>
            <div className={`w-[80%] flex justify-center ${i18n.language == 'en' ?  'flex-row-reverse' : ''}`}>
            <p>{t('login2')}<Link to='/' className='text-[#EB996E] hover:text-[#E45E47] transition-colors ease-in-out duration-100'>{t('login')}</Link></p>
            </div>
        </div> */}
    </div>
    </div>

  )
}

export default Form