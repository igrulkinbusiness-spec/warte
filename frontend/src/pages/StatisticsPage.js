import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

export const StatisticsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="statistics-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {t.statistics.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80"
          >
            {t.statistics.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.statistics.facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all group"
                data-testid={`stat-fact-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#EBA937]/20 rounded-xl flex items-center justify-center group-hover:bg-[#EBA937] transition-colors">
                    <BarChart3 className="w-6 h-6 text-[#EBA937] group-hover:text-[#2D4F1E] transition-colors" />
                  </div>
                </div>
                <div className="font-display text-3xl font-bold text-[#2D4F1E] mb-2">
                  {fact.value}
                </div>
                <div className="text-gray-600">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
