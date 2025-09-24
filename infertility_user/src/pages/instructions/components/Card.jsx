import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Card = ({guide}) => {

      const { i18n, t } = useTranslation();
    
  return (
    <div className='w-[78%] h-52 rounded-2xl bg-[#87B7FF] relative overflow-hidden flex justify-evenly items-center'>
            <div className={`w-[231px] h-[214px] rounded-4xl  bg-[#ffffff23] absolute ${i18n.language == 'en' ? 'top-0 -right-20 -rotate-[28deg]' : 'top-0 -left-20 rotate-[28deg]'}`}></div>
            <div className='w-[45%] h-[90%] flex justify-evenly items-start flex-col'>
                <h1 className='text-xl font-bold text-white'>{i18n.language =='en' ? guide.title_en : guide.title_ar}</h1>
            <Link to={`/guideness/:${guide.link}`} className='py-2 px-7 rounded-lg text-[#363636CC] bg-white hover:bg-[#ffffffaf] cursor-pointer text-lg font-medium'>{t("more")}</Link>
            </div>
            <img src={guide.image} className='w-[45%] h-[90%] z-50'/>
        </div>
  )
}

export default Card