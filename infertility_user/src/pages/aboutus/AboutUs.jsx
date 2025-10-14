import React from 'react'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import { useTranslation } from 'react-i18next';
import Box from './components/Box';

/* =====================================================================
   API INTEGRATION (commented for demo)
   ---------------------------------------------------------------------
   This page is demoing with mock JSON data so it runs offline.

   // import { fetchData, postData, updateData, deleteData } from '../../api/crudServices';
   // Example:
   // useEffect(() => {
   //   const load = async () => {
   //     try {
   //       const res = await fetchData('/api/endpoint');
   //       setState(res);
   //     } catch (e) { console.error(e); }
   //   };
   //   load();
   // }, []);

   ===================================================================== */

const AboutUs = () => {

          const { i18n } = useTranslation();
    

  return (
    <div className='h-screen flex justify-between items-center bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
         <div className='w-[82%] h-screen bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
       <Header/>
       <Box/>
    </div>
    </div>
  )
}

export default AboutUs