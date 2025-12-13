import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Make it Flow</h3>
            <p>"Un bon site web, c'est comme un bon plat - ça doit donner envie au premier regard !" 😉.</p>
            <div className="social-links">
          
              <a 
                href="https://www.instagram.com/ton_compte_instagram" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="www.linkedin.com/in/marc-rand-a6a2b5361" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="mailto:makeitflowagency@gmail.com" 
                className="social-link" 
                aria-label="Email"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {/* Pour une SPA, utilise Link de react-router-dom à la place */}
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <EmailIcon className="contact-icon" /> 
                makeitflowagency@gmail.com
              </li>
              <li>
                <PhoneIcon className="contact-icon" /> 
                +261 33 24 573 18
              </li>
              <li>
                <LocationOnIcon className="contact-icon" /> 
                Antananarivo, Madagascar
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Make it Flow. Tous droits réservés. | Site fait avec ❤️ et beaucoup de ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;