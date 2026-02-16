import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Latvian cities
const cities = [
  { name: 'Rīga', lat: 56.9496, lng: 24.1052, pop: '614,618' },
  { name: 'Daugavpils', lat: 55.8714, lng: 26.5356, pop: '82,604' },
  { name: 'Liepāja', lat: 56.5047, lng: 21.0108, pop: '68,945' },
  { name: 'Jelgava', lat: 56.6511, lng: 23.7134, pop: '55,972' },
  { name: 'Jūrmala', lat: 56.9681, lng: 23.7704, pop: '49,325' },
  { name: 'Ventspils', lat: 57.3894, lng: 21.5647, pop: '34,377' },
  { name: 'Rēzekne', lat: 56.5099, lng: 27.3311, pop: '28,692' },
  { name: 'Valmiera', lat: 57.5384, lng: 25.4263, pop: '23,021' },
  { name: 'Sigulda', lat: 57.1537, lng: 24.8537, pop: '11,312' },
  { name: 'Cēsis', lat: 57.3114, lng: 25.2747, pop: '15,514' },
];

// Major highways (approximate coordinates)
const highways = {
  A1: {
    name: 'A1 Via Baltica',
    color: '#9D2235',
    coordinates: [
      [56.9496, 24.1052], // Riga
      [56.5, 24.1],
      [56.4084, 24.0219], // Bauska
    ]
  },
  A2: {
    name: 'A2 Riga-Estonia',
    color: '#2D4F1E',
    coordinates: [
      [56.9496, 24.1052], // Riga
      [57.1537, 24.8537], // Sigulda
      [57.5384, 25.4263], // Valmiera
    ]
  },
  A6: {
    name: 'A6 Riga-Daugavpils',
    color: '#EBA937',
    coordinates: [
      [56.9496, 24.1052], // Riga
      [56.5099, 27.3311], // Rezekne
      [55.8714, 26.5356], // Daugavpils
    ]
  },
  A9: {
    name: 'A9 Riga-Liepaja',
    color: '#4A8C94',
    coordinates: [
      [56.9496, 24.1052], // Riga
      [56.6511, 23.7134], // Jelgava
      [56.5047, 21.0108], // Liepaja
    ]
  },
  A10: {
    name: 'A10 Riga-Ventspils',
    color: '#9D2235',
    coordinates: [
      [56.9496, 24.1052], // Riga
      [56.9681, 23.7704], // Jurmala
      [57.3894, 21.5647], // Ventspils
    ]
  },
};

const createCityIcon = (isCapital) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: ${isCapital ? '20px' : '14px'};
      height: ${isCapital ? '20px' : '14px'};
      background: ${isCapital ? '#9D2235' : '#2D4F1E'};
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [isCapital ? 20 : 14, isCapital ? 20 : 14],
    iconAnchor: [isCapital ? 10 : 7, isCapital ? 10 : 7],
  });
};

export const MapPage = () => {
  const { t, language } = useLanguage();
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  return (
    <div data-testid="map-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {t.map.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80"
          >
            {t.map.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legend */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#9D2235] rounded-full border-2 border-white shadow" />
                <span className="text-sm text-gray-700">{t.map.legend.highways}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#2D4F1E] rounded-full border-2 border-white shadow" />
                <span className="text-sm text-gray-700">{t.map.legend.cities}</span>
              </div>
              {Object.entries(highways).slice(0, 4).map(([code, data]) => (
                <div key={code} className="flex items-center gap-2">
                  <div className="w-8 h-1 rounded" style={{ background: data.color }} />
                  <span className="text-sm text-gray-700">{code}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-[600px] rounded-3xl shadow-2xl border-4 border-white overflow-hidden" data-testid="map-container">
            {mapReady && (
              <MapContainer
                center={[56.8796, 24.6032]}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                
                {/* Highways */}
                {Object.entries(highways).map(([code, data]) => (
                  <Polyline
                    key={code}
                    positions={data.coordinates}
                    color={data.color}
                    weight={4}
                    opacity={0.8}
                  >
                    <Popup>
                      <strong>{data.name}</strong>
                    </Popup>
                  </Polyline>
                ))}
                
                {/* Cities */}
                {cities.map((city) => (
                  <Marker
                    key={city.name}
                    position={[city.lat, city.lng]}
                    icon={createCityIcon(city.name === 'Rīga')}
                  >
                    <Popup>
                      <div className="text-center">
                        <strong className="text-[#2D4F1E]">{city.name}</strong>
                        <br />
                        <span className="text-gray-600 text-sm">
                          {language === 'ru' ? 'Население' : language === 'lv' ? 'Iedzīvotāji' : 'Population'}: {city.pop}
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
