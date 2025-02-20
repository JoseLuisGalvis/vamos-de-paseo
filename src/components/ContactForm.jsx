import { useEffect, useRef } from 'react';
import 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import "./ContactForm.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import aviso1 from '../assets/images/EspacioDisponible.png';
import ws from '../assets/images/ws.png';

import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const translations = {
  es: {
    contact: "Contacto",
    name: "Nombre",
    lastName: "Apellidos",
    country: "País",
    state: "Estado o Provincia",
    municipality: "Municipio",
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
    placeholderMessage:
      "Por favor incluya el lugar que desea evaluemos para visitar o el mensaje con su aporte o sugerencia. Gracias!",
  },
  en: {
    contact: "Contact",
    name: "Name",
    lastName: "Last Name",
    country: "Country",
    state: "State or Province",
    municipality: "Municipality",
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
    placeholderMessage:
      "Please include the place you would like us to evaluate for a visit or your message with contributions or suggestions. Thank you!",
  },
};


const ContactForm = ({ language }) => {
  const t = translations[language];
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_6wxs1pt',
      'template_t1egspu',
      formRef.current,
      'deQ8LIjzglGZDYhFR'
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
      once: false,
    });
  }, []);

  const handleBackClick = () => {
    window.location.href = "/";
  };

  return (
    <section id="contact" className="container py-5 bg-light">
      <div className="row">
        <div className="col-lg-8 mt-5" data-aos="fade-up">
          <h2 className="text-center-contact mb-4">{t.contact}</h2>
          <form ref={formRef} onSubmit={sendEmail} className="mt-4">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">{t.name}</label>
                <input type="text" name="from_name" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">{t.lastName}</label>
                <input type="text" name="from_lastname" className="form-control" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">{t.email}</label>
                <input type="email" name="from_email" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">{t.country}</label>
                <input type="text" name="country" className="form-control" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">{t.state}</label>
                <input type="text" name="state" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">{t.municipality}</label>
                <input type="text" name="municipality" className="form-control" required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">{t.message}</label>
              <textarea 
                name="message" 
                className="form-control" 
                rows="4" 
                required 
                placeholder={t.placeholderMessage}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-contact w-100">{t.send}</button>
          </form>

          <div className="mt-3">
            <button className="btn btn-contact" onClick={handleBackClick}>
            {t.back}
            </button>
          </div>
          <div className="mt-3">
              <div className="d-flex justify-content-end">
                <a 
                  href="https://chat.whatsapp.com/KXAkElkaUt6GW98ninPMgk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-contact d-flex align-items-center gap-2"
                >
                  <img 
                    src={ws}
                    alt="WhatsApp" 
                    style={{ width: '24px', height: '24px' }}
                  />
                  {t.contact}
                </a>
              </div>
          </div>
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
                  <a 
                    href="https://www.youtube.com/@YrsaBello" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-contact btn-sm"
                    aria-label={t.social.shareYoutube}
                  >
                    <FaYoutube className="me-1" /> {t.social.share}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="col-lg-4 d-flex flex-column mt-4">
          <div className="card mb-3">
            <div className="card-body">
              <img
                src={aviso1}
                alt="Yrsa Bello"
                className="img-fluid ad-image"
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
                src={aviso1}
                alt="Yrsa Bello"
                className="img-fluid ad-image"
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



