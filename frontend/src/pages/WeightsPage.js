import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export const WeightsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="weights-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-[#2D4F1E]" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.weights.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.weights.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Limits */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {t.weights.limits.map((limit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-4 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <span className="text-gray-700 font-medium">{limit.param}</span>
                <span className="font-bold text-[#2D4F1E] bg-[#EBA937]/20 px-4 py-1 rounded-full">
                  {limit.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
