import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

export const VignettesPage = () => {
  const { t, language } = useLanguage();

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
            {t.vignettes.prices}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-[#2D4F1E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">
                    {language === 'ru' ? 'Категория' : language === 'lv' ? 'Kategorija' : 'Category'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {language === 'ru' ? '1 день' : language === 'lv' ? '1 diena' : '1 day'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {language === 'ru' ? '1 неделя' : language === 'lv' ? '1 nedēļa' : '1 week'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {language === 'ru' ? '1 месяц' : language === 'lv' ? '1 mēnesis' : '1 month'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {language === 'ru' ? '1 год' : language === 'lv' ? '1 gads' : '1 year'}
                  </th>
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

      {/* How to Buy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#2D4F1E] mb-8 text-center">
            {t.vignettes.howToBuy}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.vignettes.buySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F9F9F7] p-6 rounded-2xl"
              >
                <div className="w-10 h-10 bg-[#2D4F1E] rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="https://latviasvinjete.lv" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#9D2235] hover:bg-[#7D1B2A] text-white rounded-full px-8 py-4">
                <ExternalLink className="w-5 h-5 mr-2" />
                {language === 'ru' ? 'Купить онлайн' : language === 'lv' ? 'Pirkt tiešsaistē' : 'Buy Online'}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
