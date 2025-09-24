import React from 'react'
import headerImg1 from '../assets/authHead1.png'
import headerImg2 from '../assets/authHead2.png'
import { useTranslation } from 'react-i18next';

const Header = () => {

      const { t, i18n } = useTranslation();
  
  return (
    <div className='w-[100%] flex justify-center items-center relative'>
      <div className='w-24 h-24 bg-[#F7A9A0] rounded-2xl absolute top-2 left-2 z-0'></div>
      <div className='w-24 h-24 bg-[#FFC727] rounded-2xl absolute -bottom-2 right-2 z-0'></div>
    <div className={`w-[98%] h-72 mt-4 rounded-2xl bg-[#44AEC3] text-white flex justify-evenly items-center ${i18n.language == 'en' ?  'flex-row' : 'flex-row-reverse'} z-10 overflow-hidden`}>
      <img src={headerImg2} className='h-[100%] w-[20%]'/>
      <div className='w-[60%] flex justify-center items-center flex-col gap-5'>
        <h2 className='text-3xl font-bold '>{t('header')}</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Cras consectetur eu integer vulputate feugiat rhoncus sed. Ornare egestas cras sollicitudin ante metus dignissim nisl posuere.</p>
      </div>
      <img src={headerImg1} className='h-[100%] w-[20%]'/>
    </div>
    </div>
  )
}

export default Header