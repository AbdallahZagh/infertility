import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Login from './Pages/login/Login';
import Home from './Pages/Home/Home';
import Patients from './Pages/Patients/Patients';
import Details from './Pages/Details/Details';
import { useTranslation } from 'react-i18next';

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
 