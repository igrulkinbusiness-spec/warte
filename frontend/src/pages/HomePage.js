import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Route, Car, Building2, MapPin, History, Shield, 
  Snowflake, Bike, Compass, BookOpen, Camera, BarChart3, Info,
  ChevronRight, Zap, TreeDeciduous, Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';

const stats = [
  { key: 'totalRoads', value: '20 229', icon: Route },
  { key: 'highways', value: '1 647', icon: Car },
  { key: 'bridges', value: '958', icon: Building2 },
];

const featuredLinks = [
  { path: '/map', image: 'https://images.unsplash.com/photo-1554218507-cebb48b1a675', key: 'map' },
  { path: '/highways', image: 'https://images.unsplash.com/photo-1625547895189-c9323a5ea1a5', key: 'highways' },
  { path: '/attractions', image: 'https://images.unsplash.com/photo-1647596088007-506c49881470', key: 'attractions' },
];

const quickLinks = [
  { path: '/history', icon: History, color: '#2D4F1E' },
  { path: '/rules', icon: BookOpen, color: '#9D2235' },
  { path: '/safety', icon: Shield, color: '#EBA937' },
  { path: '/winter', icon: Snowflake, color: '#4A8C94' },
  { path: '/cycling', icon: Bike, color: '#2D4F1E' },
  { path: '/statistics', icon: BarChart3, color: '#9D2235' },
];

const homeContent = {
  ru: {
    quickAccess: 'Быстрый доступ',
    roadTypes: 'Типы дорог Латвии',
    roadTypesDesc: 'Узнайте о различных категориях дорог страны',
    interestingFacts: 'Интересные факты',
    factsAboutRoads: 'О дорогах Латвии',
    learnMore: 'Узнать больше',
    roadTypesList: [
      { title: 'Автомагистрали (A)', desc: '10 основных магистралей соединяют столицу с границами', count: '1 647 км', path: '/highways' },
      { title: 'Региональные (P)', desc: 'Более 100 дорог связывают районные центры', count: '5 321 км', path: '/regional' },
      { title: 'Местные дороги', desc: 'Обеспечивают доступ к населённым пунктам', count: '12 447 км', path: '/local' },
    ],
    facts: [
      { icon: TreeDeciduous, title: 'Via Baltica', desc: 'Часть европейского коридора E67, соединяющего Хельсинки и Прагу' },
      { icon: Clock, title: 'С 1200 года', desc: 'Ганзейские торговые пути через Ригу действуют более 800 лет' },
      { icon: Zap, title: '20 000+ км', desc: 'Общая протяжённость дорожной сети Латвии' },
      { icon: Building2, title: '958 мостов', desc: 'Включая знаменитый Вантовый мост в Риге' },
    ],
    mapPreview: 'Интерактивная карта',
    mapDesc: 'Исследуйте дорожную сеть Латвии с городами и маршрутами',
    openMap: 'Открыть карту',
    safetyTitle: 'Безопасность на дорогах',
    safetyDesc: 'Экстренные номера и важные правила',
    emergencyNumbers: 'Экстренные номера',
    police: 'Полиция',
    ambulance: 'Скорая',
    roadHelp: 'Дорожная помощь',
  },
  lv: {
    quickAccess: 'Ātrā piekļuve',
    roadTypes: 'Latvijas ceļu veidi',
    roadTypesDesc: 'Uzziniet par dažādām valsts ceļu kategorijām',
    interestingFacts: 'Interesanti fakti',
    factsAboutRoads: 'Par Latvijas ceļiem',
    learnMore: 'Uzzināt vairāk',
    roadTypesList: [
      { title: 'Automaģistrāles (A)', desc: '10 galvenās maģistrāles savieno galvaspilsētu ar robežām', count: '1 647 km', path: '/highways' },
      { title: 'Reģionālie (P)', desc: 'Vairāk nekā 100 ceļi savieno rajonu centrus', count: '5 321 km', path: '/regional' },
      { title: 'Vietējie ceļi', desc: 'Nodrošina piekļuvi apdzīvotām vietām', count: '12 447 km', path: '/local' },
    ],
    facts: [
      { icon: TreeDeciduous, title: 'Via Baltica', desc: 'Eiropas koridora E67 daļa, kas savieno Helsinkus un Prāgu' },
      { icon: Clock, title: 'Kopš 1200. gada', desc: 'Hanzas tirdzniecības ceļi caur Rīgu darbojas vairāk nekā 800 gadus' },
      { icon: Zap, title: '20 000+ km', desc: 'Latvijas ceļu tīkla kopējais garums' },
      { icon: Building2, title: '958 tilti', desc: 'Ieskaitot slaveno Vanšu tiltu Rīgā' },
    ],
    mapPreview: 'Interaktīvā karte',
    mapDesc: 'Izpētiet Latvijas ceļu tīklu ar pilsētām un maršrutiem',
    openMap: 'Atvērt karti',
    safetyTitle: 'Drošība uz ceļiem',
    safetyDesc: 'Ārkārtas numuri un svarīgi noteikumi',
    emergencyNumbers: 'Ārkārtas numuri',
    police: 'Policija',
    ambulance: 'Ātrā palīdzība',
    roadHelp: 'Ceļa palīdzība',
  },
  en: {
    quickAccess: 'Quick Access',
    roadTypes: 'Types of Roads in Latvia',
    roadTypesDesc: 'Learn about different road categories in the country',
    interestingFacts: 'Interesting Facts',
    factsAboutRoads: 'About Latvian Roads',
    learnMore: 'Learn More',
    roadTypesList: [
      { title: 'Highways (A)', desc: '10 main highways connect the capital with borders', count: '1,647 km', path: '/highways' },
      { title: 'Regional (P)', desc: 'Over 100 roads connect district centers', count: '5,321 km', path: '/regional' },
      { title: 'Local Roads', desc: 'Provide access to settlements', count: '12,447 km', path: '/local' },
    ],
    facts: [
      { icon: TreeDeciduous, title: 'Via Baltica', desc: 'Part of European corridor E67 connecting Helsinki and Prague' },
      { icon: Clock, title: 'Since 1200', desc: 'Hanseatic trade routes through Riga have been operating for over 800 years' },
      { icon: Zap, title: '20,000+ km', desc: 'Total length of Latvian road network' },
      { icon: Building2, title: '958 bridges', desc: 'Including the famous Cable-stayed bridge in Riga' },
    ],
    mapPreview: 'Interactive Map',
    mapDesc: 'Explore the Latvian road network with cities and routes',
    openMap: 'Open Map',
    safetyTitle: 'Road Safety',
    safetyDesc: 'Emergency numbers and important rules',
    emergencyNumbers: 'Emergency Numbers',
    police: 'Police',
    ambulance: 'Ambulance',
    roadHelp: 'Road Assistance',
  }
};

