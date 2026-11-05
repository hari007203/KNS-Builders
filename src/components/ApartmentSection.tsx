import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Check, ArrowRight } from 'lucide-react';
import { APARTMENT_PROJECT, BRAND_INFO } from '../data/mockData';

export const ApartmentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs'>('overview');

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
    <section id="apartment" className="py-20 sm:py-28 bg-[#101820] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy-800 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gold mb-3 shadow-md">
              Prime Kondapur Boutique Enclave
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
              Raghavendra Residency <br />
              <span className="gold-gradient-text italic font-normal">10 Luxury 3BHK Residences.</span>
            </h2>
            <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm text-silver">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>Raghavendra Colony, Kondapur, Hyderabad – 500084</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-gold/15 text-gold border border-gold/40 text-xs font-mono uppercase font-semibold shadow-sm">
              Status: {APARTMENT_PROJECT.status}
            </span>
          </div>
        </motion.div>

        {/* Highlight Metrics with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="p-3.5 sm:p-4 rounded-xl bg-charcoal border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Total Residences</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">10 Exclusive 3BHKs</span>
            <span className="text-[9px] sm:text-[10px] text-silver">Only 2 Units Per Floor</span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl bg-charcoal border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Unit Built-Up Area</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">1,650 Sq.Ft</span>
            <span className="text-[9px] sm:text-[10px] text-silver">Spacious 3 Bedroom Hall Kitchen</span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl bg-charcoal border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Prime Site Area</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">600 Sq. Yards</span>
            <span className="text-[9px] sm:text-[10px] text-silver">Independent Standalone Plot</span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl bg-charcoal border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Entrance Orientation</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">100% East Facing</span>
            <span className="text-[9px] sm:text-[10px] text-silver">Pure Vastu Compliance</span>
          </div>
        </motion.div>

        {/* Project Editorial Display & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
          {/* Photos Mosaic (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {apartmentImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl overflow-hidden border border-gold/25 h-44 sm:h-56 shadow-lg bg-navy-900"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />
                <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[11px] sm:text-xs text-ivory font-serif group-hover:text-gold transition-colors line-clamp-1">
                  {img.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Details & Specifications Panel (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 glass-panel p-5 sm:p-8 rounded-xl border border-gold/30 shadow-2xl space-y-5 sm:space-y-6"
          >
            <div className="flex border-b border-gold/20 pb-2 gap-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`text-xs uppercase tracking-wider font-mono pb-2 transition-colors cursor-pointer min-h-[38px] touch-manipulation ${
                  activeTab === 'overview' ? 'text-gold border-b-2 border-gold font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                Project Highlights
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`text-xs uppercase tracking-wider font-mono pb-2 transition-colors cursor-pointer min-h-[38px] touch-manipulation ${
                  activeTab === 'specs' ? 'text-gold border-b-2 border-gold font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                Civil Specs
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 sm:space-y-4"
                >
                  <p className="text-silver text-xs sm:text-sm leading-relaxed font-light">
                    {APARTMENT_PROJECT.summary} Designed for high-net-worth professionals and discerning families who value privacy, zero common sharing walls, and an unmatched location minutes from Hitec City and Financial District.
                  </p>

                  <div className="space-y-2 pt-1 sm:pt-2">
                    {APARTMENT_PROJECT.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ivory/90">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3 text-xs text-silver max-h-64 sm:max-h-72 overflow-y-auto pr-1"
                >
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
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="pt-3 sm:pt-4 border-t border-gold/15 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button
                onClick={handleEnquireApartment}
                className="flex-1 py-3 bg-gradient-to-r from-gold via-gold-500 to-gold-600 text-navy font-semibold text-xs uppercase tracking-wider rounded transition-all duration-300 shadow-md shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
              >
                <span>Book a Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="py-3 px-4 border border-gold/30 hover:border-gold text-ivory hover:text-gold text-xs uppercase tracking-wider rounded text-center transition-colors min-h-[44px] flex items-center justify-center"
              >
                Enquiry Form
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
