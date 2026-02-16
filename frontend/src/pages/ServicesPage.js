import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Wrench, Phone } from 'lucide-react';

export const ServicesPage = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="services-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#4A8C94] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.services.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.services.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {t.services.serviceList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#2D4F1E] mb-1">
                        {service.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-[#4A8C94]/20 text-[#4A8C94] rounded-full text-sm font-medium">
                        {service.type}
                      </span>
                    </div>
                    <a 
                      href={`tel:${service.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 bg-[#2D4F1E] text-white px-4 py-2 rounded-full hover:bg-[#1D3F0E] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">{service.phone}</span>
                    </a>
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
