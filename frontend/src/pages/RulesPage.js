import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Gauge, Lightbulb, ShieldCheck, Wine } from 'lucide-react';

const icons = [Gauge, Lightbulb, ShieldCheck, Wine];

export const RulesPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="rules-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1625547895189-c9323a5ea1a5)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#2D4F1E]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.rules.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.rules.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.rules.sections.map((section, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  data-testid={`rule-section-${index}`}
                >
                  <div className="bg-[#2D4F1E] p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EBA937] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#2D4F1E]" />
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
