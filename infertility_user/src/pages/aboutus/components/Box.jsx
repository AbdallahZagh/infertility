import React from 'react'
import aboutImg from '../../../assets/about.png'
import { useTranslation } from 'react-i18next';

const Box = () => {

              const { i18n,t } = useTranslation();
    
  return (
    <div className='w-[100%] h-[75%] flex justify-center items-center'>
        <div className='w-[98%] h-[95%] bg-[#87B7FF] rounded-2xl flex justify-evenly items-center relative'>
            <div className={`w-8 h-fit flex justify-center items-center flex-col absolute top-0 ${i18n.language == 'en' ? 'left-[12%]' : 'right-[12%]'}`}>
                <div className='border h-8 border-[#ffffff5c]'></div>
                <div className='w-4 h-4 rounded-full bg-[#ffffff5c]'></div>
            </div>

            <div className={`w-8 h-fit flex justify-center items-center flex-col absolute top-0 ${i18n.language == 'en' ? 'left-[10%]' : 'right-[10%]'}`}>
                <div className='border h-7 border-[#ffffff5c]'></div>
                <div className='w-4 h-4 rounded-full bg-[#ffffff5c]'></div>
            </div>

            <div className={`w-8 h-fit flex justify-center items-center flex-col absolute top-0 ${i18n.language == 'en' ? 'left-[8%]' : 'right-[8%]'}`}>
                <div className='border h-6 border-[#ffffff5c]'></div>
                <div className='w-4 h-4 rounded-full bg-[#ffffff5c]'></div>
            </div>

            <div className='w-[65%] h-[75%]  text-white flex justify-center items-center flex-col gap-10'>
                <h1 className='text-4xl font-bold'>{t("aboutUs")}</h1>
                <p className='w-[75%] text-center text-2xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur. Cras consectetur eu integer vulputate feugiat rhoncus sed. Ornare egestas cras sollicitudin ante metus dignissim nisl posuere.</p>
            </div>
            <img src={aboutImg} className=''/>
        </div>
    </div>
  )
}

export default Box