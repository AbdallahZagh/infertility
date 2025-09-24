
import React from 'react'
import { useTranslation } from 'react-i18next';
import { IoDownloadOutline } from "react-icons/io5";
import Input from '../../../components/Input';
import DateInput from '../../../Components/DateInput';
import Select from '../../../Components/Select'
import CountrySelect from '../../../Components/CountrySelect'

const Box = ({activeTab, formData, handleDownload}) => {

                const { i18n, t } = useTranslation();
                const genders = [{
            en: 'Male',
            ar: 'ذكر'
          },
          {
            en: 'female',
            ar: 'أنثى'
          }
        ]
    
    
    const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="w-[90%] py-8" dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
            <h2 className={`text-xl font-bold mb-6 text-gray-700`}>{t("personaldata")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Row 1 */}
<Input label={t('email')} name={'email'} type={'email'} value={formData.email}/>
            <Input label={t('name')} name={'name'} type={'text'} value={formData.name}/>
            <Select label={t('gender')} data={genders} selected={formData.gender}/>
            <DateInput label={t('birthDate')} selectedDate={formData.birthDate}/>
            <Input label={t('phoneNum')} value={formData.phone}/>
            <CountrySelect label={t('country')} selected={formData.country}/>
            </div>
          </div>
        );
      case 'medical':
        return (
          <div className="w-[90%] py-8" dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
            <h2 className="text-xl font-bold mb-6 text-gray-700">{t("medicalData")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Input label={t('email')} name={'email'} type={'email'} value={formData.email}/>
            <Input label={t('name')} name={'name'} type={'text'} value={formData.name}/>
            <Select label={t('gender')} data={genders} selected={formData.gender}/>
            <DateInput label={t('birthDate')} selectedDate={formData.birthDate}/>
            <Input label={t('phoneNum')} value={formData.phone}/>
            <CountrySelect label={t('country')} selected={formData.country}/>
            </div>
          </div>
        );
      case 'analyses':
        return (
          <div className="w-[90%] py-8 flex flex-col items-center" dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
            <h2 className="text-xl font-bold mb-6 w-full text-gray-700">{t("fileHead")}</h2>
              <button className="flex items-center justify-center gap-2 px-6 py-3 text-xl bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors" onClick={handleDownload}>
                <span>تحميل الملف</span>
                <IoDownloadOutline size={24}/>
              </button>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="w-[75%] h-fit flex justify-center items-center bg-white rounded-lg shadow-xl overflow-hidden mt-5 relative line-background" dir="rtl">
          {renderContent()}
        </div>
  )
}

export default Box