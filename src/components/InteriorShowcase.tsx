import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export const InteriorShowcase: React.FC = () => {
  return (
    <section className="py-28 bg-[#151921] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-xs font-mono uppercase tracking-widest text-gold mb-3">
            Bespoke Interior Craftsmanship
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Where Architecture <br />
            <span className="gold-gradient-text italic font-normal">Meets Everyday Living.</span>
          </h2>
          <p className="text-silver text-sm sm:text-base mt-4 font-light">
            Every home built by KNS integrates architectural interior finishing—from precision gypsum cove tray ceilings to factory-machined acrylic modular kitchens and bespoke full-height wardrobes.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Feature 1: Grand Living Hall (7 cols) */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl h-[460px]">
            <img
              src="/assets/kns-living-grand-tray-ceiling.png"
              alt="Bespoke Architectural Ceiling & Living Room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-85" />
            <div className="absolute bottom-8 left-8 right-8 space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold font-mono font-semibold">
                Living Hall Engineering
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                Multi-Tiered Gyproc Tray False Ceilings
              </h3>
              <p className="text-silver text-xs sm:text-sm max-w-xl font-light">
                Indirect 3000K warm cove channels designed to bounce light evenly across Italian marble flooring with zero harsh glare.
              </p>
            </div>
          </div>

          {/* Feature 2: High-Gloss Modular Kitchen (5 cols) */}
          <div className="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl h-[460px]">
            <img
              src="/assets/kns-modular-kitchen-beige.png"
              alt="Luxury Modular Kitchen with Granite Countertop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-85" />
            <div className="absolute bottom-8 left-8 right-8 space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold font-mono font-semibold">
                Culinary Workspaces
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                Ergonomic High-Gloss Modular Kitchens
              </h3>
              <p className="text-silver text-xs sm:text-sm font-light">
                Marine-grade boiling waterproof (BWP) carcass, soft-close tandem pantry drawers, and seamless black granite countertops.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Asymmetrical Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Geometric Master Wardrobe */}
          <div className="group rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/50 transition-colors shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src="/assets/kns-master-geometric-walnut.png"
                alt="Walnut Geometric Master Wardrobe"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-gold font-mono block">Custom Joinery</span>
              <h4 className="font-serif text-xl text-ivory">Walnut Geometric Wardrobes</h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Full-height floor-to-ceiling storage with integrated window study stations and soft-close hinges.
              </p>
            </div>
          </div>

          {/* Card 2: Clad Portico & Veranda */}
          <div className="group rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/50 transition-colors shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src="/assets/kns-portico-brass-inlay-door.png"
                alt="Marble Wall Clad Veranda with Brass Inlay"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-gold font-mono block">Entrance Experience</span>
              <h4 className="font-serif text-xl text-ivory">Brass Inlay Marble Porticos</h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Weatherproof Italian tile wall cladding accented with brass strips, carved teak doors, and granite steps.
              </p>
            </div>
          </div>

          {/* Card 3: Emerald Lotus Staircase */}
          <div className="group rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/50 transition-colors shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src="/assets/kns-staircase-lotus-wall.png"
                alt="Lotus Accent Wall Staircase"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-gold font-mono block">Vertical Transition</span>
              <h4 className="font-serif text-xl text-ivory">Architectural Feature Staircases</h4>
              <p className="text-silver text-xs font-light leading-relaxed">
                Artisanal lotus grid feature wall, stainless steel safety balustrades, and polished granite treads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
