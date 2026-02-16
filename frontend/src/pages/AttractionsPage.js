import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Route } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1554218507-cebb48b1a675',
  'https://images.unsplash.com/photo-1647596088007-506c49881470',
  'https://images.unsplash.com/photo-1625547895189-c9323a5ea1a5',
  'https://images.unsplash.com/photo-1691061129344-1132de0f0da8',
  'https://images.unsplash.com/photo-1669576583073-4d1f6c596078',
  'https://images.unsplash.com/photo-1768815021727-dbed2f7d6aed',
];

export const AttractionsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="attractions-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1647596088007-506c49881470)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#2D4F1E]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.attractions.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.attractions.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.attractions.places.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                data-testid={`attraction-${index}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={images[index % images.length]} 
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#EBA937] px-3 py-1 rounded-full flex items-center gap-1">
                    <Route className="w-3 h-3 text-[#2D4F1E]" />
                    <span className="text-sm font-bold text-[#2D4F1E]">{place.route}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[#2D4F1E] mb-2 group-hover:text-[#9D2235] transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-gray-600">{place.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
