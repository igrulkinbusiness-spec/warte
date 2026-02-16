import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Route, ArrowRight } from 'lucide-react';

export const HighwaysPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="highways-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1625547895189-c9323a5ea1a5)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#2D4F1E]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.highways.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.highways.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Roads Grid */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.highways.roads.map((road, index) => (
              <motion.div
                key={road.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
                data-testid={`highway-${road.code}`}
              >
                <div className="flex items-stretch">
                  <div className="w-24 bg-[#2D4F1E] flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-[#EBA937]">{road.code}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="font-semibold text-[#2D4F1E] mb-1 group-hover:text-[#9D2235] transition-colors">
                      {road.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{road.desc}</p>
                    <div className="flex items-center text-[#EBA937] font-semibold text-sm">
                      <Route className="w-4 h-4 mr-1" />
                      {road.length}
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
