import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { IoExitOutline, IoFemale, IoGrid, IoMale, IoPeople } from 'react-icons/io5';

const SideBar = () => {
          const { t, i18n } = useTranslation();
    
  return (
    <div className={`w-64 h-screen top-0 fixed flex justify-evenly items-center flex-col border-l-2 border-gray-400 shadow-lg shadow-black ${i18n.language == 'en' ? 'rounded-tr-2xl rounded-br-2xl' : 'rounded-tl-2xl rounded-bl-2xl'}`}>
        <div className='w-[90%] h-[10%] flex justify-center items-center flex-col text-2xl'>
            <h1>Clinic Name</h1>
            <h2>Logo</h2>
        </div>
        <div className='w-[90%] h-[65%] flex justify-center items-center gap-5 flex-col'>
            <Link to={'/home'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-2'>
            <IoGrid size={25}/>
            <h2>{t('home')}</h2>
            </Link>
            <Link to={'/male'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-2'>
            <IoMale  size={25}/>
            <h2>{t('malePa')}</h2>
            </Link
            ><Link to={'/female'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-2'>
            <IoFemale size={25}/>
            <h2>{t('femalePa')}</h2>
            </Link>
            <Link to={'/new'} className='w-[100%] h-14 border-2 border-[#44AEC3] text-[#44AEC3] text-[16px] rounded-xl flex justify-start items-center gap-2 px-2'>
            <IoPeople size={28}/>
            <h2>{t('newPa')}</h2>
            </Link>
        </div>
        <div className='w-[90%] h-[20%] flex justify-evenly items-center flex-col'>
            <Link to={'/'} className='w-[100%] h-14  bg-gradient-to-b from-[#E45E47] to-[#EB996E] text-white text-lg drop-shadow-md drop-shadow-[#E87F5D40] cursor-pointer hover:from-[#EB996E] hover:to-[#E45E47] transition-colors ease-in-out duration-300 rounded-xl flex justify-start items-center gap-5 px-4'>
            <IoExitOutline  size={26}/>
            <h2>{t("logout")}</h2>
            </Link>
            <div>
        <LanguageSwitcher/>
      </div>
        </div>
    </div>
  )
}

export default SideBar