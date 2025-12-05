import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Make it Flow</h3>
            <p>"Un bon site web, c'est comme un bon plat - ça doit donner envie au premier regard !" 😉.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">📸</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-link" aria-label="Email">✉️</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>📧 makeitflowagency@gmail.com</li>
              <li>📞 +261 33 24 573 18</li>
              <li>📍 Antananarivo, Madagascar</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Make it Flow. Tous droits réservés. | Site fait avec ❤️ et beaucoup de ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;