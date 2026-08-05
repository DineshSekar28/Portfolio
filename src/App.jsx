import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Footer from './components/Footer';
import portfolioData from './portfolio.json';
import Certifications from './components/Certifications';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setIsDarkMode(JSON.parse(saved));
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header darkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Hero data={portfolioData.personal} />
      <Experience data={portfolioData.experience} />
      <Skills data={portfolioData.skills} />
      <Certifications data={portfolioData.certifications} />
      <Projects data={portfolioData.projects} />
      <Publications data={portfolioData.publications} />
      <Footer data={portfolioData.contact} />
    </div>
  );
}

export default App;
