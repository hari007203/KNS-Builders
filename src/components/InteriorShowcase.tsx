import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const InteriorShowcase: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0E131A] relative overflow-hidden border-t border-gold/10">
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
              INDEX 09 // BESPOKE INTERIOR ARCHITECTURE
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">CRAFTSMANSHIP & FINISHES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Where Architecture <br />
                <span className="gold-gradient-text italic font-normal">Meets Everyday Living.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-silver text-sm sm:text-base font-light leading-relaxed border-l border-gold/25 pl-4 sm:pl-6">
                Every home built by KNS integrates turnkey interior finishing—from precision gypsum cove tray ceilings to factory-machined acrylic modular kitchens and bespoke full-height wardrobes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Top Hero Duo: Asymmetrical Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-10">
          {/* Feature 1: Grand Living Hall (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 group relative border border-gold/25 bg-black overflow-hidden h-[320px] sm:h-[420px] lg:h-[480px]"
          >
            <img
              src="/assets/kns-living-grand-tray-ceiling.png"
              alt="Bespoke Architectural Ceiling & Living Room"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E131A] via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
                INTERIOR SPECIFICATION // LIVING HALL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal group-hover:text-gold transition-colors">
                Multi-Tiered Gyproc Tray False Ceilings
              </h3>
              <p className="text-silver text-xs sm:text-sm max-w-xl font-light leading-relaxed">
                Indirect 3000K warm cove channels designed to bounce light evenly across Italian marble flooring with zero harsh glare.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: High-Gloss Modular Kitchen (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 group relative border border-gold/25 bg-black overflow-hidden h-[320px] sm:h-[420px] lg:h-[480px]"
          >
            <img
              src="/assets/kns-modular-kitchen-beige.png"
              alt="Luxury Modular Kitchen with Granite Countertop"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E131A] via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
                INTERIOR SPECIFICATION // CULINARY WORKSPACES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal group-hover:text-gold transition-colors">
                Ergonomic Modular Kitchens
              </h3>
              <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                Marine-grade boiling waterproof (BWP) carcass, soft-close tandem pantry drawers, and seamless black granite countertops.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Secondary Trio: Structured Architectural Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Geometric Master Wardrobe */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="group bg-[#121720] border border-white/5 hover:border-gold/40 transition-colors"
          >
            <div className="h-56 sm:h-64 overflow-hidden relative bg-black">
              <img
                src="/assets/kns-master-geometric-walnut.png"
                alt="Walnut Geometric Master Wardrobe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121720] via-transparent to-transparent opacity-85" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">CUSTOM JOINERY</span>
              <h4 className="font-serif text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors">
                Walnut Geometric Wardrobes
              </h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Full-height floor-to-ceiling storage with integrated window study stations and soft-close hinges.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Clad Portico & Veranda */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="group bg-[#121720] border border-white/5 hover:border-gold/40 transition-colors"
          >
            <div className="h-56 sm:h-64 overflow-hidden relative bg-black">
              <img
                src="/assets/kns-portico-brass-inlay-door.png"
                alt="Marble Wall Clad Veranda with Brass Inlay"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121720] via-transparent to-transparent opacity-85" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">ENTRANCE EXPERIENCE</span>
              <h4 className="font-serif text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors">
                Brass Inlay Marble Porticos
              </h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Weatherproof Italian tile wall cladding accented with brass strips, carved teak doors, and granite steps.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Emerald Lotus Staircase */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="group bg-[#121720] border border-white/5 hover:border-gold/40 transition-colors"
          >
            <div className="h-56 sm:h-64 overflow-hidden relative bg-black">
              <img
                src="/assets/kns-staircase-lotus-wall.png"
                alt="Lotus Accent Wall Staircase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121720] via-transparent to-transparent opacity-85" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">VERTICAL TRANSITION</span>
              <h4 className="font-serif text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors">
                Architectural Feature Staircases
              </h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Artisanal lotus grid feature wall, stainless steel safety balustrades, and polished granite treads.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Direct Interior Consultation Link */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
              'Hello Kiran Sir, I would like to consult with KNS regarding interior architecture (false ceiling, modular kitchen, and wardrobes).'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold hover:bg-gold-300 text-navy font-mono text-xs uppercase tracking-widest font-semibold transition-colors shadow-xl"
          >
            <span>Consult on Turnkey Interior Execution</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
