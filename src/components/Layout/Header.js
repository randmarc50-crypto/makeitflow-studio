import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Make it Flow</h2>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;