import React from 'react'

const Appointment = ({selectedDate, setIsModalOpen, appointments, handleDelete, formatDate}) => {
   const selectedDayAppointments = appointments[formatDate(selectedDate)] || [];
    return (
      <div className="h-[100%] p-4 w-[42%] rounded-xl shadow-md shadow-gray-500">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">
            Appointments for <br />
            <span className="text-blue-500">{selectedDate.toLocaleDateString()}</span>
          </h3>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
        <div className="space-y-4">
          {selectedDayAppointments.length > 0 ? (
            selectedDayAppointments
              .sort((a, b) => a.time.localeCompare(b.time))
              .map(appointment => (
                <div key={appointment.id} className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-700 text-lg">{appointment.title}</p>
                    <button onClick={() => handleDelete(appointment.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Time: {appointment.time}</p>
                </div>
              ))
          ) : (
            <div className="text-center py-8 text-gray-500 italic">No appointments for this day.</div>
          )}
        </div>
      </div>
    );
  };

export default Appointment