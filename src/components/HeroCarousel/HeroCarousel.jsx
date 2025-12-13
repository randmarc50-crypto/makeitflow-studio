// src/components/HeroCarousel/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import './HeroCarousel.css';
// Importe toutes tes nouvelles images
import restaurantDesktop from '../../assets/images/hero/restaurant-desktop.webp';
import restaurantTablet from '../../assets/images/hero/restaurant-tablet.webp';
import restaurantMobile from '../../assets/images/hero/restaurant-mobile.webp';

import cafeDesktop from '../../assets/images/hero/cafe-desktop.webp';
import cafeTablet from '../../assets/images/hero/cafe-tablet.webp';
import cafeMobile from '../../assets/images/hero/cafe-mobile.webp';

import hotelDesktop from '../../assets/images/hero/hotel-desktop.webp';
import hotelTablet from '../../assets/images/hero/hotel-tablet.webp';
import hotelMobile from '../../assets/images/hero/hotel-mobile.webp';

// Puis dans carouselItems, remplace les images :


const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Configuration des images avec différentes résolutions
  const carouselItems = [
    {
      id: 1,
      title: "Restaurants Élégants",
      subtitle: "Présentez votre cuisine avec élégance",
      images: {
        desktop: restaurantDesktop,
        tablet: restaurantTablet,
        mobile: restaurantMobile,
        alt: "Restaurant élégant avec présentation culinaire"
      }
    },
    // ... etc.
  ];
  // Défilement automatique
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Redémarre le défilement automatique après 10 secondes d'inactivité
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Détermine quelle image utiliser selon la taille d'écran
  const getCurrentImage = () => {
    if (isMobile) return carouselItems[currentIndex].images.mobile;
    if (isTablet) return carouselItems[currentIndex].images.tablet;
    return carouselItems[currentIndex].images.desktop;
  };

  return (
    <Box 
      className="hero-carousel-container"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        borderRadius: { xs: 0, md: 2 }
      }}
    >
      {/* Navigation avec boutons */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: 'absolute',
          left: { xs: 10, md: 20 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
          }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: { xs: 10, md: 20 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
          }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Contenu du carousel avec animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          {/* Image responsive */}
          <Box
            component="img"
            src={getCurrentImage()}
            alt={carouselItems[currentIndex].images.alt}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          />

          {/* Overlay pour le texte */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              p: 3
            }}
          >
            <Box sx={{ maxWidth: '800px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Box
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.2rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 'bold',
                    mb: 2,
                    textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                  }}
                >
                  {carouselItems[currentIndex].title}
                </Box>
                
                <Box
                  component="p"
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    mb: 4,
                    opacity: 0.9
                  }}
                >
                  {carouselItems[currentIndex].subtitle}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Indicateurs (dots) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 30 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 3
        }}
      >
        {carouselItems.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => goToSlide(index)}
            size="small"
            sx={{
              p: 0.5,
              color: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
              '&:hover': {
                color: 'white'
              }
            }}
          >
            <CircleIcon 
              sx={{ 
                fontSize: index === currentIndex ? '12px' : '8px',
                transition: 'all 0.3s ease'
              }} 
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default HeroCarousel;