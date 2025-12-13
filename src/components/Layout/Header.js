// components/Layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Import du logo depuis src/assets
import logo from '../../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  // Couleurs violet/blanc
  const primaryColor = '#8B5CF6';
  const hoverColor = '#7C3AED';

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items - Contact est maintenant un défilement
  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', isScrollToFooter: true } // Nouveau type pour Contact
  ];

  // Fonction pour faire défiler jusqu'au footer
  const scrollToFooter = () => {
    setIsMobileMenuOpen(false);
    
    // Si on est sur une autre page que l'accueil, on navigue d'abord
    if (location.pathname !== '/') {
      navigate('/');
      
      // Attendre un peu pour que la page se charge, puis défiler
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      // Si on est déjà sur l'accueil, défiler directement
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Fonction de navigation pour les autres boutons
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // Fonction de gestion de clic unique pour tous les boutons
  const handleItemClick = (item) => {
    if (item.isScrollToFooter) {
      scrollToFooter();
    } else {
      handleNavigation(item.path);
    }
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3
      }
    })
  };

  // Vérifier si le lien est actif (uniquement pour les pages)
  const isActive = (item) => {
    if (item.isScrollToFooter) return false;
    return location.pathname === item.path;
  };

  return (
    <>
      <AppBar 
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          py: isScrolled ? 0.5 : 1,
          px: { xs: 2, md: 4 }
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          maxWidth: '1280px', 
          margin: '0 auto',
          width: '100%'
        }}>
          
          {/* Logo avec animation - sans texte */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              height: '100%'
            }}
            onClick={() => navigate('/')}
          >
            {/* Logo image */}
            <Box
              component="img"
              src={logo}
              alt="Make it Flow Logo"
              sx={{
                height: { xs: isScrolled ? '35px' : '40px', md: isScrolled ? '45px' : '50px' },
                width: 'auto',
                transition: 'all 0.3s ease',
                objectFit: 'contain'
              }}
            />
          </motion.div>

          {/* Navigation Desktop */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 2, lg: 3 } }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleItemClick(item)}
                    sx={{ 
                      color: isActive(item) ? primaryColor : '#333',
                      fontWeight: isActive(item) ? 'bold' : 500,
                      fontSize: '1rem',
                      position: 'relative',
                      '&:hover': { 
                        color: hoverColor,
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    {item.label}
                    {isActive(item) && (
                      <motion.div
                        layoutId="activeTab"
                        style={{
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          right: 0,
                          height: 2,
                          backgroundColor: primaryColor,
                          borderRadius: 2
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}

          {/* Bouton Menu Mobile */}
          {isMobile && (
            <IconButton
              onClick={() => setIsMobileMenuOpen(true)}
              sx={{ color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Menu Mobile (Drawer) */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 3 
          }}>
            <Box 
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Make it Flow Logo"
                sx={{
                  height: '35px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Box>
            <IconButton onClick={() => setIsMobileMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem 
              onClick={() => handleNavigation('/')}
              sx={{
                borderRadius: 2,
                mb: 1,
                backgroundColor: location.pathname === '/' ? `rgba(139, 92, 246, 0.1)` : 'transparent',
                '&:hover': {
                  backgroundColor: `rgba(139, 92, 246, 0.1)`
                }
              }}
            >
              <ListItemText 
                primary="Accueil" 
                primaryTypographyProps={{ 
                  fontWeight: location.pathname === '/' ? 'bold' : 500,
                  color: location.pathname === '/' ? primaryColor : '#333'
                }}
              />
            </ListItem>
            
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <ListItem 
                  onClick={() => handleItemClick(item)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    backgroundColor: isActive(item) ? `rgba(139, 92, 246, 0.1)` : 'transparent',
                    '&:hover': {
                      backgroundColor: `rgba(139, 92, 246, 0.1)`
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ 
                      fontWeight: isActive(item) ? 'bold' : 500,
                      color: isActive(item) ? primaryColor : '#333'
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Espace pour compenser l'AppBar fixe */}
      <Toolbar />
    </>
  );
};

export default Header;