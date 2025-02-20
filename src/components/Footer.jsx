import 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import PropTypes from 'prop-types';
import './Footer.css';

const translations = {
  es: {
    copyright: "© 2024 VamosDePaseo. Todos los derechos reservados.",
    about: "Acerca de",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    contact: "Contacto",
  },
  en: {
    copyright: "© 2024 VamosDePaseo. All rights reserved.",
    about: "About",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    contact: "Contact",
  },
};

const Footer = ({ language }) => {
  const t = translations[language] || translations.en; // Fallback to English

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="copyright">{t.copyright}</p>
          <div className="footer-links">
            <a href="/about">{t.about}</a>
            <a href="/privacy">{t.privacy}</a>
            <a href="/terms">{t.terms}</a>
            <a href="/contact">{t.contact}</a>
          </div>
        </div>
        
        <div className="social-icons">
          <a href="https://www.facebook.com/yrsa.bello/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/yrsabello/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@YrsaBello/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer;
