import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Bike, Route, Lightbulb } from 'lucide-react';

export const CyclingPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="cycling-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#EBA937] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#2D4F1E] rounded-2xl flex items-center justify-center">
              <Bike className="w-8 h-8 text-white" />
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-[#2D4F1E]"
            >
              {t.cycling.title}
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2D4F1E]/80"
          >
            {t.cycling.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Routes */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {t.cycling.routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
                data-testid={`cycling-route-${index}`}
              >
                <div className="bg-[#2D4F1E] p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Route className="w-5 h-5 text-[#EBA937]" />
                    <span className="text-[#EBA937] font-bold">{route.length}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {route.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{route.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#EBA937]/20 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#EBA937]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#2D4F1E]">
                {t.cycling.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.cycling.tips.map((tip, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-[#F9F9F7] p-4 rounded-xl"
                  data-testid={`cycling-tip-${index}`}
                >
                  <span className="w-8 h-8 bg-[#EBA937] rounded-full flex items-center justify-center text-[#2D4F1E] font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
