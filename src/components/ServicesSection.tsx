import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Compass, Palette, MapPin, ShieldCheck, ArrowRight, Check, X, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, BRAND_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5 text-gold" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-gold" />;
      case 'Compass': return <Compass className="w-5 h-5 text-gold" />;
      case 'Palette': return <Palette className="w-5 h-5 text-gold" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-gold" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-gold" />;
      default: return <Building2 className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0B0F15] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 02 // ARCHITECTURAL DISCIPLINES
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">FULL-SCOPE EXECUTION</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Architectural Services <br />
                <span className="gold-gradient-text italic font-normal">Executed with Structural Discipline.</span>
              </h2>
            </div>
            <p className="text-silver text-sm sm:text-base max-w-md font-light leading-relaxed border-l border-gold/25 pl-4 sm:pl-6">
              From foundational engineering and turnkey residential construction to precision interior woodwork, we deliver seamless architectural excellence.
            </p>
          </div>
        </motion.div>

        {/* Architectural Discipline Dossier: Split Viewport Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Architectural Discipline Index (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold/80 block mb-3">
              SELECT DISCIPLINE DOSSIER
            </span>

            <div className="space-y-1.5">
              {SERVICES_DATA.map((service, idx) => {
                const isActive = service.id === activeTabId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTabId(service.id)}
                    className={`w-full text-left p-4 sm:p-5 transition-all duration-300 border flex items-center justify-between group cursor-pointer touch-manipulation min-h-[64px] ${
                      isActive
                        ? 'bg-[#141B24] border-gold shadow-lg shadow-gold/5'
                        : 'bg-[#0E131A] border-white/5 hover:border-gold/30 hover:bg-[#111720]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className={`font-mono text-xs transition-colors ${isActive ? 'text-gold font-bold' : 'text-silver/50 group-hover:text-gold'}`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className={`font-serif text-sm sm:text-base transition-colors ${isActive ? 'text-ivory font-medium' : 'text-silver group-hover:text-ivory'}`}>
                          {service.title}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider text-gold/70 font-mono block">
                          {service.tagline}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-gold translate-x-1' : 'text-silver/30 group-hover:text-gold group-hover:translate-x-0.5'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Featured Discipline Architectural Showcase (7 cols) */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#121720] border border-gold/25 p-5 sm:p-8 space-y-6 shadow-2xl relative"
          >
            {/* Top Bar with Discipline Label & Icon */}
            <div className="flex items-center justify-between border-b border-gold/15 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center">
                  {getServiceIcon(activeService.icon)}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold">
                    DISCIPLINE SPECIFICATION
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory font-medium">
                    {activeService.title}
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs text-gold/80 border border-gold/20 px-2.5 py-1">
                KNS-SPEC-0{SERVICES_DATA.findIndex((s) => s.id === activeService.id) + 1}
              </span>
            </div>

            {/* Architectural Image Display */}
            <div className="relative h-60 sm:h-72 overflow-hidden border border-gold/20 bg-black">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121720] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-ivory font-mono">
                <span className="bg-black/60 px-2 py-0.5 border border-white/10 text-[10px] text-gold uppercase tracking-wider">
                  {activeService.tagline}
                </span>
                <span className="text-[10px] text-silver/70">ARCHITECTURAL ARCHIVE</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-silver text-xs sm:text-sm leading-relaxed font-light">
              {activeService.description}
            </p>

            {/* Scope Checklist in 2 Columns */}
            <div className="space-y-2.5 pt-2 border-t border-gold/15">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block">
                EXECUTION SCOPE & DELIVERABLES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeService.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-ivory/90 bg-[#0B0F15] p-2.5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions: View Specifications Modal & WhatsApp Inquire */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gold/15">
              <button
                onClick={() => setSelectedService(activeService)}
                className="w-full sm:w-auto px-5 py-2.5 border border-gold/40 hover:border-gold text-gold text-xs uppercase tracking-widest font-mono font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
              >
                <span>View Full Technical Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hello Kiran Sir, I am inquiring about KNS services regarding: ${activeService.title}. Please share further details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-gold hover:bg-gold-300 text-navy font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
              >
                <span>Inquire with Kiran Gajbhare</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal - Editorial & Mobile Optimized */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#121720] border border-gold/40 max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-silver hover:text-gold transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center touch-manipulation"
                aria-label="Close Service Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 pr-8 border-b border-gold/15 pb-4">
                <div className="w-11 h-11 bg-gold/10 border border-gold/40 flex items-center justify-center shrink-0">
                  {getServiceIcon(selectedService.icon)}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory">{selectedService.title}</h3>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono">{selectedService.tagline}</span>
                </div>
              </div>

              <p className="text-silver text-xs sm:text-sm leading-relaxed font-light">
                {selectedService.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono">
                  Detailed Scope of Execution & Material Standards:
                </h4>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {selectedService.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory/90 bg-[#0E131A] p-3 border border-white/5">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between border-t border-gold/20 gap-3">
                <span className="text-xs text-silver">Direct Oversight by Kiran Gajbhare</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-3 bg-gold text-navy font-semibold text-xs uppercase tracking-wider text-center touch-manipulation min-h-[44px] flex items-center justify-center"
                >
                  Schedule Site Consultation
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
