import React from 'react';
import { motion } from 'framer-motion';

export const InteriorShowcase: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#151921] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gold mb-3 shadow-md">
            Bespoke Interior Craftsmanship
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Where Architecture <br />
            <span className="gold-gradient-text italic font-normal">Meets Everyday Living.</span>
          </h2>
          <p className="text-silver text-sm sm:text-base mt-3 sm:mt-4 font-light leading-relaxed">
            Every home built by KNS integrates architectural interior finishing—from precision gypsum cove tray ceilings to factory-machined acrylic modular kitchens and bespoke full-height wardrobes.
          </p>
        </motion.div>

        {/* Asymmetrical Editorial Showcase Grid with Northwall Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-12 sm:mb-16">
          {/* Feature 1: Grand Living Hall (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-gold/30 hover:border-gold/70 shadow-2xl h-[300px] sm:h-[400px] lg:h-[460px] transition-all duration-500 hover:shadow-gold/15"
          >
            <motion.img
              src="/assets/kns-living-grand-tray-ceiling.png"
              alt="Bespoke Architectural Ceiling & Living Room"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono font-semibold block">
                Living Hall Engineering
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-ivory font-normal group-hover:text-gold transition-colors">
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
            whileHover={{ y: -6 }}
            className="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-gold/30 hover:border-gold/70 shadow-2xl h-[300px] sm:h-[400px] lg:h-[460px] transition-all duration-500 hover:shadow-gold/15"
          >
            <motion.img
              src="/assets/kns-modular-kitchen-beige.png"
              alt="Luxury Modular Kitchen with Granite Countertop"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono font-semibold block">
                Culinary Workspaces
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-ivory font-normal group-hover:text-gold transition-colors">
                Ergonomic High-Gloss Modular Kitchens
              </h3>
              <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                Marine-grade boiling waterproof (BWP) carcass, soft-close tandem pantry drawers, and seamless black granite countertops.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Secondary Asymmetrical Row with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Geometric Master Wardrobe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-300 shadow-xl hover:shadow-gold/10"
          >
            <div className="h-56 sm:h-64 overflow-hidden relative">
              <img
                src="/assets/kns-master-geometric-walnut.png"
                alt="Walnut Geometric Master Wardrobe"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-85" />
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gold font-mono block">Custom Joinery</span>
              <h4 className="font-serif text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors">Walnut Geometric Wardrobes</h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Full-height floor-to-ceiling storage with integrated window study stations and soft-close hinges.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Clad Portico & Veranda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-300 shadow-xl hover:shadow-gold/10"
          >
            <div className="h-56 sm:h-64 overflow-hidden relative">
              <img
                src="/assets/kns-portico-brass-inlay-door.png"
                alt="Marble Wall Clad Veranda with Brass Inlay"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-85" />
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gold font-mono block">Entrance Experience</span>
              <h4 className="font-serif text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors">Brass Inlay Marble Porticos</h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Weatherproof Italian tile wall cladding accented with brass strips, carved teak doors, and granite steps.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Emerald Lotus Staircase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-300 shadow-xl hover:shadow-gold/10"
          >
            <div className="h-56 sm:h-64 overflow-hidden relative">
              <img
                src="/assets/kns-staircase-lotus-wall.png"
                alt="Lotus Accent Wall Staircase"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-85" />
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gold font-mono block">Vertical Transition</span>
              <h4 className="font-serif text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors">Architectural Feature Staircases</h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Artisanal lotus grid feature wall, stainless steel safety balustrades, and polished granite treads.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
