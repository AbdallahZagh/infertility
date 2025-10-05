import React from 'react'
import { useTranslation } from 'react-i18next';

const Input = ({ label, name, type, value, onChange, edit = true }) => {

      const { i18n } = useTranslation();
    
  return (
    <div className='w-[100%] h-16 flex justify-center items-center relative z-10'>
        <label htmlFor={name} className={`absolute -top-2 ${i18n.language == 'en' ? 'left-10' : 'right-10'} px-1 bg-white text-[#363636CC]`}>{label}</label>
        <input type={type} name={name} value={value} id={name} onChange={onChange} disabled={!edit} className='w-[90%] h-12 border-2 border-[#18A2D6] rounded-lg p-2 outline-none'/>
    </div> 
  )
}

export default Input 