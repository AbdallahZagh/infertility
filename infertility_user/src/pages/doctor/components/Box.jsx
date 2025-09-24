import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import docImg from '../../../assets/doctor.png'

const Box = () => {

                  const { i18n,t } = useTranslation();
    
  return (
    <div className='w-[100%] h-[56%] flex justify-center items-center relative mt-2'>
        <div className='w-[25%] h-[95%] bg-[#E4897B] rounded-2xl absolute top-0 left-60'></div>
        <div className='w-[25%] h-[95%] bg-[#EBB376] rounded-2xl absolute bottom-0 right-60'></div>
            <div className='w-[60%] h-[95%] bg-white drop-shadow-md drop-shadow-[#00000055] rounded-2xl flex justify-evenly items-center relative z-20'>
                <div className='w-[35%] h-[90%] flex justify-center items-center flex-col gap-7 relative'>
                    <div className='w-32 h-32 rounded-2xl border-[3px] border-[#88E5E5] absolute left-12 top-14'></div>
                    <img src={docImg} className='w-36 h-36 rounded-xl z-20'/> 
                    <h2 className='text-xl'>Doctor Name</h2>
                </div>
                <div className='h-[80%] border rounded-full'></div>
                <div className='w-[60%] h-[90%] flex justify-center items-center flex-col gap-5'>
                    <h1 className='text-2xl'>{t("aboutDoc")}</h1>
                    <p className='w-[90%] h-[40%] text-center'>Lorem ipsum dolor sit amet consectetur. Vel bibendum est nisi sollicitudin euismod condimentum suspendisse. Duis mi nibh dictum vivamus vitae mi pulvinar ornare.</p>
                    <div className='w-[80%] border rounded-full'></div>
                    <div className='w-[50%] flex justify-between items-center text-[#44AEC3] text-3xl'>
                        <BsTwitterX/>
                        <BsInstagram/>
                        <BsFacebook/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Box