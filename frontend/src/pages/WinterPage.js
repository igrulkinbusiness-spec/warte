import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Snowflake, CheckCircle, Truck } from 'lucide-react';

export const WinterPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="winter-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1669576583073-4d1f6c596078)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#4A8C94]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.winter.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t.winter.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#4A8C94] rounded-xl flex items-center justify-center">
                  <Snowflake className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#2D4F1E]">
                  {t.winter.title}
                </h2>
              </div>
              <div className="space-y-4">
                {t.winter.requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm"
                    data-testid={`winter-req-${index}`}
                  >
                    <CheckCircle className="w-5 h-5 text-[#4A8C94] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#2D4F1E] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#EBA937] rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-[#2D4F1E]" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">
                    {t.winter.services.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {t.winter.services.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 bg-white/10 p-4 rounded-xl"
                      data-testid={`winter-service-${index}`}
                    >
                      <span className="w-2 h-2 bg-[#EBA937] rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1669576583073-4d1f6c596078"
                  alt="Winter road"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
