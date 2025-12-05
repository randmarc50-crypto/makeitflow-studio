import React from "react";
import Header from "./components/Layout/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import WebDesignSection from "./components/WebDesignSection/WebDesignSection";
import AutomationSection from "./components/AutomationSection/AutomationSection";
import AboutSection from "./components/AboutSection/AboutSection";
import FAQSection from "./components/FAQSection/FAQSection";
import Footer from "./components/Layout/Footer";
import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset CSS et application du thème */}
      <div className="App">
        <Header />
        <HeroSection />
        <WebDesignSection />
        <AutomationSection />
        <AboutSection />
        <FAQSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;