import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7E57C2',      // Ton violet principal
      light: '#B39DDB',     // Violet clair
      dark: '#5E35B1',      // Violet foncé
    },
    secondary: {
      main: '#FFD54F',      // Ton accent or
    },
    background: {
      default: '#F8F7FC',   // Ton fond crème
    },
  },
  typography: {
    fontFamily: '"Satoshi", "Inter", sans-serif',
    h1: {
      fontFamily: '"Clash Display", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Clash Display", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // Enlève les MAJUSCULES automatiques
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,       // Coins arrondis partout
  },
});

export default theme;