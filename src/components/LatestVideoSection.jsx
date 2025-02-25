import { useEffect } from 'react';
import 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import './LatestVideoSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import aviso1 from '../assets/images/EspacioDisponible.png';

const translations = {
  es: {
    section1: {
      title: "Conócenos",
      subtitle: "Vamos de Paseo con Yrsa Bello",
      description: "Descubre nuevos lugares, culturas y experiencias a través de los ojos de Yrsa Bello. Nuestro canal está dedicado a compartir aventuras auténticas, consejos de viaje y mostrar la belleza de destinos únicos alrededor del mundo.",
      buttonText: "Ver más videos",
    
    },
    section2: {
      title: "Último Video",
      subtitle: "Mantente al día con nuestras aventuras",
      description: "No te pierdas nuestro contenido más reciente. Suscríbete a nuestro canal para recibir notificaciones de nuevos videos cada semana.",
      buttonText: "Suscríbete",
      back: "Volver al Inicio",
    },
    playlist: {
      title: "Playlist Destacada",
      videoTitle: "Explorando el destino #${num}",
      views: "vistas",
      timeAgo: "hace 1 semana",
      seeAllPlaylists: "Ver todas las playlists"
    },
    section3: {
      title: "Destinos Destacados",
      subtitle: "Lugares que te inspirarán",
      description: "Explora nuestra colección de destinos imperdibles. Desde playas paradisíacas hasta ciudades históricas, te mostramos lo mejor de cada lugar.",
      buttonText: "Ver más destinos",
    },
    section4: {
      title: "Únete a la Comunidad",
      subtitle: "Comparte tus experiencias",
      description: "Forma parte de nuestra comunidad de viajeros. Comparte tus experiencias, haz preguntas y conecta con otros entusiastas del viaje.",
      buttonText: "Unirme ahora",
    },
    stats: {
      subscribers: "Suscriptores",
      videos: "Videos",
      views: "Visualizaciones"
    }
  },
  en: {
    section1: {
      title: "About Us",
      subtitle: "Let's Go for a Walk with Yrsa Bello",
      description: "Discover new places, cultures, and experiences through Yrsa Bello's eyes. Our channel is dedicated to sharing authentic adventures, travel tips, and showcasing the beauty of unique destinations around the world.",
      buttonText: "Watch more videos",

    },
    section2: {
      title: "Latest Video",
      subtitle: "Stay updated with our adventures",
      description: "Don't miss our latest content. Subscribe to our channel to receive notifications of new videos every week.",
      buttonText: "Subscribe",
      back: "Back to Home",
    },
    playlist: {
      title: "Featured Playlist",
      videoTitle: "Exploring Destination #${num}",
      views: "views",
      timeAgo: "1 week ago",
      seeAllPlaylists: "See all playlists"
    },
    section3: {
      title: "Featured Destinations",
      subtitle: "Places that will inspire you",
      description: "Explore our collection of must-visit destinations. From paradise beaches to historic cities, we show you the best of each place.",
      buttonText: "See more destinations",
    },
    section4: {
      title: "Join the Community",
      subtitle: "Share your experiences",
      description: "Become part of our travel community. Share your experiences, ask questions, and connect with other travel enthusiasts.",
      buttonText: "Join now",
    },
    stats: {
      subscribers: "Subscribers",
      videos: "Videos",
      views: "Views"
    }
  },
};


// Sección 2: Último Video
export const LatestVideoSection = ({ language }) => {
  const t = translations[language] || translations.es;

    useEffect(() => {
      AOS.init({
        duration: 3000,
        once: false, // Esto hace que las animaciones se activen cada vez que se hace scroll
      });
    }, []);

    const handleBackClick = () => {
      window.location.href = "/";
    };
  
  return (
    <section id="latest-video" className="container d-flex align-items-center min-vh-100 bg-light">
      <div className="row g-4 mt-5">
      <div className="col-12 col-lg-8" data-aos="fade-up">
              <h2 className="section-title-latest">{t.section2.title}</h2>
              <h3 className="section-subtitle">{t.section2.subtitle}</h3>

              {/* Contenedor del video */}
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/mNpIyfODpxg?si=u7b3JU-_mJQqGaKX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Contenedor en una fila para distribuir columnas */}
              <div className="row">
                <div className="col-12">
                  <p className="section-description mt-3">{t.section2.description}</p>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row">
                  <a
                    href="https://www.youtube.com/@YrsaBello?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-walk cta-button mt-3 margin-right"
                  >
                    {t.section2.buttonText} <FaYoutube className="icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="btn btn-walk mt-3 margin-right" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn btn-walk mt-3 margin-right" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <button className="btn btn-contact mt-3" onClick={handleBackClick}>
                    {t.section2.back}
                  </button>
              </div>
        </div>
        {/* Aside con Cards - Ocupa 4 columnas en pantallas grandes */}
        <aside className="col-12 col-lg-4">
      <div className="card mb-3">
        <div className="card-body p-2">
          <img
            src={aviso1}
            alt="Advertisement"
            className="img-fluid ad-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/300x300/e83e8c/FFFFFF?text=Advertisement";
            }}
          />
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body p-2">
          <img
            src={aviso1}
            alt="Advertisement"
            className="img-fluid ad-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/300x300/e83e8c/FFFFFF?text=Advertisement";
            }}
          />
        </div>
      </div>
    </aside>
      </div>
    </section>
  );
};

// PropTypes
LatestVideoSection.propTypes = {
    language: PropTypes.string.isRequired,
};

export default LatestVideoSection;