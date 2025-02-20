// components/VideoBackground.jsx
import { useEffect } from "react";
import PropTypes from "prop-types";
import "./VideoBackground.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const VideoBackground = ({ videoSrc, language }) => {
  const titles = {
    es: "Vamos de Paseo con Yrsa Bello",
    en: "Let's go for a walk with Yrsa Bello",
  };

  const authorText = {
    es: "Autor del Video:",
    en: "Video Author:",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: -100,
      mirror: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <div className="container-fluid video-section min-vh-100">
      {/* Enlace en la esquina superior derecha */}
      <div className="youtube-link">
        <a 
          href="https://www.youtube.com/@YrsaBello" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {language === "es" ? "Visita:" : "Visit:"} @YrsaBello
        </a>
      </div>

      {/* Punto de atribución del autor */}
      <div className="author-attribution">
        <span className="author-dot"></span>
        <span className="author-info">
          {authorText[language]} <strong>Google Earth</strong>
        </span>
      </div>

      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="video-overlay">
        <h1 
          className="video-title-video"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-once="true"
        >
          {titles[language]}
        </h1>
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default VideoBackground;
