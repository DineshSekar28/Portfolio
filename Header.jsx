import React from 'react';
import DarkModeToggle from './DarkModeToggle';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <div className="header-container">
        <a href="#home" className="logo">
          DS
        </a>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  );
}

export default Header;
