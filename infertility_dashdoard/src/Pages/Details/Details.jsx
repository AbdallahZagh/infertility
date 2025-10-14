import React, { useState } from 'react'
import Header from '../../Components/Header'
import SideBar from '../../Components/SideBar'
import { useTranslation } from 'react-i18next';
import Box from './Components/Box';

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

const Details = () => {
            const { i18n, t } = useTranslation();
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    email: 'f2002.a.z',
    name: 'Adballah',
    gender: 'Male',
    birthDate: '20-7-2020',
    phone: '099323232',
    country: {label: 'Aruba', value: 'Aruba', flag: 'https://flagcdn.com/w40/aw.png'}
  });

  const handleDownload = () => {
    // Create a mock file content. In a real application, this would be data fetched from a server.
    const fileContent = "This is a dummy medical analysis report.\n\nTest Name: Semen Analysis\nResult: Normal\nDate: 2024-05-20\n\nFor more details, please consult your doctor.";
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'medical_analysis.txt'; // Set the desired filename

    // Append the link to the body, click it, and then remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clean up by revoking the object URL
    URL.revokeObjectURL(url);
  };

  return (
    <div className='min-h-screen h-fit flex justify-between bg-[#F5F5F5] relative ' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
        <div className='w-[82%] h-fit bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <Header/>
        <div className='w-[100%] h-[380px] flex flex-col gap-7 items-center my-5'>
        {/* {currentItems.map((patient, key) => (
            <Card name={patient.name} id={patient.serialNumber} birth={patient.dateOfBirth} nationality={patient.nationality} email={patient.email} phone={patient.phoneNumber} gender={patient.gender}/>
      ))} */}
      <div className="w-[70%] flex flex-row-reverse justify-between items-end border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab('analyses')}
            className={`py-2 px-6 transition-colors duration-300 text-gray-600 font-medium ${activeTab === 'analyses' ? 'border-b-2 border-red-500 text-red-500' : 'hover:text-gray-900'}`}
            dir="rtl"
          >
          {t("fileHead")}
          </button>
          <button
            onClick={() => setActiveTab('medical')}
            className={`py-2 px-6 transition-colors duration-300 text-gray-600 font-medium ${activeTab === 'medical' ? 'border-b-2 border-blue-500 text-blue-500' : 'hover:text-gray-900'}`}
            dir="rtl"
          >
            {t("medicalData")}
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`py-2 px-6 transition-colors duration-300 text-gray-600 font-medium ${activeTab === 'personal' ? 'border-b-2 border-blue-500 text-blue-500' : 'hover:text-gray-900'}`}
            dir="rtl"
          >
           {t("personaldata")}
          </button>
        </div>
        <Box activeTab={activeTab} formData={formData} handleDownload={handleDownload}/>
      </div>
        </div>
    </div>
  )
}

export default Details