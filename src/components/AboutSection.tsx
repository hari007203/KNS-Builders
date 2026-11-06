import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, ShieldCheck, Sparkles, Building2, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const architecturalPrinciples = [
    {
      num: '01',
      title: 'Certified Branded Materials',
      desc: 'Tata & JSW Fe550D TMT steel and UltraTech 53-grade certified cement deployed across every structural foundation.',
    },
    {
      num: '02',
      title: 'Rigorous Vastu Architecture',
      desc: 'All floor plans strictly engineered for balanced daylight, natural cross-ventilation, and cardinal orientation.',
    },
    {
      num: '03',
      title: 'Single-Point Accountability',
      desc: 'Direct on-site supervision by proprietor Kiran Gajbhare with zero contractor subcontracting dilution.',
    },
    {
      num: '04',
      title: 'Fixed Rate Transparency',
      desc: 'Itemized square-foot pricing schedules with defined milestone billing and complete absence of hidden escalations.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0E131A] relative overflow-hidden border-t border-gold/10">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 01 // ARCHITECTURAL PRACTICE
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">HYDERABAD, TG</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Building Trust Through <br />
                <span className="gold-gradient-text italic font-normal">Every Architectural Detail.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-silver text-sm sm:text-base font-light leading-relaxed border-l border-gold/25 pl-4 sm:pl-6">
                Based in Kondapur, KNS Construction & Real Estate designs and builds bespoke turnkey residences, gated villa communities, and boutique apartments across Western Hyderabad.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Editorial Spread: Asymmetrical Architectural Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Column 1: Architectural Photography & Authentic Credential Plaque (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Architectural Frame with Hairline Border */}
            <div className="relative group overflow-hidden border border-gold/25 bg-[#121720] shadow-2xl">
              <div className="absolute top-3 left-3 z-20 font-mono text-[9px] uppercase tracking-widest text-gold bg-black/60 px-2 py-0.5 backdrop-blur-sm border border-gold/20">
                FIG. 01 — ELEVATION SPECIFICATION
              </div>
              <img
                src="/assets/kns-exterior-villa-facade.png"
                alt="KNS Luxury Villa Exterior"
                className="w-full h-[320px] sm:h-[440px] lg:h-[480px] object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E131A] via-transparent to-transparent opacity-90" />

              {/* Leadership Credential Plaque */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-[#0E131A] via-[#0E131A]/95 to-transparent border-t border-gold/20">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-gold/10 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-serif text-ivory text-base sm:text-lg font-medium tracking-wide">
                      Kiran Gajbhare
                    </span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold font-mono block">
                      Proprietor & Principal Builder
                    </span>
                  </div>
                </div>
                <p className="text-xs text-silver mt-2.5 italic border-l-2 border-gold/40 pl-3">
                  "Building Dreams, Brick by Brick with Uncompromising Structural Honesty."
                </p>
              </div>
            </div>

            {/* Registered Headquarters Plaque */}
            <div className="p-4 sm:p-5 bg-[#121720] border border-gold/15 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/kns-business-card-navy.png"
                  alt="KNS Official Visiting Card Reference"
                  className="w-20 h-12 object-cover border border-gold/30 shadow-sm shrink-0"
                  loading="lazy"
                />
                <div className="text-[11px] sm:text-xs space-y-0.5">
                  <span className="font-serif text-ivory block font-medium">Headquarters & On-Site Practice</span>
                  <span className="text-silver/80 block text-[10px] sm:text-[11px]">
                    Raghavendra Colony, Kondapur, Hyderabad – 500084
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest text-gold/70 border border-gold/20 px-2 py-1">
                VERIFIED
              </span>
            </div>
          </motion.div>

          {/* Column 2: Architectural Manifesto & 4 Structured Pillars (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Primary Editorial Statement */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal leading-snug">
                Delivering thoughtfully designed spaces and quality construction with unwavering transparency.
              </h3>
              <p className="text-silver text-sm sm:text-base leading-relaxed font-light">
                KNS Construction & Real Estate is an architectural construction, property development, and real-estate firm based in Kondapur, Hyderabad. Founded and directed by Kiran Gajbhare, our mission is to redefine residential and commercial spaces through meticulous engineering, genuine branded building materials, and uncompromising architectural standards.
              </p>
              <p className="text-silver text-sm sm:text-base leading-relaxed font-light">
                Whether developing large-scale gated communities such as our 100-plot villa layout in Pocharam/Patancheru, erecting exclusive 3BHK boutique residences in Kondapur, or constructing custom turnkey family homes from ground up, we focus on every detail—from soil analysis and RCC framing to bespoke false ceilings and precision joinery.
              </p>
            </div>

            {/* Key Data Ledger Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-gold/15">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-gold">100+</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Villa Plots Master-Planned</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-gold">100%</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Vastu Compliance Guarantee</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-gold">Fe550D</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Primary TMT Grade Steel</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-gold">Turnkey</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Single-Contract Responsibility</span>
              </div>
            </div>

            {/* 4 Architectural Pillars: Editorial Ledger Format */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block">
                CORE TECHNICAL DISCIPLINES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {architecturalPrinciples.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="p-4 sm:p-5 bg-[#121720] border-l-2 border-gold/40 hover:border-gold border-t border-r border-b border-white/5 transition-all duration-300 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-gold font-bold">{item.num}</span>
                      <span className="w-1.5 h-1.5 bg-gold/40 rounded-full" />
                    </div>
                    <h4 className="font-serif text-base sm:text-lg text-ivory font-medium">
                      {item.title}
                    </h4>
                    <p className="text-xs text-silver leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architectural Link */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-gold hover:text-gold-300 font-mono font-medium transition-colors group touch-manipulation min-h-[44px]"
              >
                <span>Explore Full Scope of Architectural Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
