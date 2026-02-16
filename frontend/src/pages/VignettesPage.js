import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CreditCard, AlertTriangle, MapPin, Fuel, Globe, Smartphone } from 'lucide-react';

export const VignettesPage = () => {
  const { t, language } = useLanguage();

  const purchaseLocations = {
    lv: [
      { icon: Globe, text: 'Tiešsaistē portālā latviasvinjete.lv' },
      { icon: Fuel, text: 'Circle K, Neste, Viada degvielas uzpildes stacijās' },
      { icon: MapPin, text: 'Robežpunktos' },
      { icon: Smartphone, text: 'Mobilajā lietotnē' }
    ],
    en: [
      { icon: Globe, text: 'Online at latviasvinjete.lv' },
      { icon: Fuel, text: 'At Circle K, Neste, Viada gas stations' },
      { icon: MapPin, text: 'At border crossings' },
      { icon: Smartphone, text: 'Via mobile app' }
    ],
    ru: [
      { icon: Globe, text: 'Онлайн на сайте latviasvinjete.lv' },
      { icon: Fuel, text: 'На заправках Circle K, Neste, Viada' },
      { icon: MapPin, text: 'На пограничных пунктах' },
      { icon: Smartphone, text: 'Через мобильное приложение' }
    ]
  };

  const sectionTitles = {
    lv: { where: 'Kur iegādāties', prices: 'Tarifi', category: 'Kategorija', day: '1 diena', week: '1 nedēļa', month: '1 mēnesis', year: '1 gads' },
    en: { where: 'Where to purchase', prices: 'Prices', category: 'Category', day: '1 day', week: '1 week', month: '1 month', year: '1 year' },
    ru: { where: 'Где приобрести', prices: 'Тарифы', category: 'Категория', day: '1 день', week: '1 неделя', month: '1 месяц', year: '1 год' }
  };

  const titles = sectionTitles[language] || sectionTitles.lv;
  const locations = purchaseLocations[language] || purchaseLocations.lv;

  return (
    <div data-testid="vignettes-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#9D2235] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.vignettes.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.vignettes.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EBA937]/10 border-l-4 border-[#EBA937] p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#EBA937] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#2D4F1E] font-semibold mb-2">{t.vignettes.important}</p>
                <p className="text-gray-700">{t.vignettes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#2D4F1E] mb-8 text-center">
            {titles.prices}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-[#2D4F1E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">{titles.category}</th>
                  <th className="px-6 py-4 text-center font-semibold">{titles.day}</th>
                  <th className="px-6 py-4 text-center font-semibold">{titles.week}</th>
                  <th className="px-6 py-4 text-center font-semibold">{titles.month}</th>
                  <th className="px-6 py-4 text-center font-semibold">{titles.year}</th>
                </tr>
              </thead>
              <tbody>
                {t.vignettes.priceList.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-[#2D4F1E]">{item.category}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#9D2235]">{item.day}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#9D2235]">{item.week}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#9D2235]">{item.month}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#EBA937]">{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where to Purchase - Information Only */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#2D4F1E] mb-8 text-center">
            {titles.where}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F9F9F7] p-6 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-[#2D4F1E] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#EBA937]" />
                  </div>
                  <p className="text-gray-700">{location.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
