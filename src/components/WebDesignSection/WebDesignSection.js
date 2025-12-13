// components/Sections/WebDesignSection.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Speed,
  Palette,
  Devices,
  Visibility,
  RestaurantMenu,
  TrendingUp
} from '@mui/icons-material';

// Import SVG d'illustration
import { ReactComponent as WebDesignSvg } from '../../assets/illustrations/services/web-design.svg';

const WebDesignSection = () => {
  const primaryColor = '#8B5CF6';
  const hoverColor = '#7C3AED';

  const features = [
    {
      icon: <Speed sx={{ fontSize: 36, color: primaryColor }} />,
      title: 'Performance et rapidité',
      description: 'Vos pages se chargent instantanément, pour ne jamais perdre un visiteur.',
      badge: '⚡'
    },
    {
      icon: <Palette sx={{ fontSize: 36, color: primaryColor }} />,
      title: 'Design sur-mesure',
      description: 'Une interface élégante qui reflète l\'ambiance de votre restaurant, café ou hôtel.',
      badge: '🎨'
    },
    {
      icon: <Devices sx={{ fontSize: 36, color: primaryColor }} />,
      title: 'Expérience fluide',
      description: 'Un site parfaitement adapté aux mobiles, car vos clients vous cherchent d\'abord en ligne.',
      badge: '📱'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const floatAnimation = {
    float: {
      y: [0, -15, 0],
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
      id="webdesign"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Colonne gauche - Contenu */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* En-tête */}
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 3 }}>
                  <Chip
                    label="Design Web"
                    sx={{
                      backgroundColor: `${primaryColor}15`,
                      color: primaryColor,
                      fontWeight: 600,
                      mb: 2
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                      background: `linear-gradient(135deg, ${primaryColor}, #7C3AED)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Web design axé sur la restauration
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      color: primaryColor,
                      mb: 3
                    }}
                  >
                    Un design pensé pour votre visibilité
                  </Typography>
                </Box>
              </motion.div>

              {/* Description principale */}
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'text.secondary'
                  }}
                >
                  Chez <strong style={{ color: primaryColor }}>Make it Flow</strong>, nous créons des sites web qui mettent en avant votre établissement et lui donnent une présence digitale forte.
                </Typography>
              </motion.div>

              {/* Fonctionnalités */}
              <Box sx={{ mb: 5 }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      sx={{
                        mb: 2,
                        borderRadius: 3,
                        border: '1px solid transparent',
                        backgroundColor: `${primaryColor}05`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: `${primaryColor}30`,
                          backgroundColor: 'white',
                          boxShadow: `0 8px 30px ${primaryColor}15`
                        }
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                          <Box sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
                            {feature.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: 'text.primary',
                                  fontSize: '1.1rem'
                                }}
                              >
                                {feature.title}
                              </Typography>
                              <Box sx={{ ml: 1, fontSize: '1.2rem' }}>
                                {feature.badge}
                              </Box>
                            </Box>
                            <Typography
                              sx={{
                                color: 'text.secondary',
                                fontSize: '0.95rem',
                                lineHeight: 1.6
                              }}
                            >
                              {feature.description}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              {/* Résultat */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    p: 3,
                    mb: 4,
                    borderRadius: 3,
                    backgroundColor: `${primaryColor}08`,
                    borderLeft: `4px solid ${primaryColor}`,
                    position: 'relative'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Visibility sx={{ color: primaryColor, mr: 1 }} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        fontSize: '1.1rem'
                      }}
                    >
                      Résultat
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    Une visibilité accrue qui attire plus de visiteurs et les transforme en clients.
                  </Typography>
                </Box>
              </motion.div>

              {/* Bientôt disponible */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: '#FFFBF0',
                    border: `2px dashed ${primaryColor}50`,
                    position: 'relative'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor,
                        mr: 2
                      }}
                    >
                      💡
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        fontSize: '1.1rem'
                      }}
                    >
                      Bientôt disponible
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 2
                    }}
                  >
                    Nous travaillons sur une fonctionnalité exclusive qui permettra d'afficher vos menus directement sur votre site web.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <RestaurantMenu sx={{ color: primaryColor, mr: 1, fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: primaryColor,
                        fontWeight: 600,
                        fontStyle: 'italic'
                      }}
                    >
                      Vos clients pourront découvrir vos plats avant même de réserver.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Colonne droite - Illustration */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={floatAnimation}
              animate="float"
              style={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 600,
                  margin: '0 auto',
                  p: { xs: 2, md: 4 }
                }}
              >
                {/* Illustration SVG */}
                <WebDesignSvg
                  style={{
                    width: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 15px 35px rgba(139, 92, 246, 0.15))'
                  }}
                />

                {/* Éléments décoratifs animés */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    zIndex: -1
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${primaryColor}20, transparent)`,
                      border: `1px solid ${primaryColor}30`
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    zIndex: -1
                  }}
                >
                  <TrendingUp sx={{ fontSize: 40, color: `${primaryColor}30` }} />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Effets décoratifs de fond */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${primaryColor}05, transparent 70%)`,
          zIndex: 0
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 200,
          height: 200,
          background: `radial-gradient(circle, ${primaryColor}03, transparent 70%)`,
          zIndex: 0
        }}
      />
    </Box>
  );
};

export default WebDesignSection;