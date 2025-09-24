import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import NotFound from './pages/error/NotFound';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import AboutUs from './pages/aboutus/AboutUs';
import Doctor from './pages/doctor/Doctor';
import Instructions from './pages/instructions/Instructions';
import Details from './pages/details/Details';
import MedicalInfo from './pages/medicalInfo/MedicalInfo';
// import Error

function App() {

  return (
    <Router>
    <Routes>
    <Route path="/" Component={Login}></Route>
    <Route path="/signup" Component={Signup}></Route>
    <Route path="/profile" Component={Profile}></Route>
    <Route path="/aboutus" Component={AboutUs}></Route>
    <Route path="/doctor" Component={Doctor}></Route>
    <Route path="/guideness" Component={Instructions}></Route>
    <Route path="/guideness/:link" Component={Details}></Route>
    <Route path="medicalData" Component={MedicalInfo}></Route>
    <Route path="*" Component={NotFound}></Route>
    {/* <Route path="/dashboard" Component={Dashboard}></Route>
      <Route path="/products" Component={Products}></Route>
      <Route path="/orders" Component={Orders}></Route>
      <Route path="/inventory" Component={Inventory}></Route> */}
    </Routes>
  </Router>
  )
}

export default App
