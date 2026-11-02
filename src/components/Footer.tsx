import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface FooterProps {
  onOpenAdmin: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 border-t border-gold/20 pt-20 pb-12 text-silver text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800 border border-gold/40 flex items-center justify-center p-1.5 shadow-md">
                <img src="/logo-icon.svg" alt="KNS Construction Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold tracking-wider text-ivory block">
                  KNS CONSTRUCTION
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase block -mt-0.5">
                  & Real Estate
                </span>
              </div>
            </div>

            <p className="font-serif italic text-gold text-sm font-normal">
              "{BRAND_INFO.tagline}"
            </p>

            <p className="text-silver/80 text-xs font-light leading-relaxed max-w-sm">
              Hyderabad’s premier architectural construction and real-estate group. Led by Kiran Gajbhare, delivering turnkey residential villas, gated plotted layouts, and boutique apartments.
            </p>

            <div className="pt-2">
              <span className="text-[11px] text-ivory block font-mono">
                Proprietor: <span className="text-gold font-semibold">{BRAND_INFO.proprietor}</span>
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold font-mono block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About KNS</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors">3D Process</a></li>
              <li><a href="#packages" className="hover:text-gold transition-colors">Packages</a></li>
              <li><a href="#villa-plots" className="hover:text-gold transition-colors">Villa Plots (100)</a></li>
              <li><a href="#apartment" className="hover:text-gold transition-colors">3BHK Apartment</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Real Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold font-mono block">
              Core Capabilities
            </span>
            <ul className="space-y-2">
              <li className="hover:text-gold transition-colors">Turnkey Residential Villas</li>
              <li className="hover:text-gold transition-colors">Commercial Structural Framework</li>
              <li className="hover:text-gold transition-colors">Architectural Planning & 3D Design</li>
              <li className="hover:text-gold transition-colors">Gypsum Tray False Ceilings</li>
              <li className="hover:text-gold transition-colors">Bespoke Modular Kitchens & Wardrobes</li>
              <li className="hover:text-gold transition-colors">Gated Villa Community Layouts</li>
              <li className="hover:text-gold transition-colors">Hyderabad Real Estate Advisory</li>
            </ul>
          </div>

          {/* Office & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold font-mono block">
              Office & Contact
            </span>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-silver/90 leading-relaxed">
                  {BRAND_INFO.officeAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <div className="flex flex-col font-mono text-ivory">
                  <a href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-gold">
                    {BRAND_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${BRAND_INFO.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-gold">
                    {BRAND_INFO.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="text-ivory hover:text-gold transition-colors break-all">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* Quick Admin Access */}
            <div className="pt-3">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy border border-gold/30 text-gold hover:border-gold transition-colors text-[11px] font-mono cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Management Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Gold Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] text-silver/70">
          <div>
            © {new Date().getFullYear()} KNS Construction & Real Estate. All rights reserved. Proprietor: Kiran Gajbhare.
          </div>

          <div className="flex items-center gap-4">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hover:text-gold transition-colors cursor-pointer"
              >
                Replay 3D Intro
              </button>
            )}
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-gold transition-colors cursor-pointer"
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
