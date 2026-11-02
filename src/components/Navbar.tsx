import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenAdmin?: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: '3D Process', href: '#process' },
    { name: 'Packages', href: '#packages' },
    { name: 'Villa Plots (100)', href: '#villa-plots' },
    { name: '3BHK Apartment', href: '#apartment' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-navy/90 via-navy/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Heading */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-navy-800 border border-gold/40 flex items-center justify-center p-1.5 shadow-md group-hover:border-gold transition-colors">
            <img src="/logo-icon.svg" alt="KNS Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-wider text-ivory group-hover:text-gold transition-colors">
              KNS CONSTRUCTION
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gold/90 font-sans uppercase -mt-0.5">
              & Real Estate
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-ivory/80 hover:text-gold transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Button - Call Direct */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="px-5 py-2.5 bg-gold hover:bg-gold-500 text-navy font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-md shadow-gold/20 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Builder</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-ivory hover:text-gold transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-900 border-b border-gold/20 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-1 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-ivory hover:text-gold py-2 border-b border-charcoal transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-silver">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Raghavendra Colony, Kondapur, Hyderabad</span>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full py-3 bg-gold text-navy font-semibold text-xs uppercase tracking-wider rounded text-center block shadow-md"
              >
                Call: {BRAND_INFO.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
