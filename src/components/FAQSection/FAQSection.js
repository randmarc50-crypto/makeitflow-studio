import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Pourquoi ai-je besoin d'un site web pour mon restaurant, café ou hôtel ?",
      answer: "Un site web est votre vitrine digitale. Il permet à vos clients de vous trouver facilement, de découvrir votre ambiance et de réserver en ligne."
    },
    {
      question: "Est-ce que mon site sera adapté aux mobiles ?",
      answer: "Oui ! Tous nos sites sont conçus en responsive design, pour que vos clients aient une expérience fluide sur smartphone, tablette ou ordinateur."
    },
    {
      question: "Combien de temps faut-il pour créer mon site ?",
      answer: "En moyenne, un site est prêt en 2 à 4 semaines, selon les fonctionnalités souhaitées."
    },
    {
      question: "Puis-je mettre à jour mes informations facilement ?",
      answer: "Bien sûr. Vous pouvez modifier vos photos, vos horaires ou vos offres spéciales en quelques clics, sans connaissances techniques."
    },
    {
      question: "Est-ce que je pourrai afficher mon menu en ligne ?",
      answer: "Oui, très bientôt ! Nous développons une fonctionnalité qui vous permettra de publier vos menus directement sur votre site."
    },
    {
      question: "Est-ce que vous offrez un support après la mise en ligne ?",
      answer: "Absolument. Nous restons disponibles pour vous accompagner et faire évoluer votre site selon vos besoins."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="section-icon">❓</span>
          <h2>FAQ – Questions fréquentes</h2>
          <p className="section-subtitle">Tout ce que vous devez savoir</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Vous avez une autre question ?</p>
          <button className="cta-button secondary">
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;