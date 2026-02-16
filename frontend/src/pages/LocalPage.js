import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const LocalPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="local-page" className="min-h-screen">
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
              {t.local.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.local.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center"
          >
            {t.local.description}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.local.types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                data-testid={`local-type-${index}`}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke={index === 0 ? '#2D4F1E' : index === 1 ? '#EBA937' : '#9D2235'}
                      strokeWidth="12"
                      strokeDasharray={`${parseFloat(type.percent) * 3.52} 352`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-[#2D4F1E]">{type.percent}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-[#2D4F1E] text-lg">{type.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
