import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Info, AlertCircle } from 'lucide-react';

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="about-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center">
              <Info className="w-8 h-8 text-[#2D4F1E]" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.about.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.about.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            <div className="bg-[#EBA937]/10 border border-[#EBA937]/30 rounded-xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#EBA937] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{t.about.disclaimer}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
