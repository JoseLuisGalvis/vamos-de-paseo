import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import yb from '../assets/images/yb.jpeg';
import './AboutSection.css';
import aviso1 from '../assets/images/publicidad1.jpg';
import aviso2 from '../assets/images/publicidad2.jpg';

const translations = {
  es: {
    section1: {
      title: "Conócenos",
      subtitle: "Vamos de Paseo con Yrsa Bello",
      description: "Descubre nuevos lugares, culturas y experiencias a través de los ojos de Yrsa Bello. Nuestro canal está dedicado a compartir aventuras auténticas, consejos de viaje y mostrar la belleza de destinos únicos alrededor del mundo.",
      buttonText: "Ver más videos",
    },
    profile: {
      name: "Yrsa Bello",
      description: "Viajera, exploradora y creadora de contenido",
    },
    stats: {
      subscribers: "Suscriptores",
      videos: "Videos",
      views: "Visualizaciones"
    },
    aside1: {
      title: "Último Video",
      description: "No te pierdas nuestro contenido más reciente. Suscríbete a nuestro canal para recibir notificaciones de nuevos videos cada semana.",
      buttonText: "Suscríbete",
    },
    aside2: {
      title: "Destinos Destacados",
      description: "Explora nuestra colección de destinos imperdibles. Desde playas paradisíacas hasta ciudades históricas, te mostramos lo mejor de cada lugar.",
      buttonText: "Ver más destinos",
    }
  },
  en: {
    section1: {
      title: "About Us",
      subtitle: "Let's Go for a Walk with Yrsa Bello",
      description: "Discover new places, cultures, and experiences through Yrsa Bello's eyes. Our channel is dedicated to sharing authentic adventures, travel tips, and showcasing the beauty of unique destinations around the world.",
      buttonText: "Watch more videos",
    },
    profile: {
      name: "Yrsa Bello",
      description: "Traveler, explorer, and content creator",
    },
    stats: {
      subscribers: "Subscribers",
      videos: "Videos",
      views: "Views"
    },
    aside1: {
      title: "Latest Video",
      description: "Don't miss our latest content. Subscribe to our channel to receive notifications of new videos every week.",
      buttonText: "Subscribe",
    },
    aside2: {
      title: "Featured Destinations",
      description: "Explore our collection of must-visit destinations. From paradise beaches to historic cities, we show you the best of each place.",
      buttonText: "See more destinations",
    }
  },
};

export const AboutSection = ({ language }) => {
  const t = translations[language] || translations.es;

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false, // Esto hace que las animaciones se activen cada vez que se hace scroll
    });
  }, []);

  return (
    <section id="about" className="container d-flex align-items-center min-vh-100 py-5 bg-light">
      <div className="row g-4 align-items-center">
        {/* Imagen - Ocupa 3 columnas */}
        <div className="col-lg-4  text-center" data-aos="fade-up">
          <img
            src={yb}
            alt="Yrsa Bello"
            className="img-fluid image-about"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/300x300/e83e8c/FFFFFF?text=Yrsa+Bello";
            }}
          />
        </div>

        {/* Contenido Principal - Ocupa 6 columnas */}
        <div className="col-lg-4" data-aos="fade-down">
          <h2 className="section-title-about">{t.section1.title}</h2>
          <h3 className="section-subtitle">{t.section1.subtitle}</h3>
          <p className="section-description">{t.section1.description}</p>
          <div className="channel-stats d-flex justify-content-around">
            <div>
              <span className="stat-number">1.4K+</span>
              <span className="stat-label">{t.stats.subscribers}</span>
            </div>
            <div>
              <span className="stat-number">60+</span>
              <span className="stat-label">{t.stats.videos}</span>
            </div>
            <div>
              <span className="stat-number">5M+</span>
              <span className="stat-label">{t.stats.views}</span>
            </div>
          </div>
          <a href="https://www.youtube.com/@YrsaBello" target="_blank" rel="noopener noreferrer" className="btn btn-walk mt-3">
            {t.section1.buttonText} <FaYoutube className="icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="btn btn-walk mt-3 mx-2" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn btn-walk mt-3" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Aside con Cards - Ocupa 4 columnas en pantallas grandes */}
        <aside className="col-lg-4 d-flex flex-column" data-aos="fade-up">
          <div className="card mb-1 min-vh-50 mt-4">
            <div className="card-body">
              <img
                src={aviso1}
                alt="Yrsa Bello"
                className="img-fluid image-latest"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/300x300/e83e8c/FFFFFF?text=Yrsa+Bello";
                }}
              />
            </div>
          </div>

          <div className="card min-vh-50">
            <div className="card-body">
              <img
                src={aviso2}
                alt="Yrsa Bello"
                className="img-fluid image-latest"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/300x300/e83e8c/FFFFFF?text=Yrsa+Bello";
                }}
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  language: PropTypes.string.isRequired,
};

export default AboutSection;

 

