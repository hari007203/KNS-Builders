import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#14181F] relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy/60 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gold mb-3 shadow-md">
            About KNS Construction & Real Estate
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Building Trust Through <br />
            <span className="gold-gradient-text italic font-normal">Every Detail.</span>
          </h2>
        </motion.div>

        {/* Editorial Two-Column Layout with Northwall Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Column 1: Architectural Photography & Authentic Credential Box (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <div className="relative group rounded-xl overflow-hidden border border-gold/25 shadow-2xl bg-navy-900">
              <img
                src="/assets/kns-exterior-villa-facade.png"
                alt="KNS Luxury Villa Exterior"
                className="w-full h-[280px] sm:h-[420px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-85" />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-lg bg-navy/90 backdrop-blur-md border border-gold/30 shadow-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-gold/10 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-serif text-ivory text-sm sm:text-base font-medium">Kiran Gajbhare</span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gold">Proprietor & Principal Builder</span>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-silver mt-1.5 sm:mt-2 italic">
                  "Building Dreams, Brick by Brick."
                </p>
              </div>
            </div>

            {/* Official Visiting Card Reference Preview */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-navy-800/80 border border-gold/20 flex items-center gap-3 sm:gap-4 shadow-md hover:border-gold/40 transition-colors">
              <img
                src="/assets/kns-business-card-navy.png"
                alt="KNS Official Visiting Card"
                className="w-20 sm:w-24 h-12 sm:h-14 object-cover rounded border border-gold/40 shadow-sm shrink-0"
                loading="lazy"
              />
              <div className="text-[11px] sm:text-xs space-y-0.5 sm:space-y-1">
                <span className="font-semibold text-ivory block">Direct Supervision & Transparency</span>
                <span className="text-silver block text-[10px] sm:text-xs">Raghavendra Colony, Kondapur, Hyderabad – 500084</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Company Editorial Introduction (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <h3 className="font-serif text-xl sm:text-3xl text-ivory font-normal leading-snug">
              Delivering thoughtfully designed spaces and quality construction with unwavering transparency.
            </h3>

            <p className="text-silver text-sm sm:text-base leading-relaxed font-light">
              KNS Construction & Real Estate is an architectural construction, property development, and real-estate firm based in Kondapur, Hyderabad. Founded and directed by Kiran Gajbhare, our mission is to redefine residential and commercial spaces through meticulous engineering, genuine branded building materials, and uncompromising architectural standards.
            </p>

            <p className="text-silver text-sm sm:text-base leading-relaxed font-light">
              Whether developing large-scale gated communities such as our 100-plot villa layout in Pocharam/Patancheru, erecting exclusive 3BHK boutique residences in Kondapur, or constructing custom turnkey family homes from ground up, we focus on every detail—from soil analysis and RCC framing to bespoke false ceilings and precision joinery.
            </p>

            {/* Core Commitments Grid with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {[
                {
                  title: 'Branded Materials',
                  desc: 'Strictly Tata/JSW Fe550D TMT steel and UltraTech 53-grade certified cement.',
                },
                {
                  title: '100% Vastu Compliance',
                  desc: 'Meticulously oriented east and north entrances with balanced airflow and daylight.',
                },
                {
                  title: 'Transparent Pricing',
                  desc: 'Clear square-foot rate agreements with zero hidden costs or surprise escalations.',
                },
                {
                  title: 'Turnkey Execution',
                  desc: 'Complete single-point responsibility from foundation earthwork to keys handover.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="p-3.5 sm:p-4 rounded-lg bg-navy/60 border border-gold/15 space-y-1 sm:space-y-1.5 hover:border-gold/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2 text-gold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="text-xs uppercase tracking-wider font-semibold">{item.title}</span>
                  </div>
                  <p className="text-xs text-silver leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-gold-300 font-semibold transition-colors group touch-manipulation min-h-[40px]"
              >
                <span>Explore Full Scope of Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
