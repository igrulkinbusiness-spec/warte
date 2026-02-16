import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Truck, CreditCard, Route, ParkingCircle, Shield, Map,
  MapPin, Fuel, Scale, Clock, Wrench, CloudSnow, Phone, Info,
  Menu, X, Globe, ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

const navItems = [
  { path: '/', icon: Home, key: 'home' },
  { path: '/vignettes', icon: CreditCard, key: 'vignettes' },
  { path: '/routes', icon: Route, key: 'routes' },
  { path: '/parking', icon: ParkingCircle, key: 'parking' },
  { path: '/rules', icon: Shield, key: 'rules' },
  { path: '/map', icon: Map, key: 'map' },
  { path: '/tolls', icon: CreditCard, key: 'tolls' },
  { path: '/borders', icon: MapPin, key: 'borders' },
  { path: '/fuel', icon: Fuel, key: 'fuel' },
  { path: '/weights', icon: Scale, key: 'weights' },
  { path: '/rest', icon: Clock, key: 'rest' },
  { path: '/services', icon: Wrench, key: 'services' },
  { path: '/weather', icon: CloudSnow, key: 'weather' },
  { path: '/contacts', icon: Phone, key: 'contacts' },
  { path: '/about', icon: Info, key: 'about' },
];

const languages = [
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export const Layout = ({ children }) => {
  const { t, language, changeLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language);

  const getSiteName = () => {
    switch(language) {
      case 'ru': return 'Грузоперевозки Латвия';
      case 'lv': return 'Kravas Latvija';
      default: return 'Trucking Latvia';
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2D4F1E] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
              <div className="w-10 h-10 bg-[#EBA937] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6 text-[#2D4F1E]" />
              </div>
              <span className="font-display text-xl font-bold text-white hidden sm:block">
                {getSiteName()}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 8).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-testid={`nav-${item.key}`}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? 'bg-[#EBA937] text-[#2D4F1E]' 
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden xl:inline">{t.nav[item.key]}</span>
                  </Link>
                );
              })}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white/90 hover:bg-white/10 hover:text-white px-3 py-2 h-auto"
                    data-testid="more-menu-trigger"
                  >
                    <span className="text-sm font-medium">+{navItems.length - 8}</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                  {navItems.slice(8).map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link
                          to={item.path}
                          data-testid={`nav-dropdown-${item.key}`}
                          className={`flex items-center gap-2 ${isActive ? 'text-[#9D2235] font-semibold' : ''}`}
                        >
                          <Icon className="w-4 h-4" />
                          {t.nav[item.key]}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10 px-3 py-2 h-auto"
                    data-testid="language-switcher"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{currentLang?.code.toUpperCase()}</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      data-testid={`lang-${lang.code}`}
                      className={language === lang.code ? 'bg-[#EBA937]/20 text-[#2D4F1E] font-semibold' : ''}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                data-testid="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#2D4F1E] border-t border-white/10 overflow-hidden"
            >
              <nav className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.key}`}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl text-center transition-all ${
                        isActive 
                          ? 'bg-[#EBA937] text-[#2D4F1E]' 
                          : 'text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-medium">{t.nav[item.key]}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D4F1E] text-white py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#EBA937] rounded-full flex items-center justify-center">
                <Truck className="w-7 h-7 text-[#2D4F1E]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">
                  {getSiteName()}
                </h3>
                <p className="text-white/70 text-sm">{t.footer.rights}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm text-center md:text-right">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
