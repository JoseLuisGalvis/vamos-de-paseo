import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import AboutSection from "./components/AboutSection";
import LatestVideoSection from "./components/LatestVideoSection";
import FeaturedDestinationsSection from "./components/FeaturedDestinationsSection";
import CommunitySection from "./components/CommunitySection";
import ContactForm from "./components/ContactForm";
import MapComponent from "./components/MapComponent";
import Footer from "./components/Footer";
import "./App.css";

// Importamos los archivos de medios
import videoFile from "./assets/video/video.mp4";

function App() {
  const [language, setLanguage] = useState("es"); // Estado para el idioma
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro

  // Función para cambiar el idioma
  const toggleLanguage = (lang) => {
    console.log("Cambiando idioma a:", lang);
    setLanguage(lang);
  };

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Aplica la clase al body
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar con opciones de idioma y modo oscuro */}
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main>
        {/* Sección con video de fondo */}
        <VideoBackground videoSrc={videoFile} language={language} />

        {/* Secciones de contenido */}
        <AboutSection language={language} darkMode={darkMode} />
        <LatestVideoSection language={language} darkMode={darkMode} />
        <FeaturedDestinationsSection language={language} darkMode={darkMode} />
        <CommunitySection language={language} darkMode={darkMode} />

        {/* Formulario de contacto */}
        <ContactForm language={language} />
        {/* Mapa */}
        <MapComponent language={language} />
      </main>

      {/* Footer con idioma */}
      <Footer language={language} />
    </div>
  );
}

export default App;




