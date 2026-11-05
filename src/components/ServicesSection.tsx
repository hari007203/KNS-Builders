import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Compass, Palette, MapPin, ShieldCheck, ArrowRight, Check, X } from 'lucide-react';
import { SERVICES_DATA, BRAND_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
    <section id="services" className="py-20 sm:py-28 bg-[#101820] relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-5 sm:gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy-800 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gold mb-3 shadow-md">
              Comprehensive Construction Solutions
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
              Architectural Services <br />
              <span className="gold-gradient-text italic font-normal">Crafted with Precision.</span>
            </h2>
          </div>
          <p className="text-silver text-sm sm:text-base max-w-md font-light leading-relaxed">
            From structural engineering and turnkey building to bespoke interior woodwork, we deliver seamless architectural excellence.
          </p>
        </motion.div>

        {/* 6 Rich Architectural Cards with Northwall Progressive Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                delay: Math.min(index * 0.08, 0.35),
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Image Container with Northwall Top-Down Mask Reveal */}
              <motion.div
                initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.85, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-52 sm:h-60 overflow-hidden bg-navy-900"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                {/* Floating Minimal Icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-navy/85 backdrop-blur-md border border-gold/30 flex items-center justify-center shadow-lg group-hover:border-gold transition-all duration-300">
                  {getServiceIcon(service.icon)}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gold font-mono block">
                    {service.tagline}
                  </span>
                </div>
              </motion.div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory font-medium group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-silver text-xs sm:text-sm font-light mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Scope Highlights - Fully visible on touch screens without hover */}
                <div className="space-y-1.5 pt-2 border-t border-gold/15">
                  {service.scope.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-ivory/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3 sm:pt-4">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-4 rounded border border-gold/30 hover:border-gold bg-navy/60 hover:bg-gold hover:text-navy text-gold text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm touch-manipulation min-h-[42px]"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal - Mobile Optimized */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-navy/92 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="bg-charcoal border border-gold/40 rounded-xl max-w-2xl w-full p-5 sm:p-8 relative shadow-2xl space-y-5 max-h-[88vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-silver hover:text-gold transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center touch-manipulation"
                aria-label="Close Service Details"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 pr-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                  {getServiceIcon(selectedService.icon)}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-3xl text-ivory leading-snug">{selectedService.title}</h3>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gold">{selectedService.tagline}</span>
                </div>
              </div>

              <p className="text-silver text-xs sm:text-base leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-mono">Detailed Scope of Execution:</h4>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {selectedService.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory/90 bg-navy/60 p-2.5 rounded border border-gold/15">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between border-t border-gold/20 gap-3">
                <span className="text-[11px] sm:text-xs text-silver">Direct Consultation with Kiran Gajbhare</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-gold via-gold-500 to-gold-600 text-navy font-semibold text-xs uppercase tracking-wider rounded text-center touch-manipulation min-h-[44px] flex items-center justify-center"
                >
                  Inquire For This Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
