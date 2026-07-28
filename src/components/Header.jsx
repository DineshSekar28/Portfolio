import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

function Header({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <a href="#home" className="logo gradient-text">
          DS
        </a>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  );
}

export default Header;
