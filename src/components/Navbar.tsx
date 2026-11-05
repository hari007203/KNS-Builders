import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { KNSAnimatedLogo } from './KNSAnimatedLogo';

interface NavbarProps {
  onOpenAdmin?: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = [
        'hero',
        'about',
        'services',
        'process',
        'packages',
        'villa-plots',
        'apartment',
        'gallery',
        'contact',
      ];
      const scrollPos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: '3D Process', href: '#process', id: 'process' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Villa Plots (100)', href: '#villa-plots', id: 'villa-plots' },
    { name: '3BHK Apartment', href: '#apartment', id: 'apartment' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101820]/95 backdrop-blur-md border-b border-[#C6A46A]/20 py-2.5 sm:py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#101820]/95 via-[#101820]/60 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Heading */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group select-none touch-manipulation">
          <KNSAnimatedLogo size="sm" />

          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-lg tracking-[0.12em] sm:tracking-[0.14em] text-ivory font-medium group-hover:text-gold transition-colors duration-200">
              KNS CONSTRUCTION
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.24em] sm:tracking-[0.28em] text-gold/90 font-sans uppercase -mt-0.5">
              & Real Estate
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Preserved Exactly) */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-gold font-semibold'
                    : 'text-ivory/75 hover:text-gold font-medium'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="group px-4 py-2 bg-gradient-to-r from-gold via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold text-navy font-semibold text-[11px] uppercase tracking-[0.15em] rounded transition-all duration-300 shadow-md shadow-gold/20 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Call Builder</span>
          </a>
        </div>

        {/* Mobile Call & Hamburger Controls */}
        <div className="flex items-center gap-1.5 xl:hidden">
          {/* Quick Call Icon for mobile visitors */}
          <a
            href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="p-2 sm:p-2.5 rounded-full bg-gold/15 text-gold border border-gold/30 hover:bg-gold hover:text-navy transition-all duration-200 flex items-center justify-center min-w-[40px] min-h-[40px] touch-manipulation"
            aria-label="Call Builder Directly"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger Button with comfortable 44px+ touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-ivory hover:text-gold transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle Mobile Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer - Full-screen / Smooth Drawer for single-handed mobile UX */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden fixed inset-x-0 top-[60px] sm:top-[70px] bottom-0 bg-[#101820]/98 backdrop-blur-2xl border-b border-gold/25 px-6 py-6 shadow-2xl overflow-y-auto flex flex-col justify-between z-50"
          >
            <div className="grid grid-cols-1 gap-1 divide-y divide-charcoal/40">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs sm:text-sm uppercase tracking-[0.16em] py-3.5 transition-colors flex items-center justify-between touch-manipulation min-h-[48px] ${
                    activeSection === link.id ? 'text-gold font-bold' : 'text-ivory/80 hover:text-gold font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    )}
                    <span>{link.name}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gold/60" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Drawer Footer with Contact Information */}
            <div className="pt-6 mt-4 border-t border-gold/15 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-silver">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">Raghavendra Colony, Kondapur, Hyderabad</span>
              </div>

              <div className="pt-1">
                <a
                  href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="w-full py-3.5 bg-gradient-to-r from-gold via-gold-500 to-gold-600 text-navy font-semibold text-xs uppercase tracking-widest rounded-lg text-center block shadow-lg shadow-gold/20 touch-manipulation min-h-[46px] flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Kiran Gajbhare: {BRAND_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
