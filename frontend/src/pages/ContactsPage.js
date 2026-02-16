import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export const ContactsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="contacts-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#9D2235] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.contacts.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.contacts.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {t.contacts.numbers.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between"
              >
                <span className="text-gray-700 font-medium">{contact.name}</span>
                <a 
                  href={`tel:${contact.number.replace(/\s/g, '')}`}
                  className="font-bold text-2xl text-[#9D2235] hover:text-[#7D1B2A] transition-colors"
                >
                  {contact.number}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
