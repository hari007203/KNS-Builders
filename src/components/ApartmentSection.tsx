import React, { useState } from 'react';
import { Building, MapPin, Check, ArrowRight, Shield, Zap, Sparkles, Download, Phone, Calendar } from 'lucide-react';
import { APARTMENT_PROJECT, BRAND_INFO } from '../data/mockData';

export const ApartmentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'units'>('overview');

  const apartmentImages = [
    { src: '/assets/kns-exterior-villa-facade.png', label: 'Contemporary Elevation Style' },
    { src: '/assets/kns-living-grand-tray-ceiling.png', label: '1,650 SFT Living & Dining Space' },
    { src: '/assets/kns-modular-kitchen-beige.png', label: 'Designer Kitchen Fitouts' },
    { src: '/assets/kns-master-geometric-walnut.png', label: 'Master Bedroom Suite' },
  ];

  const handleEnquireApartment = () => {
    const text = `Hello Kiran Sir, I am inquiring about the 1,650 Sq.Ft 3BHK Apartment in Raghavendra Residency, Raghavendra Colony, Kondapur. Please share available floors and brochure.`;
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="apartment" className="py-28 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy-800 text-xs font-mono uppercase tracking-widest text-gold mb-3">
              Prime Kondapur Boutique Enclave
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
              Raghavendra Residency <br />
              <span className="gold-gradient-text italic font-normal">10 Luxury 3BHK Residences.</span>
            </h2>
            <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm text-silver">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Raghavendra Colony, Kondapur, Hyderabad – 500084 (Near Bajaj Showroom Line)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-gold/15 text-gold border border-gold/40 text-xs font-mono uppercase font-semibold">
              Status: {APARTMENT_PROJECT.status}
            </span>
          </div>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-charcoal border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Total Residences</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">10 Exclusive 3BHKs</span>
            <span className="text-[10px] text-silver">Only 2 Units Per Floor</span>
          </div>
          <div className="p-4 rounded-xl bg-charcoal border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Unit Built-Up Area</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">1,650 Sq.Ft</span>
            <span className="text-[10px] text-silver">Spacious 3 Bedroom Hall Kitchen</span>
          </div>
          <div className="p-4 rounded-xl bg-charcoal border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Prime Site Area</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">600 Sq. Yards</span>
            <span className="text-[10px] text-silver">Independent Standalone Plot</span>
          </div>
          <div className="p-4 rounded-xl bg-charcoal border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Entrance Orientation</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">100% East Facing</span>
            <span className="text-[10px] text-silver">Pure Vastu Compliance</span>
          </div>
        </div>

        {/* Project Editorial Display & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Photos Mosaic (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {apartmentImages.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden border border-gold/25 h-56 shadow-lg">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-xs text-ivory font-serif">
                  {img.label}
                </span>
              </div>
            ))}
          </div>

          {/* Details & Specifications Panel (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-xl border border-gold/30 shadow-2xl space-y-6">
            <div className="flex border-b border-gold/20 pb-2 gap-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`text-xs uppercase tracking-wider font-mono pb-2 transition-colors cursor-pointer ${
                  activeTab === 'overview' ? 'text-gold border-b-2 border-gold font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                Project Highlights
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`text-xs uppercase tracking-wider font-mono pb-2 transition-colors cursor-pointer ${
                  activeTab === 'specs' ? 'text-gold border-b-2 border-gold font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                Civil Specs
              </button>
            </div>

            {activeTab === 'overview' ? (
              <div className="space-y-4">
                <p className="text-silver text-sm leading-relaxed font-light">
                  {APARTMENT_PROJECT.summary} Designed for high-net-worth professionals and discerning families who value privacy, zero common sharing walls, and an unmatched location minutes from Hitec City and Financial District.
                </p>

                <div className="space-y-2 pt-2">
                  {APARTMENT_PROJECT.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ivory/90">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-silver max-h-72 overflow-y-auto pr-1">
                <div>
                  <strong className="text-ivory block mb-0.5">Structure:</strong>
                  {APARTMENT_PROJECT.specifications.structure}
                </div>
                <div>
                  <strong className="text-ivory block mb-0.5">Joinery & Teak Doors:</strong>
                  {APARTMENT_PROJECT.specifications.doors}
                </div>
                <div>
                  <strong className="text-ivory block mb-0.5">Flooring:</strong>
                  {APARTMENT_PROJECT.specifications.flooring}
                </div>
                <div>
                  <strong className="text-ivory block mb-0.5">Electrical:</strong>
                  {APARTMENT_PROJECT.specifications.electrical}
                </div>
                <div>
                  <strong className="text-ivory block mb-0.5">Sanitary:</strong>
                  {APARTMENT_PROJECT.specifications.toilets}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-gold/15 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleEnquireApartment}
                className="flex-1 py-3 bg-gold hover:bg-gold-500 text-navy font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-md shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="py-3 px-4 border border-gold/30 hover:border-gold text-ivory hover:text-gold text-xs uppercase tracking-wider rounded text-center transition-colors"
              >
                Enquiry Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
