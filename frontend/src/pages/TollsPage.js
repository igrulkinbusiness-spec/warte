import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CreditCard, Route } from 'lucide-react';

export const TollsPage = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="tolls-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-[#2D4F1E]" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.tolls.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.tolls.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F9F9F7] border-l-4 border-[#2D4F1E] p-6 rounded-r-xl">
            <p className="text-gray-700 text-lg">{t.tolls.description}</p>
          </div>
        </div>
      </section>

      {/* Toll Roads */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.tolls.roads.map((road, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-[#2D4F1E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Route className="w-6 h-6 text-[#EBA937]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-[#2D4F1E]">{road.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="px-3 py-1 bg-[#EBA937]/20 text-[#2D4F1E] rounded-full text-sm font-medium">
                        {road.toll}
                      </span>
                      <span className="text-gray-600">{road.length}</span>
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
