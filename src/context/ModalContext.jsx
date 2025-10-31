// ModalContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';

// Create the context
const ModalContext = createContext({
  modals: {
    active: null,
    showMostPlanted: false
  },
  updateModals: () => {} // Placeholder function
});

// Custom hook to consume the context
export const useModalContext = () => {
  return useContext(ModalContext);
};


// Provider component
export function ModalProvider({ children }) {
  // 1. Lift the state up here
  const [modals, setModals] = useState({
    active: null,
    showMostPlanted: false
  });

  // 2. Create a stable update function that works like your existing one
  const updateModals = (updates) => {    
    setModals(prev => ({
      ...prev,
      ...updates,
    }));
  };

  // 3. Memoize the context value for performance
  const contextValue = useMemo(() => ({
    modals,
    updateModals,
  }), [modals]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}