import React from 'react'
import { useTranslation } from 'react-i18next';
import Box from './components/Box';
import SideBar from '../../components/SideBar';

const Details = () => {

              const { i18n } = useTranslation();
    
  return (
    <div className='h-screen flex justify-between items-center bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
         <div className='w-[82%] h-screen bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
       <Box/>
    </div>
    </div>
  )
}

export default Details