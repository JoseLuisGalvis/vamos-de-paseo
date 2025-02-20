import { useEffect, useRef } from 'react';
import 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import "./ContactForm.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import aviso1 from '../assets/images/publicidad1.jpg';
import aviso2 from '../assets/images/publicidad2.jpg';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const translations = {
  es: {
    contact: "Contacto",
    name: "Nombre",
    email: "Correo Electrónico",
    message: "Mensaje",
    send: "Enviar",
    back: "Volver al Inicio",
    asideTitle1: "Información de Contacto",
    asideContent1: "Disponibles 24/7 para asistencia",
    asideTitle2: "Ubicación",
    asideContent2: "Oficina central: Ciudad Principal",
    section4: {
      description: "Descripción de la sección 4",
    },
    newsletter: {
      title: "Suscríbete a nuestro boletín",
      description: "Recibe las últimas noticias y ofertas.",
      placeholderEmail: "Tu correo electrónico",
      privacyText: "Acepto la política de privacidad.",
      button: "Suscribirse",
      shareText: "Comparte en Redes Sociales",
    },
    social: {
      shareYoutube: "Compartir en YouTube",
      shareInstagram: "Compartir en Instagram",
      share: "Compartir",
    },
  },
  en: {
    contact: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    back: "Back to Home",
    asideTitle1: "Contact Information",
    asideContent1: "Available 24/7 for support",
    asideTitle2: "Location",
    asideContent2: "Headquarters: Main City",
    section4: {
      description: "Section 4 description",
    },
    newsletter: {
      title: "Subscribe to our newsletter",
      description: "Get the latest news and offers.",
      placeholderEmail: "Your email",
      privacyText: "I accept the privacy policy.",
      button: "Subscribe",
      shareText: "Share on social media",
    },
    social: {
      shareYoutube: "Share on YouTube",
      shareInstagram: "Share on Instagram",
      share: "Share",
    },
  },
};

const ContactForm = ({ language }) => {
  const t = translations[language];
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault(); // Evita el refresco de la página
  
    emailjs.sendForm(
      'service_6wxs1pt',   // Reemplázalo con tu Service ID
      'template_t1egspu',  // Reemplázalo con tu Template ID
      formRef.current,
      'deQ8LIjzglGZDYhFR' // Reemplázalo con tu Clave Pública
    )
    .then(() => {
      alert("Mensaje enviado correctamente ✅");
      formRef.current.reset();
    }) 
    .catch((error) => {
      alert("Error al enviar el mensaje ❌");
      console.error(error);
    });
  };

        useEffect(() => {
          AOS.init({
            duration: 3000,
            once: false, // Esto hace que las animaciones se activen cada vez que se hace scroll
          });
        }, []);

  const handleBackClick = () => {
    window.location.href = "/"; // Redirige al inicio
  };

  // Función para compartir en YouTube
const shareYoutube = () => {
  // YouTube tampoco tiene una API directa para compartir contenido
  alert('YouTube no permite compartir contenido externo directamente.' +
        '\nPuedes compartir el enlace en la descripción de tus videos.');
};

  return (
    <section id="contact" className="container py-5 bg-light">
      <div className="row">
        {/* Formulario de Contacto - Ocupa 8 columnas en pantallas grandes */}
        <div className="col-lg-8 mt-5" data-aos="fade-up">
          <h2 className="text-center-contact mb-4">{t.contact}</h2>
          <form ref={formRef} onSubmit={sendEmail} className="mt-4">
            <div className="mb-3">
              <label className="form-label">{t.name}</label>
              <input type="text" name="from_name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">{t.email}</label>
              <input type="email" name="from_email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">{t.message}</label>
              <textarea name="message" className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-contact w-100">{t.send}</button>
          </form>
          {/* Contenedor para el botón */}
          <div className="mt-3">
            <button className="btn btn-contact" onClick={handleBackClick}>
            {t.back}
            </button>
          </div>
          
          {/* Compartir Redes Sociales */}
          <div className="row mt-4">
            <div className="col-lg-10 mx-auto">
              <div className="social-share mt-4">
                <p className="small text-center mb-2">{t.newsletter.shareText}</p>
                <div className="d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-outline-contact btn-sm"
                    aria-label={t.social.shareFacebook}
                    onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank')}
                  >
                    <FaFacebook className="me-1" /> {t.social.share}
                  </button>
                  <button
                    className="btn btn-outline-contact btn-sm"
                    aria-label={t.social.shareInstagram}
                    onClick={() => window.open('https://www.instagram.com/?url=' + encodeURIComponent(window.location.href), '_blank')}
                  >
                    <FaInstagram className="me-1" /> {t.social.share}
                  </button>
                  <button 
                    className="btn btn-outline-contact btn-sm" 
                    aria-label={t.social.shareYoutube}
                    onClick={shareYoutube}
                  >
                    <FaYoutube className="me-1" /> {t.social.share}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aside con Cards - Ocupa 4 columnas en pantallas grandes */}
        <aside className="col-lg-4 d-flex flex-column mt-4">
          <div className="card mb-3">
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

          <div className="card mb-3">
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

ContactForm.propTypes = {
  language: PropTypes.string.isRequired,
};

export default ContactForm;



