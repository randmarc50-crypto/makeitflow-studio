// src/components/HeroCarousel/heroData.js

import restaurantDesktop from '../../assets/images/hero/restaurant-desktop.webp';
import restaurantTablet from '../../assets/images/hero/restaurant-tablet.webp';
import restaurantMobile from '../../assets/images/hero/restaurant-mobile.webp';

import cafeDesktop from '../../assets/images/hero/cafe-desktop.webp';
import cafeTablet from '../../assets/images/hero/cafe-tablet.webp';
import cafeMobile from '../../assets/images/hero/cafe-mobile.webp';

import hotelDesktop from '../../assets/images/hero/hotel-desktop.webp';
import hotelTablet from '../../assets/images/hero/hotel-tablet.webp';
import hotelMobile from '../../assets/images/hero/hotel-mobile.webp';

export const heroData = [
  {
    id: 1,
    title: "Restaurants Élégants",
    subtitle: "Présentez votre cuisine avec élégance",
    images: {
      desktop: restaurantDesktop,
      tablet: restaurantTablet,
      mobile: restaurantMobile,
      alt: "Restaurant élégant avec présentation culinaire",
    },
  },
  {
    id: 2,
    title: "Cafés Modernes",
    subtitle: "Une ambiance chaleureuse qui attire vos clients",
    images: {
      desktop: cafeDesktop,
      tablet: cafeTablet,
      mobile: cafeMobile,
      alt: "Café moderne avec ambiance chaleureuse",
    },
  },
  {
    id: 3,
    title: "Hôtels Haut de Gamme",
    subtitle: "Valorisez votre établissement avec style",
    images: {
      desktop: hotelDesktop,
      tablet: hotelTablet,
      mobile: hotelMobile,
      alt: "Hôtel haut de gamme avec design élégant",
    },
  },
];
