import { memo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Configuración de iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Crear icono violeta
const violetIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


const visitedSites = [
  { position: [-34.6206, -58.3738], name: 'San Telmo' },
  { position: [-34.6200, -58.3665], name: 'Puerto Madero' },
  { position: [-34.5948, -58.3973], name: 'Librería El Ateneo' },
  { position: [-37.9957, -57.5497], name: 'Mar del Plata' },
  { position: [-34.5702, -58.4233], name: 'Planetario' },
  { position: [-34.9186, -57.9750], name: 'República de los Niños' },
  { position: [-34.5625, -58.4583], name: 'Barrio Chino' },
  { position: [-34.5567, -58.5167], name: 'Tierra Santa' },
  { position: [-34.4251, -58.5797], name: 'Tigre' },
  { position: [-34.5882, -58.3945], name: 'Recoleta' },
  { position: [-34.6394, -58.3626], name: 'Caminito' },
  { position: [-34.5772, -58.4317], name: 'Expo Rural' },
  { position: [-34.5563, -58.5222], name: 'Tecnópolis' },
  { position: [-34.7058, -58.2532], name: 'Quilmes' },
  { position: [-34.5756, -58.4217], name: 'Jardín Japonés' },
  { position: [-34.5933, -58.4000], name: 'Av Santa Fe' },
  { position: [-23.5489, -46.6388], name: 'Sao Paulo' }, 
  { position: [-34.9212, -57.956], name: 'La Plata' },
  { position: [-34.5778, -58.4294], name: 'Distrito Arcos Palermo' },
  { position: [-34.7443, -58.5719], name: 'Campanópolis' },
  { position: [-37.3667, -56.8333], name: 'Pinamar' },
  { position: [-36.3603, -56.7342], name: 'San Clemente del Tuyú' },
  { position: [-41.1456, -71.3082], name: 'Bariloche' },
  { position: [-34.6486, -58.3600], name: 'Barrio Coreano' }
];


const MapComponent = ({ height = "100vh", zoom = 13, language = "es", isDarkMode = false }) => {
  const buenosAiresPosition = [-34.6037, -58.3816];

  // Efecto para detectar cambios en el dark mode
  useEffect(() => {
    // 2. Verificar si estamos en el cliente
    if (typeof window !== 'undefined') {
      const htmlElement = document.documentElement;
      if(isDarkMode) {
        htmlElement.classList.add('dark-mode');
      } else {
        htmlElement.classList.remove('dark-mode');
      }
    }
  }, [isDarkMode]);

    // Textos traducidos
    const titles = {
      es: "Sitios Visitados",
      en: "Visited Sites"
    };

  return (
    <section className="mt-5">
      <div id="map" className="container min-vh-100" style={{ position: "relative" }}>
        {/* Título con posicionamiento absoluto */}
        <div
          className={`map-title ${isDarkMode ? 'dark-title' : ''}`}
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            fontSize: "1.2em",
            padding: "0 2em",
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: isDarkMode ? "#000" : "inherit",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
          }}
        >
          {titles[language]}
        </div>
        <div className="row">
          <div className="col-12">
            <MapContainer 
              center={buenosAiresPosition} 
              zoom={zoom} 
              style={{ height, width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {visitedSites.map(({ position, name }) => (
                <Marker key={`marker-${name}`} position={position} icon={violetIcon}>
                  <Popup>
                    {name}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

MapComponent.propTypes = {
  height: PropTypes.string,
  zoom: PropTypes.number,
  language: PropTypes.string,
  isDarkMode: PropTypes.bool
};

export default memo(MapComponent);
  

