import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import countries from 'world-countries';

const CountrySelect = ({selected, setSelected, label, edit = true}) => {
    
    const data = countries.map((country) => ({
        label: country.name.common,
        value: country.name.common, // You can use cca3 or name if you prefer
        flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
      })).sort((a, b) => a.label.localeCompare(b.label));
      const { i18n } = useTranslation();
      
        const [view, setView] = useState(false)
      
        useEffect(() => {
            // Add a click event listener to the window
            const handleClickOutside = (event) => {
            //   console.log("Clicked outside");
              if (
                view &&
                event.target !== null &&
                !event.target.closest('.h-12') &&
                !event.target.classList.contains('open-model-button')
              ) {
                // console.log("Closing the model"); 
                setView(false); 
              }
            };
          
            // Attach the event listener when the component mounts
            window.addEventListener('click', handleClickOutside);
          
            // Remove the event listener when the component unmounts
            return () => {
              window.removeEventListener('click', handleClickOutside);
            };
          }, [view]);

          const display = () =>{
            if(edit)
              setView(!view)
          }

          console.log(selected)

  return (
    <div className='w-[100%] h-16 flex justify-center items-center relative z-10'>
        <h2 className={`absolute -top-2 ${i18n.language == 'en' ? 'left-10' : 'right-10'} px-1 bg-white text-[#363636CC] z-10`}>{label}</h2>
        <div className={`w-[90%] h-12 border-2 border-[#18A2D6] rounded-lg p-2 relative ${edit ? 'cursor-pointer' : ''}`} onClick={display}>
        <div className='flex justify-start items-center gap-3'><img src={selected.flag} className='w-7 rounded'/> <p className="text-base text-[#333]">{selected.value}</p></div>
            <ul className={`${view ? 'h-32 overflow-y-scroll' : 'h-0 overflow-hidden'} bg-white  w-[100%] duration-500 shadow shadow-black rounded-lg absolute top-[100%] left-0`}>
                {data.map((country, key) => (<li className='w-[100%] hover:bg-[#18A2D6] p-1.5 flex justify-start items-center gap-3' onClick={()=>setSelected(data[key])}>
                <img src={country.flag} className='w-7 rounded'/> <p>{country.label}</p></li>
      ))}
            </ul>
        </div>
      </div>
  )
}

export default CountrySelect