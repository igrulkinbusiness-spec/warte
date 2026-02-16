import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Truck, MapPin, CreditCard, Route, Shield, Fuel,
  ParkingCircle, Scale, Clock, Wrench, Phone
} from 'lucide-react';
import { Button } from '../components/ui/button';

const stats = [
  { key: 'totalRoads', value: '20 229', icon: Route },
  { key: 'trucks', value: '45+', icon: ParkingCircle },
  { key: 'borders', value: '8', icon: MapPin },
];

const quickLinks = [
  { path: '/vignettes', icon: CreditCard, label: 'vignettes', color: '#9D2235' },
  { path: '/routes', icon: Route, label: 'routes', color: '#2D4F1E' },
  { path: '/parking', icon: ParkingCircle, label: 'parking', color: '#EBA937' },
  { path: '/rules', icon: Shield, label: 'rules', color: '#4A8C94' },
  { path: '/fuel', icon: Fuel, label: 'fuel', color: '#2D4F1E' },
  { path: '/borders', icon: MapPin, label: 'borders', color: '#9D2235' },
];

const features = [
  { icon: CreditCard, title: 'Виньетки', desc: 'Тарифы и где купить', path: '/vignettes' },
  { icon: ParkingCircle, title: 'Стоянки', desc: 'Охраняемые паркинги', path: '/parking' },
  { icon: Scale, title: 'Габариты', desc: 'Весовые ограничения', path: '/weights' },
  { icon: Clock, title: 'Режим отдыха', desc: 'Требования ЕС', path: '/rest' },
];

export const HomePage = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#2D4F1E]/80" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#EBA937] rounded-2xl flex items-center justify-center">
                <Truck className="w-8 h-8 text-[#2D4F1E]" />
              </div>
              <span className="px-4 py-1.5 bg-[#9D2235] text-white rounded-full text-sm font-semibold uppercase tracking-wider">
                Latvia Trucking
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {t.home.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
              {t.home.subtitle}
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-xl">
              {t.home.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/vignettes" data-testid="vignettes-btn">
                <Button className="bg-[#EBA937] hover:bg-[#d49a30] text-[#2D4F1E] rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <CreditCard className="w-5 h-5 mr-2" />
                  {t.nav.vignettes}
                </Button>
              </Link>
              <Link to="/map" data-testid="map-btn">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                  <MapPin className="w-5 h-5 mr-2" />
                  {t.nav.map}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2D4F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8"
                  data-testid={`stat-${stat.key}`}
                >
                  <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#2D4F1E]" />
                  </div>
                  <div className="text-4xl font-display font-bold text-white mb-2">
                    {stat.value} <span className="text-lg font-normal text-white/70">{t.home[stat.key]}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    data-testid={`quick-${link.label}`}
                    className="group flex flex-col items-center gap-3 p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all hover:-translate-y-1"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: link.color }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-[#2D4F1E] font-semibold text-center">
                      {t.nav[link.label]}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-[#2D4F1E] text-center mb-12"
          >
            {t.features.title}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CreditCard, key: 'vignettes', path: '/vignettes' },
              { icon: ParkingCircle, key: 'parking', path: '/parking' },
              { icon: Scale, key: 'weights', path: '/weights' },
              { icon: Clock, key: 'rest', path: '/rest' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              const featureData = t.features[feature.key];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={feature.path}
                    className="group block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-[#EBA937]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#EBA937] transition-colors">
                      <Icon className="w-6 h-6 text-[#EBA937] group-hover:text-[#2D4F1E] transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#2D4F1E] mb-2">{featureData.title}</h3>
                    <p className="text-gray-600 text-sm">{featureData.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-[#9D2235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                {t.emergency.title}
              </h2>
              <p className="text-white/80">
                {t.emergency.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur px-6 py-4 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-white">112</div>
                <div className="text-white/80 text-sm">{t.emergency.services}</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-4 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-white">110</div>
                <div className="text-white/80 text-sm">{t.emergency.police}</div>
              </div>
              <Link to="/contacts">
                <Button className="bg-white text-[#9D2235] hover:bg-white/90 rounded-full px-6 py-4 h-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  {t.nav.contacts}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
