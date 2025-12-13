import React, { useState } from 'react';
import './HeroSection.css';
import ContactModal from '../ContactModal/ContactModal';
import heroDesktop from '../../assets/images/hero/restaurant-desktop.webp';
import heroTablet from '../../assets/images/hero/restaurant-tablet.webp';
import heroMobile from '../../assets/images/hero/restaurant-mobile.webp';
import { Button } from '@mui/material';
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero-section">
        <div className="hero-background">
          {/* TON CODE EXISTANT POUR LES IMAGES - NE RIEN CHANGER */}
          <picture>
            <source media="(min-width: 1024px)" srcSet={heroDesktop} />
            <source media="(min-width: 768px)" srcSet={heroTablet} />
            <img 
              src={heroMobile} 
              alt="Restaurant élégant avec présentation culinaire"
              className="hero-image"
            />
          </picture>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Des sites web qui donnent <span className="underline-faim">faim</span>
          </h1>
          <p className="hero-subtitle">
            Sites modernes pour restaurants, cafés et hôtels
          </p>
          <Button 
  variant="contained" 
  size="large"
  sx={{
    background: 'linear-gradient(135deg, #7E57C2, #5E35B1)',
    borderRadius: '50px',
    padding: '16px 40px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0 8px 25px rgba(126, 87, 194, 0.4)',
    '&:hover': {
      background: 'linear-gradient(135deg, #5E35B1, #7E35B1)',
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 35px rgba(126, 87, 194, 0.6)',
    },
    transition: 'all 0.3s ease',
    color: 'white',
  }}
  onClick={() => setIsModalOpen(true)}
>
   Obtenir mon site pro
</Button>
        </div>
    

      <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            animation: "bounce 2s infinite",
            cursor: "pointer",
            zIndex: 5
          }}
          onClick={() => {
            const nextSection = document.getElementById("hero-carousel");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
        </Box>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* AJOUT : le ContactModal en dehors de la section hero */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;