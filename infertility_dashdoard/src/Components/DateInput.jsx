// import React, { useEffect, useState } from 'react';
// import dayjs from 'dayjs';
// import { useTranslation } from 'react-i18next';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// const DateInput = ({
//   onDateSelect,
//   initialDate = new Date(),
//   selectedDate,
//   setSelectedDate,
//   label
// }) => {
//   const { i18n } = useTranslation();

//   const initMonth = dayjs(initialDate).month();
//   const initYear = dayjs(initialDate).year();

//   const [currentMonth, setCurrentMonth] = useState(initMonth);
//   const [currentYear, setCurrentYear] = useState(initYear);
//   const [view, setView] = useState(false);

//   const daysInMonth = dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth();
//   const firstDayOfWeek = dayjs(`${currentYear}-${currentMonth + 1}-01`).day();

//   const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   const handleDateClick = (day) => {
//     const newDate = dayjs(`${currentYear}-${currentMonth + 1}-${day}`);
//     const formatted = newDate.format('DD-MM-YYYY');
//     // setSelectedDate(formatted);
//     if (onDateSelect) onDateSelect(formatted);
//     setView(false);
//   };

//   const goToPreviousMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const goToNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   let calendarCells = [];
//   for (let i = 0; i < firstDayOfWeek; i++) {
//     calendarCells.push(null);
//   }
//   for (let day = 1; day <= daysInMonth; day++) {
//     calendarCells.push(day);
//   }

//   const weeks = [];
//   for (let i = 0; i < calendarCells.length; i += 7) {
//     weeks.push(calendarCells.slice(i, i + 7));
//   }

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         view &&
//         event.target !== null &&
//         !event.target.closest('.h-12') &&
//         !event.target.classList.contains('open-model-button')
//       ) {
//         setView(false);
//       }
//     };
//     window.addEventListener('click', handleClickOutside);
//     return () => window.removeEventListener('click', handleClickOutside);
//   }, [view]);

//   console.log(selectedDate)

//   return (
//     <div className="w-full h-16 flex justify-center items-center relative">
//       <h2
//         className={`absolute -top-2 ${
//           i18n.language === 'en' ? 'left-10' : 'right-10'
//         } px-1 bg-white text-[#363636CC] z-10`}
//       >
//         {label}
//       </h2>

//       <div
//         className="w-[90%] h-12 border-2 border-[#18A2D6] rounded-lg p-2 relative cursor-pointer"
//         onClick={() => setView(!view)}
//       >
//         <p className="text-sm text-[#333]">{selectedDate}</p>

//         <div
//           className={`w-full ${
//             view ? 'h-60' : 'h-0'
//           } duration-500 rounded-lg shadow-md shadow-black bg-white z-10 overflow-hidden absolute top-0 -left-[101%]`}
//         >
//           {/* Header */}
//           <div className="flex justify-evenly items-center border-b border-[#18A2D6] text-[#18A2D6] p-1.5 rounded-t-lg">
//               <BsArrowRight size={18} onClick={goToPreviousMonth} className="hover:text-blue-600 duration-150"/>
//             <div className="text-lg w-[50%] text-center">
//               {dayjs(`${currentYear}-${currentMonth + 1}`).format('MMMM YYYY')}
//             </div>
//               <BsArrowLeft size={18} onClick={goToNextMonth} className="hover:text-blue-600 duration-150"/>
//           </div>

//           {/* Weekdays */}
//           <div className="grid grid-cols-7 text-center bg-gray-100">
//             {dayNames.map((day) => (
//               <div key={day} className="font-semibold text-sm">
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Calendar days */}
//           <div className="grid grid-cols-7 text-center">
//             {weeks.map((week, weekIndex) => (
//               <React.Fragment key={weekIndex}>
//                 {week.map((day, dayIndex) => {
//                   const isSelected =
//                     selectedDate &&
//                     day &&
//                     selectedDate ===
//                       dayjs(`${currentYear}-${currentMonth + 1}-${day}`).format('DD-MM-YYYY');

//                   const cellClasses = `
//                     h-fit flex items-center justify-center p-1  
//                     ${day ? 'cursor-pointer hover:bg-blue-100' : 'bg-gray-50'} 
//                     ${isSelected ? 'bg-blue-500 text-white' : 'text-gray-800'}
//                   `;

//                   return (
//                     <div
//                       key={dayIndex}
//                       className={cellClasses}
//                       onClick={() => day && handleDateClick(day)}
//                     >
//                       {day || ''}
//                     </div>
//                   );
//                 })}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DateInput;


