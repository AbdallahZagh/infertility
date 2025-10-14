import React, { useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';
// import Error

function App() {
        const { i18n, t } = useTranslation();
  
const [isUnsupportedDevice, setIsUnsupportedDevice] = useState(false);
  useEffect(() => {
    const checkDevice = () => {
      const ua = navigator.userAgent || "";
      const platform = navigator.platform || "";
      const maxTouchPoints = navigator.maxTouchPoints || 0;

      // --- iPad detection, even in "Request Desktop Site" mode ---
      const isRealIPad =
        /iPad/i.test(ua) ||
        (navigator.userAgentData &&
          navigator.userAgentData.platform &&
          navigator.userAgentData.platform.toLowerCase().includes("ipad")) ||
        (platform === "MacIntel" && maxTouchPoints > 1) ||
        (typeof window.orientation !== "undefined" && /Macintosh/.test(ua));

      // --- iPhone / Android / Tablet detection ---
      const isMobileOrTablet =
        /android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
        /ipad|tablet|kindle|playbook/i.test(ua);

      // --- Generic touch device detection (extra safety) ---
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      // If iPad, tablet, mobile, or any touch device → block
      const unsupported =
        isRealIPad || isMobileOrTablet || (isTouchDevice && screen.width <= 1280);

      setIsUnsupportedDevice(unsupported);
    };

    checkDevice();
  }, []);


  // If the device is detected as a mobile phone, show the dedicated message.
  if (isUnsupportedDevice) {
    return (
  <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
    <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto">
      <svg className="mx-auto h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <h1 className="text-2xl font-bold text-gray-800 mt-4">{t("unsupportedDevice")}</h1>
      <p className="text-gray-600 mt-2">
       {t("unsupported")}
      </p>
    </div>
  </div>
);
  }

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
