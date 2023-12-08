// components/MenuHandler.js
import React, { useState, createContext, useContext } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => {
  return useContext(MenuContext);
};

const MenuHandler = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    // Menu should remain open when a menu option is selected
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ selectedOption, handleSelectOption, isMenuOpen, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuHandler;
