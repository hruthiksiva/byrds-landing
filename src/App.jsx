import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PlantationPortalPage from './pages/PlantationPortalPage';
import TicketPortalPage from './pages/TicketPortalPage';

function getZoomFactor() {
  const baseWidth = 1920; // Figma design width
  return window.innerWidth / baseWidth;
}

function useAutoZoom() {
  useEffect(() => {
    let lastHeight = window.innerHeight;
    let lastWidth = window.innerWidth;

    const applyZoom = () => {
      // Check if we're on a page that should not have auto-zoom (login and register pages)
      const currentPath = window.location.pathname;
      const noZoomPaths = ['/login', '/register', '/forgot-company-id', '/forgot-password', '/reset-password'];

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

      // Only apply zoom for screens wider than 768px (tablets and desktops)
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

      const zoomFactor = getZoomFactor();
      const root = document.getElementById('root'); // or your wrapper div
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
      <Routes>
        <Route path="/" element={<PlantationPortalPage />} />
      </Routes>
    </Router>
  );
}

export default App;