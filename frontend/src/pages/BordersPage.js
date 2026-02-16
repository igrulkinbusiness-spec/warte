import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const BordersPage = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="borders-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#4A8C94] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.borders.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.borders.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Border Crossings */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.borders.crossings.map((crossing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#2D4F1E]">{crossing.name}</h3>
                      <p className="text-gray-600">{crossing.country}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      crossing.type.includes('EU') || crossing.type.includes('ES') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {crossing.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#EBA937]" />
                      <div>
                        <div className="text-sm text-gray-600">
                          {language === 'ru' ? 'Ожидание' : language === 'lv' ? 'Gaidīšana' : 'Wait time'}
                        </div>
                        <div className="font-semibold text-[#2D4F1E]">{crossing.wait}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#2D4F1E]" />
                      <div>
                        <div className="text-sm text-gray-600">
                          {language === 'ru' ? 'Режим' : language === 'lv' ? 'Režīms' : 'Hours'}
                        </div>
                        <div className="font-semibold text-[#2D4F1E]">{crossing.hours}</div>
                      </div>
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
