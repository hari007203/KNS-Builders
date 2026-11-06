import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { KNSAnimatedLogo } from './KNSAnimatedLogo';

interface FooterProps {
  onOpenAdmin: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B10] border-t border-gold/20 pt-16 sm:pt-20 pb-12 text-silver text-xs relative overflow-hidden">
      {/* Top Hairline Indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        {/* Main Footer Colophon Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <KNSAnimatedLogo size="md" />
              <div>
                <span className="font-serif text-base sm:text-lg font-semibold tracking-wider text-ivory block">
                  KNS CONSTRUCTION
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gold uppercase block -mt-0.5 font-mono">
                  & Real Estate
                </span>
              </div>
            </div>

            <p className="font-serif italic text-gold text-xs sm:text-sm font-normal">
              "{BRAND_INFO.tagline}"
            </p>

            <p className="text-silver/80 text-xs font-light leading-relaxed max-w-sm">
              Hyderabad’s premier architectural construction and real-estate practice. Directed by Kiran Gajbhare, delivering turnkey residential villas, gated plotted communities, and boutique apartment developments.
            </p>

            <div className="pt-2 border-t border-white/5">
              <span className="text-[11px] text-ivory block font-mono">
                Proprietor: <span className="text-gold font-semibold">{BRAND_INFO.proprietor}</span>
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
              DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#hero" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">About KNS</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">Services</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">3D Process</a></li>
              <li><a href="#packages" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">Pricing Dossier</a></li>
              <li><a href="#villa-plots" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">Villa Plots (100)</a></li>
              <li><a href="#apartment" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">3BHK Kondapur</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">Real Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors block py-0.5 touch-manipulation">Consultation</a></li>
            </ul>
          </div>

          {/* Key Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
              CORE DISCIPLINES
            </span>
            <ul className="space-y-2 text-xs font-light text-silver/90">
              <li className="hover:text-gold transition-colors py-0.5">Turnkey Residential Villas</li>
              <li className="hover:text-gold transition-colors py-0.5">Commercial Structural Framework</li>
              <li className="hover:text-gold transition-colors py-0.5">Architectural Planning & 3D Design</li>
              <li className="hover:text-gold transition-colors py-0.5">Gypsum Tray Cove False Ceilings</li>
              <li className="hover:text-gold transition-colors py-0.5">Bespoke Modular Kitchens & Wardrobes</li>
              <li className="hover:text-gold transition-colors py-0.5">Gated Villa Community Layouts</li>
              <li className="hover:text-gold transition-colors py-0.5">Hyderabad Real Estate Advisory</li>
            </ul>
          </div>

          {/* Office & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
              HEADQUARTERS
            </span>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-silver/90 leading-relaxed text-xs">
                  {BRAND_INFO.officeAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div className="flex flex-col font-mono text-ivory">
                  <a href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-gold transition-colors py-0.5 touch-manipulation">
                    {BRAND_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${BRAND_INFO.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-gold transition-colors py-0.5 touch-manipulation">
                    {BRAND_INFO.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="text-ivory hover:text-gold transition-colors break-all py-0.5 font-mono touch-manipulation">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* Admin Management Portal */}
            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#121720] border border-gold/30 text-gold hover:border-gold transition-colors text-xs font-mono cursor-pointer touch-manipulation"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Management Portal</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Elegant Gold Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Bottom Colophon Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1 text-[11px] text-silver/60 text-center sm:text-left font-mono">
          <div>
            © {new Date().getFullYear()} KNS Construction & Real Estate. All rights reserved. Proprietor: Kiran Gajbhare.
          </div>

          <div className="flex items-center gap-4 justify-center">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hover:text-gold transition-colors cursor-pointer py-1 touch-manipulation min-h-[36px] flex items-center"
              >
                Replay Intro Film
              </button>
            )}
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-gold transition-colors cursor-pointer py-1 touch-manipulation min-h-[36px]"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
