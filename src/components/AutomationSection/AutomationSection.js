// components/Sections/AutomationSection.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Email, 
  ChatBubble, 
  CalendarToday,
  Bolt,
  TrendingUp,
  Visibility
} from '@mui/icons-material';

// Import SVG d'illustration
import { ReactComponent as AutomationSvg } from '../../assets/illustrations/services/automation.svg';

const AutomationSection = () => {
  const primaryColor = '#8B5CF6';
  const hoverColor = '#7C3AED';

  const features = [
    {
      icon: <Email sx={{ fontSize: 40, color: primaryColor }} />,
      title: 'Emails de confirmation automatiques',
      description: 'Vos clients reçoivent instantanément une confirmation après leur réservation.',
      color: '#8B5CF6'
    },
    {
      icon: <ChatBubble sx={{ fontSize: 40, color: primaryColor }} />,
      title: 'Notifications WhatsApp',
      description: 'Restez en contact avec vos clients sur l\'application qu\'ils utilisent le plus.',
      color: '#7C3AED'
    },
    {
      icon: <CalendarToday sx={{ fontSize: 40, color: primaryColor }} />,
      title: 'Synchronisation calendrier',
      description: 'Vos réservations s\'alignent automatiquement avec votre agenda, pour éviter les doublons.',
      color: '#6D28D9'
    }
  ];

  const benefits = [
    {
      icon: <Bolt sx={{ fontSize: 30, color: primaryColor }} />,
      text: 'Gain d\'efficacité'
    },
    {
      icon: <TrendingUp sx={{ fontSize: 30, color: primaryColor }} />,
      text: 'Confiance client'
    },
    {
      icon: <Visibility sx={{ fontSize: 30, color: primaryColor }} />,
      text: 'Visibilité accrue'
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

  const cardHoverAnimation = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <Box
      component="section"
      id="automation"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FAF5FF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Effets de fond décoratifs */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${primaryColor}10, transparent 70%)`,
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Colonne gauche - Illustration */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 500,
                  margin: '0 auto'
                }}
              >
                <AutomationSvg
                  style={{
                    width: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.15))'
                  }}
                />
                
                {/* Éléments flottants */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%'
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${primaryColor}30, ${primaryColor}10)`,
                      border: `2px solid ${primaryColor}40`
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Colonne droite - Contenu */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* En-tête */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: `${primaryColor}15`,
                      color: primaryColor,
                      mr: 2
                    }}
                  >
                    🤖
                  </Box>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: primaryColor,
                        fontWeight: 600,
                        letterSpacing: 1,
                        fontSize: '0.9rem'
                      }}
                    >
                      Automatisation intelligente
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        background: `linear-gradient(135deg, ${primaryColor}, #7C3AED)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Simplifiez vos interactions
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'text.secondary'
                  }}
                >
                  Des processus automatisés qui fluidifient la communication avec vos clients et optimisent votre gestion quotidienne.
                </Typography>
              </motion.div>

              {/* Fonctionnalités */}
              <Box sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.div variants={cardHoverAnimation}>
                      <Card
                        sx={{
                          mb: 2,
                          borderRadius: 3,
                          border: '1px solid transparent',
                          background: 'white',
                          boxShadow: '0 4px 20px rgba(139, 92, 246, 0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: `${primaryColor}30`,
                            boxShadow: `0 8px 30px ${primaryColor}20`
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box sx={{ mr: 3 }}>
                              {feature.icon}
                            </Box>
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
                                {feature.title}
                              </Typography>
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
                  </motion.div>
                ))}
              </Box>

              {/* Avantages */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'white',
                    borderLeft: `4px solid ${primaryColor}`,
                    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.08)'
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                      fontSize: '1.1rem'
                    }}
                  >
                    👉 Vous gagnez en efficacité, vos clients gagnent en confiance, 
                    et votre établissement gagne en visibilité.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.text}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            backgroundColor: `${primaryColor}08`,
                            border: `1px solid ${primaryColor}20`
                          }}
                        >
                          {benefit.icon}
                          <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
                            {benefit.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>

              {/* CTA optionnel */}
              <motion.div 
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Box sx={{ mt: 4, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      fontSize: '0.9rem'
                    }}
                  >
                    Prêt à automatiser vos processus ? Contactez-nous pour une démonstration personnalisée.
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Effet de vague en bas */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: `linear-gradient(to top, white, ${primaryColor}03, transparent)`,
          zIndex: 0
        }}
      />
    </Box>
  );
};

export default AutomationSection;