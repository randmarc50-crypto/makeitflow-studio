import React from 'react';
import './AutomationSection.css';

const AutomationSection = () => {
  return (
    <section id="automation" className="automation-section">
      <div className="container">
        <div className="automation-header">
          <span className="section-icon">🤖</span>
          <h2>Automatisation intelligente</h2>
          <p className="section-subtitle">Simplifiez vos interactions avec vos clients</p>
        </div>
        
        <div className="automation-features">
          <div className="automation-feature">
            <div className="feature-content">
              <h3>📧 Emails de confirmation automatiques</h3>
              <p>Vos clients reçoivent instantanément une confirmation après leur réservation.</p>
            </div>
          </div>
          
          <div className="automation-feature">
            <div className="feature-content">
              <h3>💬 Notifications WhatsApp</h3>
              <p>Restez en contact avec vos clients sur l'application qu'ils utilisent le plus.</p>
            </div>
          </div>
          
          <div className="automation-feature">
            <div className="feature-content">
              <h3>📅 Synchronisation calendrier</h3>
              <p>Vos réservations s'alignent automatiquement avec votre agenda, pour éviter les doublons et les oublis.</p>
            </div>
          </div>
        </div>
        
        <div className="automation-result">
          <p>
            <strong>👉 Vous gagnez en efficacité, vos clients gagnent en confiance, 
            et votre établissement gagne en visibilité.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;