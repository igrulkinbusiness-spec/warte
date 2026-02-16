import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Route, ArrowRight } from 'lucide-react';

export const RoutesPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="routes-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#2D4F1E]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.routes.title}
            </motion.h1>
            <p className="text-xl text-white/80">{t.routes.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {t.routes.mainRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-32 bg-[#2D4F1E] p-6 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-[#EBA937]">{route.code}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="font-display text-xl font-bold text-[#2D4F1E] mb-2">{route.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <span>{route.from}</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>{route.to}</span>
                      <span className="mx-2">•</span>
                      <span className="font-semibold text-[#EBA937]">{route.length}</span>
                    </div>
                    <p className="text-gray-600">{route.desc}</p>
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
