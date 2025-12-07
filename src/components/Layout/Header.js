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
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' }
  ];

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

  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 }
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  // Fonction de navigation
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // Vérifier si le lien est actif
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar 
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.08)' : 'none',
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
          
          {/* Logo avec animation */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <RestaurantMenuIcon sx={{ 
              color: '#e63946', 
              fontSize: { xs: 28, md: 32 },
              mr: 1 
            }} />
            <Box sx={{ 
              fontSize: { xs: '1.3rem', md: '1.5rem' }, 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #e63946, #f4a261)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'none', sm: 'block' }
            }}>
              Make it Flow
            </Box>
            <Box sx={{ 
              fontSize: '1.3rem', 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #e63946, #f4a261)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'block', sm: 'none' }
            }}>
              MIF
            </Box>
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
                    onClick={() => handleNavigation(item.path)}
                    sx={{ 
                      color: isActive(item.path) ? '#e63946' : '#333',
                      fontWeight: isActive(item.path) ? 'bold' : 500,
                      fontSize: '1rem',
                      position: 'relative',
                      '&:hover': { 
                        color: '#e63946',
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        style={{
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          right: 0,
                          height: 2,
                          backgroundColor: '#e63946',
                          borderRadius: 2
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
              
              {/* Bouton CTA Desktop */}
              <motion.div
                variants={ctaButtonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  onClick={() => navigate('/contact')} // Vous pouvez créer une page de contact ou de devis
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #e63946, #f4a261)',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 3,
                    py: 1,
                    borderRadius: '50px',
                    boxShadow: '0 4px 20px rgba(230, 57, 70, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #d62828, #e76f51)',
                      boxShadow: '0 6px 25px rgba(230, 57, 70, 0.4)'
                    }
                  }}
                >
                  Obtenir mon site pro
                </Button>
              </motion.div>
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RestaurantMenuIcon sx={{ color: '#e63946', mr: 1 }} />
              <Box sx={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #e63946, #f4a261)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Make it Flow
              </Box>
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
                backgroundColor: isActive('/') ? 'rgba(230, 57, 70, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(230, 57, 70, 0.1)'
                }
              }}
            >
              <ListItemText 
                primary="Accueil" 
                primaryTypographyProps={{ 
                  fontWeight: isActive('/') ? 'bold' : 500,
                  color: isActive('/') ? '#e63946' : '#333'
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
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    backgroundColor: isActive(item.path) ? 'rgba(230, 57, 70, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 57, 70, 0.1)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ 
                      fontWeight: isActive(item.path) ? 'bold' : 500,
                      color: isActive(item.path) ? '#e63946' : '#333'
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ padding: 16 }}
          >
            <Button
              onClick={() => handleNavigation('/contact')}
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(45deg, #e63946, #f4a261)',
                color: 'white',
                fontWeight: 'bold',
                py: 1.5,
                borderRadius: '50px',
                boxShadow: '0 4px 20px rgba(230, 57, 70, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #d62828, #e76f51)',
                  boxShadow: '0 6px 25px rgba(230, 57, 70, 0.4)'
                }
              }}
            >
              Obtenir mon site pro
            </Button>
          </motion.div>
        </Box>
      </Drawer>

      {/* Espace pour compenser l'AppBar fixe */}
      <Toolbar />
    </>
  );
};

export default Header;