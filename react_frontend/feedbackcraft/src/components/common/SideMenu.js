// SideMenu.js

import React from 'react';
import { useAppContext } from '../../AppContext';
import '../../styles/SideMenu.css';
const SideMenu = () => {
  const { handleSelectOption, isMenuOpen } = useAppContext();

  
  const menuOptions = [
    { id: 'viewProjects', label: 'View Projects' },
    { id: 'viewFeedbacks', label: 'View Feedbacks' },
    { id: 'createProject', label: 'Create Project' },
    { id: 'submitFeedback', label: 'Submit Feedback' },
    // Add additional menu options if needed
  ];

  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : 'menu-closed'}`}>
   
      <div className="menu-options">
        {menuOptions.map((option) => (
          <div
            key={option.id}
            className="menu-option"
            onClick={() => handleSelectOption(option.id)}
          >
            {option.label}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default SideMenu;