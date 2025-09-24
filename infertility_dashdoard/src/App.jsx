import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Login from './Pages/login/Login';
import Home from './Pages/Home/Home';
import Patients from './Pages/Patients/Patients';
import Details from './Pages/Details/Details';

function App() {

  return (
    <>
      <Router>
    <Routes>
    <Route path="/" Component={Login}></Route>
    <Route path="/home" Component={Home}></Route>
    <Route path="/male" element={<Patients type='male'/>}></Route>
    <Route path="/female" element={<Patients type='female'/>}></Route>
    <Route path="/new" element={<Patients type='new'/>}></Route>
    <Route path="/details/:id" Component={Details}></Route>
    <Route path="*" Component={NotFound}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
 