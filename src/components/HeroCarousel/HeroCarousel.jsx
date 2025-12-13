// src/components/HeroCarousel/HeroCarousel.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './HeroCarousel.css';
import { heroData } from './heroData';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Commence arrêté
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const autoPlayIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 🎯 DÉMARRAGE AUTOMATIQUE après 1 seconde
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAutoPlaying(true); // ← ICI on démarre l'autoplay
    }, 1000); // 1 seconde pour laisser le temps de voir le bouton

    return () => clearTimeout(startTimer);
  }, []);

  // 🔄 GESTION PRINCIPALE DE L'AUTOPLAY
  const startAutoPlay = useCallback(() => {
    // Nettoyer les anciens intervalles
    clearInterval(autoPlayIntervalRef.current);
    clearInterval(progressIntervalRef.current);
    
    // Intervalle de changement de slide : 5 secondes
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 5000); // ← INTERVALLE PRINCIPAL : 5000ms = 5 secondes
    
    // Intervalle pour la barre de progression
    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setProgress(0); // Réinitialiser quand on arrive à 100%
          return 0;
        }
        return prev + (100 / 50); // 50 pas pour 5 secondes = progrès fluide
      });
    }, 100); // Mettre à jour la progression toutes les 100ms
  }, []);

  // 🛑 ARRÊTER L'AUTOPLAY
  const stopAutoPlay = useCallback(() => {
    clearInterval(autoPlayIntervalRef.current);
    clearInterval(progressIntervalRef.current);
    setProgress(0); // Réinitialiser la barre de progression
  }, []);

  // 🎬 EFFET POUR DÉMARRER/ARRÊTER L'AUTOPLAY
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    
    return stopAutoPlay; // Nettoyage
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  // 🖱️ GESTION DES INTERACTIONS
  const handleInteraction = useCallback(() => {
    setShowControls(true);
    
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000); // Cacher les contrôles après 3 secondes d'inactivité
  }, []);

  // 📱 NAVIGATION
  const goToSlide = useCallback((index) => {
    handleInteraction();
    setCurrentIndex(index);
    setProgress(0); // Réinitialiser la barre
    
    // Si l'autoplay était actif, on le relance
    if (isAutoPlaying) {
      // On redémarre l'autoplay immédiatement
      setTimeout(() => {
        if (isAutoPlaying) {
          startAutoPlay();
        }
      }, 10);
    }
  }, [handleInteraction, isAutoPlaying, startAutoPlay]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? heroData.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === heroData.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // ⏯️ BASCULER L'AUTOPLAY
  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => {
      const newState = !prev;
      if (newState) {
        // Si on démarre, on réinitialise la progression
        setProgress(0);
      }
      return newState;
    });
    handleInteraction();
  }, [handleInteraction]);

  // 🖼️ IMAGE RESPONSIVE
  const getCurrentImage = useCallback(() => {
    if (!heroData[currentIndex]) return '';
    if (isMobile) return heroData[currentIndex].images.mobile;
    return heroData[currentIndex].images.desktop;
  }, [currentIndex, isMobile]);

  // 🧹 NETTOYAGE
  useEffect(() => {
    return () => {
      clearInterval(autoPlayIntervalRef.current);
      clearInterval(progressIntervalRef.current);
      clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  if (!heroData?.length) return <div>Aucune donnée disponible</div>;

  return (
    <Box 
      id="hero-carousel"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        borderRadius: { xs: 0, md: 2 }
      }}
      onMouseEnter={() => {
        setShowControls(true);
        clearTimeout(controlsTimeoutRef.current);
      }}
      onMouseLeave={() => {
        if (isAutoPlaying) {
          controlsTimeoutRef.current = setTimeout(() => {
            setShowControls(false);
          }, 1000);
        }
      }}
      onClick={handleInteraction}
    >
      {/* 🎛️ BOUTON PLAY/PAUSE - LE VRAI TRIGGER */}
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          toggleAutoPlay();
        }}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 20,
          color: 'white',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(4px)',
          width: 44,
          height: 44,
          opacity: 1, // Toujours visible
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            transform: 'scale(1.1)'
          },
          border: '1px solid rgba(255, 255, 255, 0.2)',
          // Animation pulsante si l'autoplay est arrêté
          animation: !isAutoPlaying ? 'pulse 2s infinite' : 'none'
        }}
        aria-label={isAutoPlaying ? "Pause" : "Lecture"}
      >
        {isAutoPlaying ? 
          <PauseIcon fontSize="medium" /> : 
          <PlayArrowIcon fontSize="medium" />
        }
      </IconButton>

      {/* 📱 FLÈCHES DE NAVIGATION */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          zIndex: 15,
          opacity: showControls ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: showControls ? 'auto' : 'none'
        }}
      >
        <IconButton 
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton 
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* 🎨 CONTENU DU CAROUSEL */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <Box
            component="img"
            src={getCurrentImage()}
            alt={heroData[currentIndex]?.images?.alt || ''}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          />

          {/* 📝 TEXTE */}
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
                    fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  {heroData[currentIndex]?.title}
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.5rem' },
                    opacity: 0.95
                  }}
                >
                  {heroData[currentIndex]?.subtitle}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* 🔘 INDICATEURS */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          zIndex: 15,
          opacity: showControls ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }}
      >
        {heroData.map((_, index) => (
          <IconButton
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            size="small"
            sx={{
              p: 0.5,
              color: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
              '&:hover': { color: 'white' }
            }}
          >
            <CircleIcon sx={{ 
              fontSize: index === currentIndex ? '12px' : '8px'
            }} />
          </IconButton>
        ))}
      </Box>

      {/* 📊 BARRE DE PROGRESSION */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: 'rgba(255,255,255,0.1)',
          zIndex: 10
        }}
      >
        <Box
          sx={{
            height: '100%',
            backgroundColor: isAutoPlaying ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
            width: `${progress}%`,
            transition: 'width 0.1s linear, background-color 0.3s ease'
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroCarousel;