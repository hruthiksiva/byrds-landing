import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage2 from './pages/LandingPage2';
import SustainableSynergy from './pages/SustainableSynergy';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotCompanyIdPage from './pages/ForgotCompanyIdPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import OTPVerificationPage from './pages/OTPVerificationPage';
import './global.css'

import { ModalProvider } from './context/ModalContext.jsx';

function getZoomFactor() {
  const baseWidth = 1822; // Figma design width
  return window.innerWidth / baseWidth;
}

function useAutoZoom() {
  useEffect(() => {
    let lastHeight = window.innerHeight;
    let lastWidth = window.innerWidth;

    const applyZoom = () => {
      const currentPath = window.location.pathname;
      const zoomFactor = getZoomFactor();
      const noZoomPaths = ['/login', '/register', '/forgot-company-id', '/forgot-password', '/reset-password', '/otp'];
      if (noZoomPaths.includes(currentPath)) {
        const root = document.getElementById('root');
        if (root) {
          root.style.transform = 'none';
          root.style.transformOrigin = 'top left';
          root.style.width = '100%';
          root.style.height = '100vh';
        }
        return;
      }

      // For other pages: only apply zoom for screens wider than 768px (tablets and desktops)
      if (window.innerWidth <= 768) {
        const root = document.getElementById('root');
        if (root) {
          root.style.transform = 'none';
          root.style.transformOrigin = 'top left';
          root.style.width = '100%';
          root.style.height = '100vh';
        }
        return;
      }
      const root = document.getElementById('root');
      if (root) {
        root.style.transform = `scale(${zoomFactor})`;
        root.style.transformOrigin = 'top left';
        root.style.width = `${100 / zoomFactor}%`;
        root.style.height = `${(100 / zoomFactor)}vh`;
      }
    };

    const handleResize = () => {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;

      // Check if height has changed
      // if ((currentHeight !== lastHeight) || (currentWidth !== lastWidth)) {
      //   // Reload the page when height changes
      //   window.location.reload();
      //   return;
      // }

      // If only width changed, apply zoom
      applyZoom();
      
    };

    window.addEventListener('resize', handleResize);
    applyZoom();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

function App() {
  useAutoZoom();
  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<LandingPage2 />} />
          {/* <Route path="/landing-page" element={<LandingPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-company-id" element={<ForgotCompanyIdPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTPVerificationPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/sustainable-synergy" element={<SustainableSynergy />} />
        </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;