import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CloudSnow, AlertTriangle, CheckCircle } from 'lucide-react';

export const WeatherPage = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="weather-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4A8C94] to-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <CloudSnow className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.weather.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.weather.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {t.weather.tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#EBA937]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  {index === 0 || index === 1 ? (
                    <AlertTriangle className="w-5 h-5 text-[#EBA937]" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-[#2D4F1E]" />
                  )}
                </div>
                <p className="text-gray-700 pt-2">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#9D2235]/10 border border-[#9D2235]/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#9D2235] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#9D2235] mb-2">
                  {language === 'ru' ? 'Важно!' : language === 'lv' ? 'Svarīgi!' : 'Important!'}
                </h3>
                <p className="text-gray-700">
                  {language === 'ru' 
                    ? 'Перед рейсом всегда проверяйте дорожные условия на сайте lvceli.lv' 
                    : language === 'lv' 
                    ? 'Pirms reisa vienmēr pārbaudiet ceļu apstākļus vietnē lvceli.lv'
                    : 'Always check road conditions at lvceli.lv before your trip'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
