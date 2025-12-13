// components/Sections/AboutSection.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';

// Import des SVG comme composants React
import { ReactComponent as CreativitySvg } from '../../assets/illustrations/about/creativity.svg';

const AboutSection = () => {
  const primaryColor = '#8B5CF6';
  const hoverColor = '#7C3AED';

  const values = [
    {
      title: 'Créativité sur mesure',
      description: 'Chaque projet est unique, chaque solution est personnalisée',
      icon: '✨'
    },
    {
      title: 'Excellence technique',
      description: 'Code robuste, performances optimales, sécurité renforcée',
      icon: '⚡'
    },
    {
      title: 'Accompagnement continu',
      description: 'Présents à chaque étape, de l\'idée à la réalisation',
      icon: '🤝'
    }
  ];

  // Animation pour le SVG principal
  const svgAnimation = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      rotateY: -10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Animation pour les éléments flottants dans le SVG
  const floatingAnimation = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Colonne gauche - Illustration animée */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={svgAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
              style={{ position: 'relative' }}
            >
              {/* Conteneur principal du SVG */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 500,
                  margin: '0 auto',
                  p: { xs: 2, md: 4 }
                }}
              >
                {/* SVG principal avec animation de flottement */}
                <motion.div
                  variants={floatingAnimation}
                  animate="float"
                  style={{ width: '100%', height: 'auto' }}
                >
                  <CreativitySvg
                    style={{
                      width: '100%',
                      height: 'auto',
                      filter: 'drop-shadow(0 15px 35px rgba(139, 92, 246, 0.15))'
                    }}
                  />
                </motion.div>

                {/* Éléments décoratifs animés */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                  style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    zIndex: -1
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}05)`,
                      border: `1px solid ${primaryColor}30`
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '5%',
                    zIndex: -1
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${primaryColor}15, transparent)`,
                      border: `1px dashed ${primaryColor}30`
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Colonne droite - Contenu */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: primaryColor,
                    fontWeight: 600,
                    letterSpacing: 1,
                    mb: 2,
                    display: 'inline-block',
                    backgroundColor: `${primaryColor}10`,
                    px: 2,
                    py: 0.5,
                    borderRadius: 20
                  }}
                >
                  Notre philosophie
                </Typography>
              </motion.div>

              {/* Titre avec animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                    background: `linear-gradient(135deg, ${primaryColor}, #7C3AED)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.2
                  }}
                >
                  Nous donnons vie à vos idées digitales
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary'
                  }}
                >
                  Chez <strong style={{ color: primaryColor }}>Make it Flow</strong>, nous transformons vos visions 
                  en expériences digitales mémorables. Notre mission ? Créer des interfaces qui allient 
                  esthétique et performance pour propulser votre croissance.
                </Typography>
              </motion.div>

              {/* Valeurs avec animation séquentielle */}
              <Box sx={{ mb: 5 }}>
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 2.5,
                        p: 2.5,
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        border: '1px solid transparent',
                        '&:hover': {
                          borderColor: `${primaryColor}20`,
                          backgroundColor: `${primaryColor}08`,
                          boxShadow: `0 8px 25px ${primaryColor}10`
                        }
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Box
                          sx={{
                            mr: 3,
                            fontSize: 32,
                            lineHeight: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '12px',
                            backgroundColor: `${primaryColor}15`,
                            color: primaryColor
                          }}
                        >
                          {value.icon}
                        </Box>
                      </motion.div>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: 'text.primary',
                            fontSize: '1.1rem'
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.95rem',
                            lineHeight: 1.6
                          }}
                        >
                          {value.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* CTA avec animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    backgroundColor: primaryColor,
                    color: 'white',
                    px: 4,
                    py: 1.8,
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: '1rem',
                    textTransform: 'none',
                    boxShadow: `0 4px 20px ${primaryColor}40`,
                    '&:hover': {
                      backgroundColor: hoverColor,
                      boxShadow: `0 8px 30px ${primaryColor}60`
                    },
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  Découvrir nos services
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Seconde illustration - Animation subtile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ mt: 12, textAlign: 'center', position: 'relative' }}>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                display: 'inline-block',
                maxWidth: 400,
                width: '60%'
              }}
            >

            </motion.div>
            
            {/* Effet de fond */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '100%',
                background: `radial-gradient(ellipse at center, ${primaryColor}05 0%, transparent 70%)`,
                zIndex: -1,
                borderRadius: '50%'
              }}
            />
          </Box>
        </motion.div>
      </Container>

      {/* Effets décoratifs de fond */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${primaryColor}03, transparent 70%)`,
          zIndex: 0
        }}
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${primaryColor}02, transparent 70%)`,
          zIndex: 0
        }}
      />
    </Box>
  );
};

export default AboutSection;