// src/components/ProjectsMapContainer.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const FlyToProperty = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 8, { duration: 1.5 });
    }
  }, [lat, lng]);
  return null;
};

const ProjectsMapContainer = ({ properties = [], hovered }) => {
  const center = hovered ? [hovered.lat, hovered.lng] : [12.9716, 77.5946]; // Default: Bengaluru

  return (
    <MapContainer
      center={center}
      zoom={2}
      style={{ height: '90vh', width: '100%', borderRadius: '10px' }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {properties.map((prop) => (
        <Marker key={prop.id} position={[prop.lat, prop.lng]}>
          <Popup>{prop.name}</Popup>
        </Marker>
      ))}
      {hovered && <FlyToProperty lat={hovered.lat} lng={hovered.lng} />}
    </MapContainer>
  );
};

export default ProjectsMapContainer;
