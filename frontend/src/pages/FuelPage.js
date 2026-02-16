import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Fuel, CheckCircle, XCircle } from 'lucide-react';

export const FuelPage = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="fuel-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#EBA937] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#2D4F1E] rounded-2xl flex items-center justify-center">
              <Fuel className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-[#2D4F1E]"
              >
                {t.fuel.title}
              </motion.h1>
              <p className="text-[#2D4F1E]/80 text-lg">{t.fuel.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stations */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-[#2D4F1E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">
                    {language === 'ru' ? 'Сеть' : language === 'lv' ? 'Tīkls' : 'Brand'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {language === 'ru' ? 'Станций' : language === 'lv' ? 'Stacijas' : 'Stations'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">Diesel</th>
                  <th className="px-6 py-4 text-center font-semibold">AdBlue</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {language === 'ru' ? 'Стоянка' : language === 'lv' ? 'Stāvvieta' : 'Parking'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.fuel.stations.map((station, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-bold text-[#2D4F1E]">{station.brand}</td>
                    <td className="px-6 py-4 text-center font-semibold">{station.count}</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      {station.adblue === 'Yes' || station.adblue === 'Да' || station.adblue === 'Jā' ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-orange-500">~</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block bg-[#2D4F1E] text-white px-6 py-3 rounded-full font-semibold">
              {t.fuel.avgPrice}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
