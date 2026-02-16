import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Compass, Clock } from 'lucide-react';

export const HistoricPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="historic-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1691061129344-1132de0f0da8)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#2D4F1E]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.historic.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.historic.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {t.historic.routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                data-testid={`historic-route-${index}`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 bg-[#2D4F1E] p-6 flex flex-col justify-center items-center">
                    <Compass className="w-10 h-10 text-[#EBA937] mb-3" />
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{route.period}</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="font-display text-2xl font-bold text-[#2D4F1E] mb-2">
                      {route.name}
                    </h3>
                    <p className="text-gray-600 text-lg">{route.desc}</p>
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
