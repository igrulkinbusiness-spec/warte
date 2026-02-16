import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ParkingCircle, Shield, Wifi, Coffee, Wrench, Droplets } from 'lucide-react';

const featureIcons = {
  0: Shield,
  1: Droplets,
  2: Coffee,
  3: Wifi,
  4: Wrench,
};

export const ParkingPage = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="parking-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center">
              <ParkingCircle className="w-8 h-8 text-[#2D4F1E]" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.parking.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.parking.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {t.parking.features.map((feature, index) => {
              const Icon = featureIcons[index] || Shield;
              return (
                <div key={index} className="flex items-center gap-2 bg-[#F9F9F7] px-4 py-2 rounded-full">
                  <Icon className="w-5 h-5 text-[#EBA937]" />
                  <span className="text-[#2D4F1E] font-medium">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parking List */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.parking.parkingList.map((parking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-[#2D4F1E] p-4">
                  <h3 className="font-display text-xl font-bold text-white">{parking.name}</h3>
                  <p className="text-white/80">{parking.location}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#2D4F1E]">{parking.spaces}</div>
                      <div className="text-sm text-gray-600">
                        {language === 'ru' ? 'Мест' : language === 'lv' ? 'Vietas' : 'Spaces'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#2D4F1E]">{parking.services}</div>
                      <div className="text-sm text-gray-600">
                        {language === 'ru' ? 'Сервис' : language === 'lv' ? 'Serviss' : 'Services'}
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#EBA937]">{parking.price}</div>
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
