import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Phone, AlertTriangle, Ambulance } from 'lucide-react';

export const SafetyPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="safety-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1768815021727-dbed2f7d6aed)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#2D4F1E]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.safety.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.safety.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tips */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#EBA937] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#2D4F1E]" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#2D4F1E]">
                  {t.safety.title}
                </h2>
              </div>
              <div className="space-y-4">
                {t.safety.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    data-testid={`safety-tip-${index}`}
                  >
                    <AlertTriangle className="w-5 h-5 text-[#EBA937] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Emergency */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#9D2235] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">
                    {t.safety.emergency.title}
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl" data-testid="emergency-police">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                      110
                    </div>
                    <span className="text-lg">{t.safety.emergency.police}</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl" data-testid="emergency-ambulance">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                      113
                    </div>
                    <span className="text-lg">{t.safety.emergency.ambulance}</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl" data-testid="emergency-roadside">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                      1888
                    </div>
                    <span className="text-lg">{t.safety.emergency.roadside}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
