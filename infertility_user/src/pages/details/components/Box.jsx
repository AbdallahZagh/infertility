import React from 'react'
import aboutImg from '../../../assets/about.png'
import { useTranslation } from 'react-i18next';

const Box = () => {

              const { i18n,t } = useTranslation();

            const steps = [{
      step_ar: "6 حبات من خصيات الخروف مشوية قليلاً",
      step_en: "6 grilled lamb testicles (lightly cooked)"
    },
    {
      step_ar: "تناول مرقة عظام مرتين أسبوعياً",
      step_en: "Consume bone broth twice weekly"
    },
    {
      step_ar: "تناول 200 غرام كبدة",
      step_en: "Eat 200g of liver"
    }]
    
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center'>
        <div className='w-[98%] h-[95%] bg-[#87B7FF] rounded-2xl flex justify-evenly items-center relative'>
            <div className='w-[65%] h-[100%] text-white flex justify-center items-center flex-col'>
                 <div className="w-[90%] flex flex-col justify-center">
        {steps.map((step, index) => (
            <div className='flex justify-start items-start gap-5'>
          <div key={index} className="flex items-center justify-center flex-col">
            <div className="text-white text-lg font-bold border-2 border-white rounded-full w-8 h-8 flex items-center justify-center">
              {index + 1}
            </div>
          {index === (steps.length - 1) ? '' : <div className='w-0.5 h-7 bg-white'></div>}
          </div>
            <div className="text-right text-lg">
              {i18n.language === "ar" ? step.step_ar : step.step_en}
            </div>
          </div>
        ))}
      </div>
            </div>
            <img src={aboutImg} className=''/>
        </div>
    </div>
  )
}

export default Box