import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const DateInput = ({
  onDateSelect,
  initialDate = new Date(),
  selectedDate,
  label,
  edit = false
}) => {
  const { i18n } = useTranslation();
  const initMonth = dayjs(initialDate).month();
  const initYear = dayjs(initialDate).year();

  const [currentMonth, setCurrentMonth] = useState(initMonth);
  const [currentYear, setCurrentYear] = useState(initYear);
  const [view, setView] = useState(false);
  const [showMonthYearSelect, setShowMonthYearSelect] = useState(false);

  const daysInMonth = dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth();
  const firstDayOfWeek = dayjs(`${currentYear}-${currentMonth + 1}-01`).day();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDateClick = (day) => {
    const newDate = dayjs(`${currentYear}-${currentMonth + 1}-${day}`);
    const formatted = newDate.format('DD-MM-YYYY');
    if (onDateSelect) onDateSelect(formatted);
    setView(false);
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  let calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++) calendarCells.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarCells.push(day);

  const weeks = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        view &&
        event.target !== null &&
        !event.target.closest('.date-container') &&
        !event.target.classList.contains('open-model-button')
      ) {
        setView(false);
        setShowMonthYearSelect(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [view]);

  const handleMonthYearSelect = (month, year) => {
    setCurrentMonth(month);
    setCurrentYear(year);
    setShowMonthYearSelect(false);
  };

  const months = Array.from({ length: 12 }, (_, i) =>
    dayjs().month(i).format('MMMM')
  );

  const years = Array.from({ length: 81 }, (_, i) => currentYear - i); 

  const display = () =>{
            if(edit)
              setView(!view)
          }

  return (
    <div className="w-full h-16 flex justify-center items-center relative z-20">
      <h2
        className={`absolute -top-2 ${
          i18n.language === 'en' ? 'left-7' : 'right-7'
        } px-1 bg-white text-[#363636CC] z-10 `}
      >
        {label}
      </h2>

      <div
        className={`w-[90%] h-12 border-2 border-[#18A2D6] rounded-lg p-2 relative ${edit ? 'cursor-pointer' : ''} date-container`}
        onClick={display}
      >
        <p className="text-base text-[#333]">{selectedDate}</p>

        <div
          className={`w-full h-60
             ${view ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}
          }  duration-500 rounded-lg shadow-md shadow-black bg-white z-10 overflow-hidden absolute ${i18n.language == 'en' ? '-right-0 -top-40' : '-left-0 -top-64' }`}
        >
          {/* Header */}
          <div className="flex justify-evenly items-center border-b border-[#18A2D6] text-[#18A2D6] p-1 rounded-t-lg">
            <BsArrowRight
              size={18}
              onClick={(e)=>{
                e.stopPropagation();
                goToPreviousMonth()}}
              className="hover:text-blue-600 duration-150 cursor-pointer"
            />
            <div
              className="w-[50%] text-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowMonthYearSelect(!showMonthYearSelect);
              }}
            >
              {dayjs(`${currentYear}-${currentMonth + 1}`).format('MMMM YYYY')}
            </div>
            <BsArrowLeft
              size={18}
              onClick={(e)=>{
                e.stopPropagation();
                goToNextMonth()}}
              className="hover:text-blue-600 duration-150 cursor-pointer"
            />
          </div>

          {/* Month & Year Selector */}
          {showMonthYearSelect ?
            <div className=" p-2 border-b border-gray-200 max-h-52 overflow-y-auto">
                <div>
                <p className="font-semibold text-sm mb-1">Year</p>
                <div className="grid grid-cols-3 gap-1 overflow-y-auto max-h-36">
                  {years.map((year) => (
                    <button
                      key={year}
                      className="text-xs p-1 bg-gray-100 hover:bg-blue-200 rounded"
                onClick={(e) =>{e.stopPropagation();
                     handleMonthYearSelect(currentMonth, year)}}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Month</p>
                <div className="grid grid-cols-3 gap-1">
                  {months.map((month, i) => (
                    <button
                      key={month}
                      className="text-xs p-1 bg-gray-100 hover:bg-blue-200 rounded"
                      onClick={(e) => {e.stopPropagation();
                        handleMonthYearSelect(i, currentYear)}}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              </div>
              
            </div>
          : <>
          <div className="grid grid-cols-7 text-center bg-gray-100">
            {dayNames.map((day) => (
              <div key={day} className="font-semibold text-sm py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 text-center">
            {weeks.map((week, weekIndex) => (
              <React.Fragment key={weekIndex}>
                {week.map((day, dayIndex) => {
                  const isSelected =
                    selectedDate &&
                    day &&
                    selectedDate ===
                      dayjs(`${currentYear}-${currentMonth + 1}-${day}`).format('DD-MM-YYYY');

                  const cellClasses = `
                    h-8 flex items-center justify-center
                    ${day ? 'cursor-pointer hover:bg-blue-100' : 'bg-gray-50'} 
                    ${isSelected ? 'bg-blue-500 text-white' : 'text-gray-800'}
                  `;

                  return (
                    <div
                      key={dayIndex}
                      className={cellClasses}
                      onClick={() => day && handleDateClick(day)}
                    >
                      {day || ''}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          </>
          }

          

          
        </div>
      </div>
    </div>
  );
};

export default DateInput;
