import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Ruler } from 'lucide-react';

export const BridgesPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="bridges-page" className="min-h-screen">
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
              {t.bridges.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.bridges.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bridges Grid */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.bridges.notable.map((bridge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
                data-testid={`bridge-${index}`}
              >
                <div className="h-48 bg-gradient-to-br from-[#2D4F1E] to-[#4A8C94] flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[#2D4F1E] mb-4 group-hover:text-[#9D2235] transition-colors">
                    {bridge.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#EBA937]" />
                      <span>{bridge.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-[#EBA937]" />
                      <span>{bridge.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Ruler className="w-4 h-4 text-[#EBA937]" />
                      <span>{bridge.length}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
