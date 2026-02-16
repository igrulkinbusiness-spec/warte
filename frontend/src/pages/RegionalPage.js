import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const RegionalPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="regional-page" className="min-h-screen">
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
              {t.regional.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.regional.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t.regional.description}
              </p>
              <div className="space-y-4">
                {t.regional.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                    data-testid={`regional-feature-${index}`}
                  >
                    <CheckCircle className="w-6 h-6 text-[#EBA937] flex-shrink-0" />
                    <span className="text-[#2D4F1E] font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1691061129344-1132de0f0da8"
                alt="Regional roads"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#2D4F1E] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-display font-bold text-[#EBA937]">5 000+</div>
                <div className="text-sm opacity-80">km</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
