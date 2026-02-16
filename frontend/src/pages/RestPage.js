import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const RestPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="rest-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#4A8C94] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.rest.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.rest.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {t.rest.rules.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{item.rule}</span>
                  <span className="font-bold text-[#2D4F1E] text-right">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
