import React from 'react';
import './WebDesignSection.css';

const WebDesignSection = () => {
  return (
    <section id="webdesign" className="webdesign-section">
      <div className="container">
        <div className="webdesign-content">
          <div className="webdesign-text">
            <h2>Web design axé sur la restauration</h2>
            <p className="subtitle">Un design pensé pour votre visibilité</p>
            <p className="description">
              Chez Make it flow, nous créons des sites web qui mettent en avant votre établissement 
              et lui donnent une présence digitale forte.
            </p>
            
            <div className="features-grid">
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Performance et rapidité</h4>
                  <p>Vos pages se chargent instantanément, pour ne jamais perdre un visiteur.</p>
                </div>
              </div>
              
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <div>
                  <h4>Design sur-mesure</h4>
                  <p>Une interface élégante qui reflète l'ambiance de votre restaurant, café ou hôtel.</p>
                </div>
              </div>
              
              <div className="feature">
                <span className="feature-icon">📱</span>
                <div>
                  <h4>Expérience fluide</h4>
                  <p>Un site parfaitement adapté aux mobiles, car vos clients vous cherchent d'abord en ligne.</p>
                </div>
              </div>
            </div>
            
            <div className="result">
              <h4>👉 Résultat</h4>
              <p>Une visibilité accrue qui attire plus de visiteurs et les transforme en clients.</p>
            </div>
            
            <div className="upcoming-feature">
              <h4>💡 Bientôt disponible</h4>
              <p>
                Nous travaillons sur une fonctionnalité exclusive qui permettra d'afficher vos menus 
                directement sur votre site web. Vos clients pourront ainsi découvrir vos plats et vos 
                offres en ligne avant même de réserver.
              </p>
            </div>
          </div>
          
          <div className="webdesign-visual">
            {/* Placeholder pour image/mockup */}
            <div className="mockup-placeholder">
              <span>📱💻 Mockup Site Restaurant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;