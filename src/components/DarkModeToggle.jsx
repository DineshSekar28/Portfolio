import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default DarkModeToggle;
