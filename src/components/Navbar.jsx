import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.jpeg';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const translations = {
  es: {
    navbarTitle: "Vamos De Paseo con Yrsa Bello",
    inicio: "Inicio",
    destinos: "Nosotros",
    experiencias: "Video",
    destacados: "Playlist",
    comunidad: "Comunidad",
    contacto: "Contacto",
    map: "Mapa",
    darkMode: "🌞 Modo Claro",
    lightMode: "🌙 Modo Oscuro",
    language: "Español",
    english: "Inglés",
  },
  en: {
    navbarTitle: "Let's Go for a Walk with Yrsa Bello",
    inicio: "Home",
    destinos: "About Us",
    experiencias: "Video",
    destacados: "Playlist",
    comunidad: "Community",
    contacto: "Contact",
    map: "Map",
    darkMode: "🌞 Light Mode",
    lightMode: "🌙 Dark Mode",
    language: "Spanish",
    english: "English",
  },
};

const Navbar = ({ language, toggleLanguage }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) document.body.classList.add("dark-mode");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler) navbarToggler.click(); // Cierra el menú al hacer clic en un enlace
    }
  };

  const t = translations[language];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${isScrolled ? "navbar-shrink" : ""}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#" aria-label={t.navbarTitle}>
          <img src={logo} alt="Logo" width="50" height="50" className="me-2" />
          {t.navbarTitle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav" onClick={handleNavClick}>
            <li className="nav-item"><a className="nav-link" href="#">{t.inicio}</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">{t.destinos}</a></li>
            <li className="nav-item"><a className="nav-link" href="#latest-video">{t.experiencias}</a></li>
            <li className="nav-item"><a className="nav-link" href="#playlist">{t.destacados}</a></li>
            <li className="nav-item"><a className="nav-link" href="#community">{t.comunidad}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t.contacto}</a></li>
            <li className="nav-item"><a className="nav-link" href="#map">{t.map}</a></li>
          </ul>
          <div className="d-flex flex-lg-row flex-column gap-2 ms-auto">
            <button className="btn btn-secondary" onClick={toggleDarkMode}>
              {darkMode ? t.darkMode : t.lightMode}
            </button>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {language === "es" ? t.language : t.english}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <button className="dropdown-item" onClick={() => toggleLanguage("es")}>
                    🇪🇸 Español
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => toggleLanguage("en")}>
                    🇺🇸 English
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};

export default Navbar;

