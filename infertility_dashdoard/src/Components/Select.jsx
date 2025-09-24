import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const Select = ({ label, data, selected, setSelected, edit = false }) => {
  const { i18n } = useTranslation();

  const [view, setView] = useState(false)

  useEffect(() => {
      // Add a click event listener to the window
      const handleClickOutside = (event) => {
        console.log("Clicked outside");
        if (
          view &&
          event.target !== null &&
          !event.target.closest('.h-12') &&
          !event.target.classList.contains('open-model-button')
        ) {
          console.log("Closing the model");
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

    // console.log(gender)
      
    return (
      <div className='w-[100%] h-16 flex justify-center items-center relative z-20 '>
        <h2 className={`absolute -top-2 ${i18n.language == 'en' ? 'left-7' : 'right-7'} px-1 bg-white text-[#363636CC] z-10`}>{label}</h2>
        <div className={`w-[90%] h-12 border-2 border-[#18A2D6] rounded-lg p-2 relative ${edit ? 'cursor-pointer' : ''}`} onClick={display}>
        <p className="text-base text-[#333]">{i18n.language == 'en' ? selected == 'Male' ? 'Male' : 'Female' : selected == 'Male' ? 'ذكر' : 'أنثى' }</p>
            <ul className={`${view ? 'h-20 overflow-y-scroll' : 'h-0 overflow-hidden'} bg-white w-[100%] duration-500 shadow shadow-black rounded-lg absolute top-[100%] left-0`}>
                {i18n.language == 'en' ?  data.map((gender, key) => (<li className='w-[100%] hover:bg-[#18A2D6] p-1.5' onClick={()=>setSelected(data[key].en)}>
        {gender.en} </li>
      )) :  data.map((gender, key) => (<li className='w-[100%] hover:bg-[#18A2D6] p-1.5' onClick={()=>setSelected(data[key].en)}>
        {gender.ar} </li>
      )) }
            </ul>
        </div>
      </div>
  )
}

export default Select