import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous intégrerez l'envoi vers votre email/backend
    console.log('Données du formulaire:', formData);
    // Pour l'instant, on ferme la modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Votre projet digital commence ici</h2>
          <p>Merci de remplir les informations demandées</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="Prénom *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Nom *"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email professionnel *"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Type d'établissement *</option>
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Café / Brasserie</option>
              <option value="hotel">Hôtel</option>
              <option value="foodtruck">Food Truck</option>
              <option value="catering">Traiteur</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Parlez-nous de votre projet... (optionnel)"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Obtenir mon devis gratuit
          </button>

          <p className="form-note">
            ⚡ Un email vous a été envoyé à l'instant même !
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;