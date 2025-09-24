import React from 'react'
import { useTranslation } from 'react-i18next';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import morningImg from '../../assets/morning.png'
import noonImg from '../../assets/noon.png'
import weeklyImg from '../../assets/weekly.png'
import foodImg from '../../assets/food.png'
import manImg from '../../assets/health-man.png'
import sportImg from '../../assets/sport.png'
import { Link } from 'react-router-dom';
import Card from './components/Card';


const Instructions = () => {
  const { i18n, t } = useTranslation();

  const guideness = [
  {
    "title_ar": "برنامج الصباحي",
    "title_en": "Morning Program",
    "image": morningImg,
    "link": "Morning-Program"
  },
  {
    "title_ar": "برنامج الظهيرة",
    "title_en": "Noon Program",
    "image": noonImg,
    "link": "Noon-Program"
  },
  {
    "title_ar": "البرنامج الاسبوعي",
    "title_en": "Weekly Program",
    "image": weeklyImg,
    "link": "Weekly-Program"
  },
  {
    "title_ar": "الأطعمة التي يجب الامتناع عنها",
    "title_en": "Foods to Avoid",
    "image": foodImg,
    "link": "Foods-to-Avoid"
  },
  {
    "title_ar": "العناية بالخصيتين",
    "title_en": "Testicular Care",
    "image": manImg,
    "link": "Testicular-Care"
  },
  {
    "title_ar": "الأمور الأخرى",
    "title_en": "Other Matters",
    "image": sportImg,
    "link": "Others"
  }
]


  return (
    <div className='h-fit flex justify-between items-center bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
         <div className='w-[82%] h-fit bg-[#F5F5F5] flex items-center flex-col relative mb-5' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
       <Header/>
       <div className='w-[98%] h-fit mt-5 grid grid-cols-2 items-center place-items-center gap-5'>
            {guideness.map((guide, key) => (
              <Card guide={guide}/>
        ))}
       </div>
    </div>
    </div>
  )
}

export default Instructions