import React, { useState } from 'react';
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
    <section id="services" className="py-28 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy-800 text-xs font-mono uppercase tracking-widest text-gold mb-3">
              Comprehensive Construction Solutions
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light">
              Architectural Services <br />
              <span className="gold-gradient-text italic font-normal">Crafted with Precision.</span>
            </h2>
          </div>
          <p className="text-silver text-sm sm:text-base max-w-md font-light">
            From structural engineering and turnkey building to bespoke interior woodwork, we deliver seamless architectural excellence.
          </p>
        </div>

        {/* 6 Rich Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between shadow-xl"
            >
              {/* Image Container with Subtle Zoom */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                {/* Floating Minimal Icon */}
                <div className="absolute top-4 right-4 w-11 h-11 rounded-lg bg-navy/85 backdrop-blur-md border border-gold/30 flex items-center justify-center shadow-lg group-hover:border-gold transition-colors">
                  {getServiceIcon(service.icon)}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-wider text-gold font-mono block">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-ivory font-medium group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-silver text-sm font-light mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Scope Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-gold/15">
                  {service.scope.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-ivory/80">
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-4 rounded border border-gold/30 hover:border-gold bg-navy/60 hover:bg-gold hover:text-navy text-gold text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-charcoal border border-gold/40 rounded-xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-silver hover:text-ivory transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center">
                {getServiceIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory">{selectedService.title}</h3>
                <span className="text-xs uppercase tracking-wider text-gold">{selectedService.tagline}</span>
              </div>
            </div>

            <p className="text-silver text-sm sm:text-base leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-gold font-mono">Detailed Scope of Execution:</h4>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {selectedService.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory/90 bg-navy/60 p-2.5 rounded border border-gold/15">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-gold/20">
              <span className="text-xs text-silver">Direct Consultation with Kiran Gajbhare</span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 bg-gold hover:bg-gold-500 text-navy font-semibold text-xs uppercase tracking-wider rounded transition-colors"
              >
                Inquire For This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
