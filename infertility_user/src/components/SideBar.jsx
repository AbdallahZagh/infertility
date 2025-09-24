import React from 'react'
import { Link } from 'react-router-dom'
import { BsPersonFill, BsArrowBarRight  } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const SideBar = () => {
          const { t, i18n } = useTranslation();
    
  return (
    <div className={`w-64 h-screen top-0 fixed flex justify-evenly items-center flex-col border-l-2 border-gray-400 shadow-lg shadow-black ${i18n.language == 'en' ? 'rounded-tr-2xl rounded-br-2xl' : 'rounded-tl-2xl rounded-bl-2xl'}`}>
        <div className='w-[90%] h-[10%] flex justify-center items-center flex-col text-2xl'>
            <h1>Clinic Name</h1>
            <h2>Logo</h2>
        </div>
        <div className='w-[90%] h-[65%] flex justify-center items-center gap-5 flex-col'>
            <Link to={'/profile'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-1'>
            <BsPersonFill size={28}/>
            <h2>{t('profile')}</h2>
            </Link>
            <Link to={'/medicalData'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-1'>
            <BsPersonFill size={28}/>
            <h2>{t('medicalData')}</h2>
            </Link
            ><Link to={'/aboutus'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-1'>
            <BsPersonFill size={28}/>
            <h2>{t('aboutUs')}</h2>
            </Link>
            <Link to={'/doctor'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-1'>
            <BsPersonFill size={28}/>
            <h2>{t('doctor')}</h2>
            </Link>
            <Link to={'/guideness'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-1'>
            <BsPersonFill size={28}/>
            <h2>{t('inctructions')}</h2>
            </Link>
        </div>
        <div className='w-[90%] h-[20%] flex justify-evenly items-center flex-col'>
            <Link to={'/'} className='w-[100%] h-14  bg-gradient-to-b from-[#E45E47] to-[#EB996E] text-white text-lg drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:from-[#EB996E] hover:to-[#E45E47] transition-colors ease-in-out duration-300 rounded-xl flex justify-start items-center gap-5 px-4'>
            <BsArrowBarRight  size={28}/>
            <h2>{t("logout")}</h2>
            </Link>
            <div >
        <LanguageSwitcher/>
      </div>
        </div>
    </div>
  )
}

export default SideBar