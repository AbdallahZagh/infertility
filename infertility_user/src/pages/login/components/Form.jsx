import React from 'react'
import Input from '../../../components/Input'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Form = ({handleLogin, handleChange}) => {

          const { t, i18n } = useTranslation();

  return (
    <div className='w-[100%] h-[100%] -mt-12 flex justify-center items-center relative'>
        <div className='w-80 h-[85%] bg-clip-content border-2 border-[#F7A9A0] rounded-xl z-10 absolute top-1.5 left-[410px] p-4'></div>
        <div className='w-80 h-[40%] bg-clip-content border-2 border-[#88E5E5] rounded-xl z-10 absolute bottom-11 right-[410px] p-4'></div>
    <div className='w-[45%] h-[85%] -mt-10 rounded-xl bg-white z-20 shadow flex justify-evenly items-center flex-col'>
        <div className='w-[85%] text-center'>
        <h1 className='text-3xl font-medium'>{t('login')}</h1>
        <p className='font-thin'>{t('login1')}</p>
        </div>
        <form onSubmit={handleLogin} className='w-[85%] h-[70%] flex justify-between items-center flex-col'>
            <Input label={t('email')} name={'email'} type={'email'} onChange={handleChange}/>
            <Input label={t('password')} name={'password'} type={'password'} onChange={handleChange}/>
            <div className='w-[85%] h-24 flex justify-center items-center flex-col relative'>
            <button type='submit' className='w-[80%] h-12 bg-gradient-to-b from-[#E45E47] to-[#EB996E] text-white text-lg rounded-lg drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:from-[#EB996E] hover:to-[#E45E47] transition-colors ease-in-out duration-300'>{t('login')}</button>
            <div className={`w-[80%] flex justify-between ${i18n.language == 'en' ?  'flex-row-reverse' : ''}`}>
            <Link to='/forget-password' className='font-thin hover:text-gray-700 transition-colors ease-in-out duration-150'>{t("forgot-password")}</Link>
            <p>{t('signup1')}<Link to='/signup' className='text-[#EB996E] hover:text-[#E45E47] transition-colors ease-in-out duration-100'>{t('signup')}</Link></p>
            </div>
        </div>
        </form>
        
    </div>
    </div>

  )
}

export default Form