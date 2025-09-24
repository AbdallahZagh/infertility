import React from 'react'

const Calender = ({currentDate, selectedDate, appointments, formatDate, handleNextMonth, handlePrevMonth, handleDateClick}) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
    const firstDayOfMonth = (y, m) => new Date(y, m, 1).getDay();

    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);
    const daysArray = [];

    const prevMonthDays = daysInMonth(year, month - 1);
    for (let i = startDay - 1; i >= 0; i--) {
      daysArray.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        dateObj: new Date(year, month - 1, prevMonthDays - i)
      });
    }

    const today = new Date();
    for (let i = 1; i <= totalDays; i++) {
      const dateObj = new Date(year, month, i);
      daysArray.push({
        day: i,
        isCurrentMonth: true,
        isToday: dateObj.toDateString() === today.toDateString(),
        isSelected: dateObj.toDateString() === selectedDate.toDateString(),
        hasAppointment: appointments[formatDate(dateObj)]?.length > 0,
        dateObj: dateObj,
      });
    }

    const remainingDays = 42 - daysArray.length;
    for (let i = 1; i <= remainingDays; i++) {
      daysArray.push({
        day: i,
        isCurrentMonth: false,
        dateObj: new Date(year, month + 1, i)
      });
    }

    return (
      <div className=" p-4 w-[46.5%] h-[100%] rounded-xl shadow-md shadow-gray-500">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Calendar</h1>
        <div className="flex items-center justify-between mb-6">
          <button onClick={handlePrevMonth} className="p-3 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h2 className="text-2xl font-bold text-gray-800 transition-opacity">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={handleNextMonth} className="p-3 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-500 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-2">
          {daysArray.map((day, index) => {
            let cellClasses = `p-2 rounded-full cursor-pointer text-center transition-colors hover:bg-gray-100 flex items-center justify-center w-10 h-10 mx-auto`;
            if (day.isCurrentMonth) {
              cellClasses += ` text-gray-800`;
            } else {
              cellClasses += ` text-gray-400`;
            }
            if (day.isToday && day.isCurrentMonth) {
              cellClasses += ` bg-blue-100 font-bold text-blue-700`;
            }
            if (day.isSelected) {
              cellClasses = `p-2 rounded-full cursor-pointer text-center transition-colors bg-blue-500 text-white font-bold flex items-center justify-center w-10 h-10 mx-auto`;
            }
            if (day.hasAppointment && day.isCurrentMonth) {
              cellClasses += ' has-appointment relative';
            }

            return (
              <div
                key={index}
                className={cellClasses}
                onClick={() => handleDateClick(day.dateObj)}
              >
                {day.day}
                {day.hasAppointment && day.isCurrentMonth && (
                  <span className="absolute bottom-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default Calender