import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Info, ExternalLink, AlertCircle } from 'lucide-react';

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="about-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center">
              <Info className="w-8 h-8 text-[#2D4F1E]" />
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white"
            >
              {t.about.title}
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80"
          >
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 mb-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            <div className="bg-[#EBA937]/10 border border-[#EBA937]/30 rounded-xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#EBA937] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{t.about.disclaimer}</p>
            </div>
          </motion.div>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <h2 className="font-display text-2xl font-bold text-[#2D4F1E] mb-6">
              {t.about.sources ? 'Sources' : 'Источники'}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {t.about.sources.map((source, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-[#F9F9F7] p-4 rounded-xl"
                  data-testid={`source-${index}`}
                >
                  <ExternalLink className="w-4 h-4 text-[#4A8C94]" />
                  <span className="text-gray-700">{source}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
