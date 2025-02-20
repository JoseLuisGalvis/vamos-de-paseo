import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaYoutube } from 'react-icons/fa';
import './CommunitySection.css';
import aviso1 from '../assets/images/publicidad1.jpg';
import aviso2 from '../assets/images/publicidad2.jpg';

const translations = {
  es: {
    section4: {
      title: "Únete a Nuestra Comunidad de YouTube",
      subtitle: "¡Ayúdanos a alcanzar 2000 suscriptores!",
      description: "Tu apoyo es fundamental para seguir creando contenido de calidad. Cada suscripción nos acerca más a nuestra meta de 2000 suscriptores, lo que nos permitirá traerte más aventuras, consejos de viaje y experiencias únicas.",
      buttonText: "Suscribirme ahora",
      currentCount: "Suscriptores actuales:",
      targetCount: "Meta:",
      benefits: [
        "Notificaciones de nuevos videos",
        "Contenido exclusivo para la comunidad",
        "Posibilidad de influir en futuros destinos",
        "Participación en sorteos y eventos especiales"
      ]
    }
  },
  en: {
    section4: {
      title: "Join Our YouTube Community",
      subtitle: "Help us reach 2000 subscribers!",
      description: "Your support is essential for us to continue creating quality content. Each subscription brings us closer to our goal of 2000 subscribers, which will allow us to bring you more adventures, travel tips, and unique experiences.",
      buttonText: "Subscribe now",
      currentCount: "Current subscribers:",
      targetCount: "Goal:",
      benefits: [
        "Notifications of new videos",
        "Exclusive community content",
        "Influence on future destinations",
        "Participation in giveaways and special events"
      ]
    }
  }
};

const CommunitySection = ({ language }) => {
  const t = translations[language] || translations.es;

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const handleYoutubeSubscribe = () => {
    window.open('https://www.youtube.com/@YrsaBello/community', '_blank');
  };

  return (
    <section id="community" className="youtube-community-section container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center mt-3" data-aos="fade-up">
          <FaYoutube className="youtube-icon-hero" />
          <h2 className="section-title-youtube mb-1">{t.section4.title}</h2>
          <h4 className="section-subtitle-youtube mb-2">{t.section4.subtitle}</h4>
          
          <div className="youtube-card p-3 mb-1">
            <p className="youtube-description">{t.section4.description}</p>
            
            <div className="subscriber-counter mb-2">
              <div className="counter-container">
                <div className="counter-item">
                  <span className="counter-label">{t.section4.currentCount}</span>
                  <span className="counter-value current-count">1,456</span>
                </div>
                <div className="counter-progress">
                  <div className="progress" style={{height: "10px"}}>
                    <div 
                      className="progress-bar bg-youtube" 
                      role="progressbar" 
                      style={{width: "72.8%"}} 
                      aria-valuenow="72.8" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="counter-item">
                  <span className="counter-label">{t.section4.targetCount}</span>
                  <span className="counter-value target-count">2,000</span>
                </div>
              </div>
            </div>
            
            <div className="benefits-section mb-2">
              <div className="row">
                {t.section4.benefits.map((benefit, index) => (
                  <div key={index} className="col-md-6 benefit-item" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="benefit-card">
                      <FaYoutube className="benefit-icon" />
                      <p className="benefit-text">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handleYoutubeSubscribe} 
              className="btn btn-youtube-hero"
              data-aos="zoom-in"
            >
              <FaYoutube className="me-2" />
              {t.section4.buttonText}
            </button>
          </div>
        </div>
        {/* Aside con Cards - Ocupa 4 columnas en pantallas grandes */}
        <aside className="col-lg-4 d-flex flex-column">
          <div className="ad-container h-100">
            <div className="card mb-3 ad-card">
              <div className="card-body p-0">
                <img 
                  src={aviso1} 
                  alt="Publicidad" 
                  className="img-fluid ad-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/300x300/e83e8c/FFFFFF?text=Publicidad";
                  }}
                />
              </div>
            </div>

            <div className="card ad-card">
              <div className="card-body p-0">
                <img 
                  src={aviso2} 
                  alt="Publicidad" 
                  className="img-fluid ad-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/300x300/e83e8c/FFFFFF?text=Publicidad";
                  }}
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

CommunitySection.propTypes = {
  language: PropTypes.string.isRequired,
};

export default CommunitySection;
