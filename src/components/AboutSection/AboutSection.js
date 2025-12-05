import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <span className="section-icon">📖</span>
            <h2>À propos</h2>
            <p className="section-subtitle">Qui sommes-nous ?</p>
          </div>

          <div className="about-text">
            <p className="intro">
              Chez <strong>Make it flow</strong>, nous croyons qu'un site web ne doit pas seulement être beau, 
              il doit <strong>donner envie</strong>. Notre mission est simple : aider les restaurants, cafés et hôtels 
              à attirer plus de clients grâce à des sites modernes, rapides et pensés pour la conversion.
            </p>

            <div className="philosophy-section">
              <h3>Notre philosophie</h3>
              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <span className="philo-icon">🍴</span>
                  <h4>Axé sur la restauration et l'hôtellerie</h4>
                  <p>Spécialisés dans votre secteur, nous comprenons vos défis spécifiques.</p>
                </div>
                <div className="philosophy-card">
                  <span className="philo-icon">⚡</span>
                  <h4>Sites performants et modernes</h4>
                  <p>Des technologies de pointe pour une expérience utilisateur optimale.</p>
                </div>
                <div className="philosophy-card">
                  <span className="philo-icon">🤖</span>
                  <h4>Automatisation intelligente</h4>
                  <p>Gagnez du temps avec des processus automatisés et efficaces.</p>
                </div>
              </div>
            </div>

            <div className="why-section">
              <h3>Pourquoi "Make it flow" ?</h3>
              <p>
                Parce qu'un bon site web doit être <strong>fluide</strong>, comme une expérience culinaire réussie. 
                Nous faisons en sorte que vos visiteurs passent naturellement de la découverte à la réservation, 
                sans friction et avec plaisir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;