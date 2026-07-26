import React from 'react';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button 
      className="dark-mode-toggle" 
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;
