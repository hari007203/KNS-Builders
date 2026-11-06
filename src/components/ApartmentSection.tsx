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
    <section id="apartment" className="py-24 sm:py-32 bg-[#0E131A] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

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
              INDEX 07 // BOUTIQUE RESIDENTIAL RESIDENCES
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">PRIME KONDAPUR ENCLAVE</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Raghavendra Residency <br />
                <span className="gold-gradient-text italic font-normal">10 Luxury 3BHK Residences.</span>
              </h2>
              <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm text-silver/80 font-light">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Raghavendra Colony, Kondapur, Hyderabad – 500084</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 bg-[#121720] text-gold border border-gold/30 text-xs font-mono uppercase font-semibold">
                STATUS: {APARTMENT_PROJECT.status}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Project Key Metrics Overview: Architectural Survey Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20 border border-gold/20 shadow-2xl mb-12 sm:mb-16"
        >
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">TOTAL RESIDENCES</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">10 Units</span>
            <span className="text-[10px] text-silver/60 font-mono block">Only 2 Units Per Floor</span>
          </div>
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">UNIT BUILT-UP AREA</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">1,650 SFT</span>
            <span className="text-[10px] text-silver/60 font-mono block">Spacious 3BHK Floor Plan</span>
          </div>
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">STANDALONE SITE</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">600 Sq. Yds</span>
            <span className="text-[10px] text-silver/60 font-mono block">Independent Freehold Plot</span>
          </div>
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">VASTU ORIENTATION</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">100% East</span>
            <span className="text-[10px] text-silver/60 font-mono block">Zero Dead Spaces</span>
          </div>
        </motion.div>

        {/* Project Editorial Display & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
          {/* Photos Mosaic (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {apartmentImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative border border-gold/25 h-48 sm:h-60 bg-[#0E131A] overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131A] via-transparent to-transparent opacity-85" />
                <span className="absolute bottom-3 left-3 text-[11px] sm:text-xs text-ivory font-serif group-hover:text-gold transition-colors line-clamp-1">
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
            className="lg:col-span-5 bg-[#121720] p-6 sm:p-8 border border-gold/25 shadow-2xl space-y-6"
          >
            <div className="flex border-b border-gold/15 pb-3 gap-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`text-xs font-mono uppercase tracking-wider pb-1 transition-colors cursor-pointer min-h-[38px] touch-manipulation ${
                  activeTab === 'overview' ? 'text-gold border-b-2 border-gold font-bold' : 'text-silver/60 hover:text-ivory'
                }`}
              >
                Project Highlights
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`text-xs font-mono uppercase tracking-wider pb-1 transition-colors cursor-pointer min-h-[38px] touch-manipulation ${
                  activeTab === 'specs' ? 'text-gold border-b-2 border-gold font-bold' : 'text-silver/60 hover:text-ivory'
                }`}
              >
                Civil Engineering Specs
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-silver text-xs sm:text-sm leading-relaxed font-light">
                    {APARTMENT_PROJECT.summary} Designed for high-net-worth professionals and discerning families who value privacy, zero common sharing walls, and an unmatched location minutes from Hitec City and Financial District.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {APARTMENT_PROJECT.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ivory/90 bg-[#0E131A] p-2.5 border border-white/5">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 text-xs text-silver max-h-72 overflow-y-auto pr-1 font-mono"
                >
                  <div className="bg-[#0E131A] p-3 border border-white/5">
                    <strong className="text-gold block mb-1 uppercase tracking-wider text-[10px]">Structure:</strong>
                    <span className="text-ivory">{APARTMENT_PROJECT.specifications.structure}</span>
                  </div>
                  <div className="bg-[#0E131A] p-3 border border-white/5">
                    <strong className="text-gold block mb-1 uppercase tracking-wider text-[10px]">Joinery & Teak Doors:</strong>
                    <span className="text-ivory">{APARTMENT_PROJECT.specifications.doors}</span>
                  </div>
                  <div className="bg-[#0E131A] p-3 border border-white/5">
                    <strong className="text-gold block mb-1 uppercase tracking-wider text-[10px]">Flooring:</strong>
                    <span className="text-ivory">{APARTMENT_PROJECT.specifications.flooring}</span>
                  </div>
                  <div className="bg-[#0E131A] p-3 border border-white/5">
                    <strong className="text-gold block mb-1 uppercase tracking-wider text-[10px]">Electrical:</strong>
                    <span className="text-ivory">{APARTMENT_PROJECT.specifications.electrical}</span>
                  </div>
                  <div className="bg-[#0E131A] p-3 border border-white/5">
                    <strong className="text-gold block mb-1 uppercase tracking-wider text-[10px]">Sanitary:</strong>
                    <span className="text-ivory">{APARTMENT_PROJECT.specifications.toilets}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-gold/15 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleEnquireApartment}
                className="flex-1 py-3 bg-gold hover:bg-gold-300 text-navy font-semibold text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
              >
                <span>Book Private Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="py-3 px-5 border border-gold/30 hover:border-gold text-ivory hover:text-gold text-xs font-mono uppercase tracking-widest text-center transition-colors min-h-[44px] flex items-center justify-center"
              >
                Enquiry Desk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
