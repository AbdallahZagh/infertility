import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const Select = ({ label, data, selected, setSelected, edit = true }) => {
    const { i18n } = useTranslation();

    const [view, setView] = useState(false)

    useEffect(() => {
        // Add a click event listener to the window
        const handleClickOutside = (event) => {
            if (
                view &&
                event.target !== null &&
                !event.target.closest('.h-12') &&
                !event.target.classList.contains('open-model-button')
            ) {
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

    const display = () => {
        if (edit)
            setView(!view)
    }

    // Find the currently selected item's localized label for display
    const selectedDisplay = data.find(item => item.en === selected)
        ? data.find(item => item.en === selected)[i18n.language === 'ar' ? 'ar' : 'en']
        : '';

    return (
        <div className='w-[100%] h-16 flex justify-center items-center relative z-20 '>
            <h2 className={`absolute -top-2 ${i18n.language === 'en' ? 'left-10' : 'right-10'} px-1 bg-white text-[#363636CC] z-10`}>{label}</h2>
            <div className={`w-[90%] h-12 border-2 border-[#18A2D6] rounded-lg p-2 relative ${edit ? 'cursor-pointer' : ''}`} onClick={display}>
                <p className="text-base text-[#333]">{selectedDisplay || ''}</p>
                <ul className={`${view ? 'h-20 overflow-y-scroll' : 'h-0 overflow-hidden'} bg-white w-[100%] duration-500 shadow shadow-black rounded-lg absolute top-[100%] left-0`}>
                    {data.map((item, key) => (
                        <li
                            key={key}
                            className='w-[100%] hover:bg-[#18A2D6] p-1.5 cursor-pointer'
                            // Always store the EN value in the state for consistency
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelected(item.en);
                                setView(false); // Close after selection
                            }}
                        >
                            {i18n.language === 'en' ? item.en : item.ar}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Select
