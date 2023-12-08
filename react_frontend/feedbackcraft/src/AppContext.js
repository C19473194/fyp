// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Set initial state to true
  

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleToggleMenu = () => {
  
    setIsMenuOpen(!isMenuOpen);
    console.log('isMenuOpen toggled to:', !isMenuOpen);
  };

  return (
    <AppContext.Provider
      value={{
        selectedOption,
        isMenuOpen,
        handleSelectOption,
        handleToggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};