export const HomePage = () => {
  const { t, language } = useLanguage();
  const content = homeContent[language];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1554218507-cebb48b1a675)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#2D4F1E]/70" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[#EBA937] text-[#2D4F1E] rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              Latvia
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {t.home.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              {t.home.subtitle}
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-xl">
              {t.home.description}
            </p>
            <Link to="/map" data-testid="explore-btn">
              <Button className="bg-[#9D2235] hover:bg-[#7D1B2A] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                {t.home.explore}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#F9F9F7] to-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                  data-testid={`stat-${stat.key}`}
                >
                  <div className="w-16 h-16 bg-[#EBA937]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#EBA937]" />
                  </div>
                  <div className="text-4xl font-display font-bold text-[#2D4F1E] mb-2">
                    {stat.value} <span className="text-lg font-normal text-gray-500">{t.home.km}</span>
                  </div>
                  <div className="text-gray-600 font-medium">{t.home[stat.key]}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-[#2D4F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-10"
          >
            {content.quickAccess}
          </motion.h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    data-testid={`quick-${link.path.slice(1)}`}
                    className="group flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all hover:-translate-y-1"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: link.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium text-center">
                      {t.nav[link.path.slice(1)]}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Road Types Section */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D4F1E] mb-4">
              {content.roadTypes}
            </h2>
            <p className="text-gray-600 text-lg">{content.roadTypesDesc}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.roadTypesList.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={type.path}
                  data-testid={`road-type-${index}`}
                  className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="bg-[#2D4F1E] p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-white">{type.title}</h3>
                      <span className="text-[#EBA937] font-bold">{type.count}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{type.desc}</p>
                    <div className="flex items-center text-[#9D2235] font-semibold group-hover:translate-x-2 transition-transform">
                      {content.learnMore}
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interesting Facts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#EBA937]/20 text-[#EBA937] rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              {content.interestingFacts}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D4F1E]">
              {content.factsAboutRoads}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#F9F9F7] to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                  data-testid={`fact-${index}`}
                >
                  <div className="w-12 h-12 bg-[#2D4F1E] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#EBA937]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#2D4F1E] mb-2">{fact.title}</h3>
                  <p className="text-gray-600 text-sm">{fact.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#4A8C94]/20 text-[#4A8C94] rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
                {content.mapPreview}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D4F1E] mb-6">
                {content.mapDesc}
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#9D2235] rounded-full" />
                  <span className="text-gray-700">{t.map.legend.highways}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#2D4F1E] rounded-full" />
                  <span className="text-gray-700">{t.map.legend.cities}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-1 bg-[#EBA937] rounded" />
                  <span className="text-gray-700">A6 {t.nav.highways}</span>
                </div>
              </div>
              <Link to="/map" data-testid="map-preview-btn">
                <Button className="bg-[#4A8C94] hover:bg-[#3a7a82] text-white rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all">
                  {content.openMap}
                  <MapPin className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1554218507-cebb48b1a675"
                  alt="Latvia map preview"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4F1E]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5 text-[#EBA937]" />
                    <span className="font-semibold">10 {t.map.legend.cities}</span>
                    <span className="mx-2">•</span>
                    <Route className="w-5 h-5 text-[#EBA937]" />
                    <span className="font-semibold">5 {t.map.legend.highways}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Quick Info */}
      <section className="py-16 bg-[#9D2235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                {content.safetyTitle}
              </h2>
              <p className="text-white/80 text-lg mb-6">{content.safetyDesc}</p>
              <Link to="/safety" data-testid="safety-preview-btn">
                <Button className="bg-white text-[#9D2235] hover:bg-white/90 rounded-full px-8 py-4 font-semibold shadow-lg">
                  {content.learnMore}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">110</div>
                <div className="text-white/80 text-sm">{content.police}</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">113</div>
                <div className="text-white/80 text-sm">{content.ambulance}</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">1888</div>
                <div className="text-white/80 text-sm">{content.roadHelp}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Links */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-[#2D4F1E] text-center mb-16"
          >
            {t.home.explore}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={link.path}
                  data-testid={`featured-${link.key}`}
                  className="group block relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                >
                  <img 
                    src={link.image} 
                    alt={t.nav[link.key]}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D4F1E]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {t.nav[link.key]}
                    </h3>
                    <div className="flex items-center text-[#EBA937] font-semibold group-hover:translate-x-2 transition-transform">
                      {t.home.explore}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
