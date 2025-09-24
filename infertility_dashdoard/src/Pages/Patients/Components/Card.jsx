import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Card = ({id, name, birth, nationality, email, phone, gender}) => {

            const { i18n, t } = useTranslation();
            const seiral =  id.replace("#", "");
    

  return (
      <div className="w-[95%] relative bg-white rounded-lg shadow-lg shadow-[#0000004e] flex items-center px-4 py-3">
        
        {/* The pink/peach bar on the right side of the card */}
        <div className={`absolute ${i18n.language == 'en' ? 'left-0 rounded-l-lg' : 'right-0 rounded-r-lg'}  top-0 h-full w-2 ${gender == 'male' ? "bg-[#44AEC3]" : gender == 'female' ? "bg-gradient-to-b from-[#E4897B] to-[#F7A9A0]" : ''} `}></div>

        {/* Container for the button and the data, using flex to control horizontal alignment */}
        <div className="flex flex-grow flex-col-reverse md:flex-row-reverse items-center justify-between w-full">

            {/* Left Section: The "Details" button */}
            <div className="flex-shrink-0 mt-4 md:mt-0">
                <Link
                to={`/details/:${seiral}`} 
                className={`${gender == 'male' ? "bg-[#44AEC3] hover:bg-[#3a8fa0]" : gender == 'female' ? "bg-gradient-to-b from-[#E4897B] to-[#F7A9A0] hover:from-[#c8786c] hover:to-[#d49189]" : ''} text-white font-bold py-2 px-6 rounded-md shadow-lg transition-colors duration-200 w-full md:w-auto`}>
                    {t("details")}
                </Link>
            </div>
            
            {/* Right Section: The data fields, laid out horizontally */}
            <div className="w-[80%] flex flex-row justify-evenly flex-wrap space-x-2 md:space-x-4 rtl:space-x-reverse text-right rtl:text-right text-sm md:text-base md:pr-4">
                
                {/* Serial Number */}
                <div className="flex flex-col p-2 text-center">
                    <div className="font-medium text-gray-500 whitespace-nowrap">{t("id")}</div>
                    <div className="font-semibold text-gray-800">{id}</div>
                </div>

                {/* Name */}
                <div className="flex flex-col p-2 text-center">
                    <div className="font-medium text-gray-500 whitespace-nowrap">{t("name")}</div>
                    <div className="font-semibold text-gray-800">{name}</div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col p-2 text-center">
                    <div className="font-medium text-gray-500 whitespace-nowrap">{t("birthDate")}</div>
                    <div className="font-semibold text-gray-800">{birth}</div>
                </div>

                {/* Nationality */}
                <div className="flex flex-col p-2 text-center">
                    <div className="font-medium text-gray-500 whitespace-nowrap">{t("country")}</div>
                    <div className="font-semibold text-gray-800">{nationality}</div>
                </div>

                {/* Email */}
                <div className="flex flex-col p-2 text-center">
                    <div className="font-medium text-gray-500 whitespace-nowrap">{t("email")}</div>
                    <div className="font-semibold text-gray-800">{email}</div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col p-2 text-center">
                    <div className="font-medium text-gray-500 whitespace-nowrap">{t("phoneNum")}</div>
                    <div className="font-semibold text-gray-800">{phone}</div>
                </div>

            </div>
        </div>
      </div>
  );
};

export default Card;
