// src/pages/FaqPage.jsx
import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FaqPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeIndex, setActiveIndex] = useState(null);

  // Couleurs violet/blanc
  const primaryColor = '#8B5CF6';
  const secondaryColor = '#A78BFA';
  const lightViolet = 'rgba(139, 92, 246, 0.08)';

  const faqs = [
    {
      question: "Pourquoi ai-je besoin d'un site web pour mon restaurant, café ou hôtel ?",
      answer: "Un site web est votre vitrine digitale. Il permet à vos clients de vous trouver facilement, de découvrir votre ambiance, vos menus, vos horaires et de réserver en ligne. C'est aujourd'hui le premier point de contact avec vos clients potentiels."
    },
    {
      question: "Est-ce que mon site sera adapté aux mobiles ?",
      answer: "Oui ! Tous nos sites sont conçus avec une approche 'Mobile First'. Ils s'adaptent parfaitement à tous les écrans (smartphone, tablette, ordinateur) pour offrir une expérience utilisateur optimale, quel que soit l'appareil utilisé."
    },
    {
      question: "Combien de temps faut-il pour créer mon site ?",
      answer: "Le délai moyen est de 1 à 2 semaines, selon la complexité du projet. Un site vitrine simple peut être livré en 5 à 7 jours, tandis qu'un site avec fonctionnalités avancées (réservation en ligne, galerie photo dynamique) prend environ 2 semaines."
    },
    {
      question: "Puis-je mettre à jour mes informations facilement ?",
      answer: "Absolument ! Nous vous fournissons un tableau de bord intuitif (CMS) qui vous permet de modifier votre contenu en temps réel : photos, horaires, menus, promotions... Sans aucune connaissance technique requise !"
    },
    {
      question: "Est-ce que je pourrai afficher mon menu en ligne ?",
      answer: "Oui, très bientôt ! Nous développons actuellement une fonctionnalité avancée de gestion de menus qui vous permettra de publier, modifier et catégoriser vos plats et boissons en quelques clics. Une mise à jour gratuite pour tous nos clients !"
    },
    {
      question: "Est-ce que vous offrez un support après la mise en ligne ?",
      answer: "Bien sûr ! Nous offrons 30 jours de support gratuit après la livraison. Ensuite, vous pouvez opter pour notre forfait de maintenance mensuel qui inclut : mises à jour de sécurité, support technique, sauvegardes régulières et analyses de performance."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les virements bancaires, Mobile Money (Orange Money, MVola, Airtel Money) et les paiements par carte via notre plateforme sécurisée. Un acompte de 50% est demandé au démarrage du projet."
    },
    {
      question: "Proposez-vous l'hébergement web ?",
      answer: "Oui, nous proposons des solutions d'hébergement optimisées pour la vitesse et la sécurité. Nos serveurs sont localisés pour garantir des temps de chargement rapides en Afrique et dans le monde entier."
    },
    {
      question: "Mon site apparaîtra-t-il sur Google ?",
      answer: "Oui ! Nous optimisons chaque site pour le référencement (SEO) dès sa création. De plus, nous pouvons vous accompagner dans une stratégie de référencement local pour attirer des clients dans votre zone géographique."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f9f7ff 0%, #ffffff 100%)',
        pt: { xs: 2, md: 4 },
        pb: 10
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section FAQ */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 8 },
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 }
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 3 
            }}
          >
            <Box
              component={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 200, 
                damping: 15 
              }}
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: lightViolet,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <HelpOutlineIcon 
                sx={{ 
                  fontSize: 40,
                  color: primaryColor 
                }} 
              />
            </Box>
          </Box>
          
          <Typography 
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            FAQ – Questions Fréquentes
          </Typography>
          
          <Typography 
            variant="h5"
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            sx={{
              color: 'text.secondary',
              mb: 3,
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Tout ce que vous devez savoir sur nos services de création web pour restaurants, cafés et hôtels
          </Typography>
        </Box>

        {/* Liste des FAQs avec animations */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            maxWidth: 900,
            mx: 'auto',
            mb: 8
          }}
        >
          {faqs.map((faq, index) => (
            <Paper
              key={index}
              component={motion.div}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              sx={{
                mb: 2,
                borderRadius: 3,
                overflow: 'hidden',
                border: `1px solid ${activeIndex === index ? primaryColor : 'rgba(139, 92, 246, 0.1)'}`,
                boxShadow: activeIndex === index 
                  ? `0 10px 30px rgba(139, 92, 246, 0.15)` 
                  : '0 4px 20px rgba(139, 92, 246, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <Box
                onClick={() => toggleFAQ(index)}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  cursor: 'pointer',
                  backgroundColor: activeIndex === index ? lightViolet : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: activeIndex === index ? primaryColor : 'text.primary',
                    pr: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  {faq.question}
                </Typography>
                
                <Box
                  component={motion.div}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: activeIndex === index ? primaryColor : 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Typography
                    sx={{
                      color: activeIndex === index ? 'white' : primaryColor,
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}
                  >
                    {activeIndex === index ? '−' : '+'}
                  </Typography>
                </Box>
              </Box>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Box
                      sx={{
                        p: { xs: 2.5, md: 3 },
                        pt: 0,
                        borderTop: `1px solid rgba(139, 92, 246, 0.1)`
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontSize: { xs: '0.95rem', md: '1rem' }
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Paper>
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            color: 'white',
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Vous avez une autre question ?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            Notre équipe est là pour vous répondre en moins de 24h
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2, justifyContent: 'center' }}>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:makeitflowagency@gmail.com"
              startIcon={<EmailIcon />}
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: primaryColor,
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#f8f8f8'
                }
              }}
            >
              Envoyer un email
            </Button>
            
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+261332457318"
              startIcon={<PhoneIcon />}
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Nous appeler
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqPage;