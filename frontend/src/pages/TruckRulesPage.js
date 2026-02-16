import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Gauge, Ruler, Scale, Ban } from 'lucide-react';

const sectionIcons = [Gauge, Ruler, Scale, Ban];

export const TruckRulesPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="rules-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#2D4F1E]" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.rules.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.rules.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.rules.sections.map((section, index) => {
              const Icon = sectionIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="bg-[#2D4F1E] p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EBA937] rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#2D4F1E]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <ul className="p-6 space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#EBA937] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
