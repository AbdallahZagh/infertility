import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../Components/Header'
import SideBar from '../../Components/SideBar'
import { useTranslation } from 'react-i18next';
import GenderChart from './components/GenderChart';
import NationChart from './components/NationChart';
import Calender from './components/Calender';
import Appointment from './components/Appointment';
import ConfirmationModal from '../../Components/ConfirmationModal';
import AddAppointmentModal from './components/AddAppointmentModal';

const Home = () => {
    const { i18n } = useTranslation();

// Main App component containing all logic and UI
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ title: '', time: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);

  // Helper function for date formatting
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Helper function to simulate data loading
  const mockDataLoader = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 300);
    });
  };

  // Initial load of appointments (simulated)
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const storedAppointments = JSON.parse(localStorage.getItem('calendarAppointments') || '{}');
        const data = await mockDataLoader(storedAppointments);
        setAppointments(data);
      } catch (error) {
        toast.error("Failed to load appointments.");
      }
    };
    fetchAppointments();
  }, []);

  // Handler functions for state updates
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleAddAppointment = async () => {
    if (!newAppointment.title || !newAppointment.time) {
      toast.error("Title and time are required.");
      return;
    }
    setIsAdding(true);

    try {
      const dateKey = formatDate(selectedDate);
      const newId = crypto.randomUUID();
      const appointmentToAdd = {
        id: newId,
        date: dateKey,
        title: newAppointment.title,
        time: newAppointment.time,
        createdAt: new Date(),
      };

      const updatedAppointments = { ...appointments };
      if (!updatedAppointments[dateKey]) {
        updatedAppointments[dateKey] = [];
      }
      updatedAppointments[dateKey].push(appointmentToAdd);

      await mockDataLoader(updatedAppointments);
      localStorage.setItem('calendarAppointments', JSON.stringify(updatedAppointments));
      setAppointments(updatedAppointments);

      setNewAppointment({ title: '', time: '' });
      setIsModalOpen(false);
      toast.success("Appointment added successfully!");
    } catch (error) {
      toast.error("Failed to add appointment.");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDelete = (id) => {
    setAppointmentToDelete(id);
    setIsConfirmModalOpen(true);
  };
  
  const handleConfirmDelete = () => {
    console.log('ff')
    try {
      const dateKey = formatDate(selectedDate);
      const updatedAppointments = { ...appointments };
      updatedAppointments[dateKey] = updatedAppointments[dateKey].filter(
        (appointment) => appointment.id !== appointmentToDelete
      );

       mockDataLoader(updatedAppointments);
      localStorage.setItem('calendarAppointments', JSON.stringify(updatedAppointments));
      setAppointments(updatedAppointments);
      toast.success("Appointment deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete appointment.");
    };
      setAppointmentToDelete(null);
      setIsConfirmModalOpen(false);
  }

  return (
    <div className='min-h-screen h-fit flex justify-between items-center bg-[#F5F5F5] relative ' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
        <div className='w-[82%] h-fit bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <Header/>
        <div className='w-[100%] flex justify-evenly items-center my-5'>
            <GenderChart/>
            <NationChart/>
        </div>
        <div  className='w-[100%] h-[500px] flex justify-center gap-5 items-center mb-5'>
          <Calender currentDate={currentDate} selectedDate={selectedDate} appointments={appointments} formatDate={formatDate} handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} handleDateClick={handleDateClick} />
          <Appointment selectedDate={selectedDate} setIsModalOpen={setIsModalOpen} appointments={appointments} handleDelete={handleDelete} formatDate={formatDate} />
        </div>
        </div>
        {isModalOpen && <AddAppointmentModal setIsModalOpen={setIsModalOpen} newAppointment={newAppointment} setNewAppointment={setNewAppointment} handleAddAppointment={handleAddAppointment} isAdding={isAdding} />}
      {isConfirmModalOpen && <ConfirmationModal setIsConfirmModalOpen={setIsConfirmModalOpen} onClose={()=>setIsConfirmModalOpen(false)} handleConfirmDelete={handleConfirmDelete} />}
      <Toaster />
    </div>
  )
}

export default Home