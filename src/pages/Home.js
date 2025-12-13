import HeroSection from "../components/HeroSection/HeroSection";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import AboutSection from "../components/AboutSection/AboutSection";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroCarousel /> 
      <AboutSection />
      <Footer />
    </>
  );
}
