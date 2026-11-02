import React from 'react';
import { ShieldCheck, Compass, CheckCircle2, Award, ArrowRight, UserCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#14181F] relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy/60 text-xs font-mono uppercase tracking-widest text-gold mb-3">
            About KNS Construction & Real Estate
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Building Trust Through <br />
            <span className="gold-gradient-text italic font-normal">Every Detail.</span>
          </h2>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Architectural Photography & Authentic Credential Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-xl overflow-hidden border border-gold/25 shadow-2xl">
              <img
                src="/assets/kns-exterior-villa-facade.png"
                alt="KNS Luxury Villa Exterior"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-navy/90 backdrop-blur-md border border-gold/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-serif text-ivory text-base font-medium">Kiran Gajbhare</span>
                    <span className="text-[11px] uppercase tracking-wider text-gold">Proprietor & Principal Builder</span>
                  </div>
                </div>
                <p className="text-xs text-silver mt-2 italic">
                  "Building Dreams, Brick by Brick."
                </p>
              </div>
            </div>

            {/* Official Visiting Card Reference Preview */}
            <div className="p-4 rounded-xl bg-navy-800/80 border border-gold/20 flex items-center gap-4">
              <img
                src="/assets/kns-business-card-navy.png"
                alt="KNS Official Visiting Card"
                className="w-24 h-14 object-cover rounded border border-gold/40 shadow-sm"
              />
              <div className="text-xs space-y-1">
                <span className="font-semibold text-ivory block">Direct Supervision & Transparency</span>
                <span className="text-silver block">Raghavendra Colony, Kondapur, Hyderabad – 500084</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Editorial Introduction (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
              Delivering thoughtfully designed spaces and quality construction with unwavering transparency.
            </h3>

            <p className="text-silver text-base leading-relaxed font-light">
              KNS Construction & Real Estate is an architectural construction, property development, and real-estate firm based in Kondapur, Hyderabad. Founded and directed by Kiran Gajbhare, our mission is to redefine residential and commercial spaces through meticulous engineering, genuine branded building materials, and uncompromising architectural standards.
            </p>

            <p className="text-silver text-base leading-relaxed font-light">
              Whether developing large-scale gated communities such as our 100-plot villa layout in Pocharam/Patancheru, erecting exclusive 3BHK boutique residences in Kondapur, or constructing custom turnkey family homes from ground up, we focus on every detail—from soil analysis and RCC framing to bespoke false ceilings and precision joinery.
            </p>

            {/* Core Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-navy/60 border border-gold/15 space-y-1.5">
                <div className="flex items-center gap-2 text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Branded Materials</span>
                </div>
                <p className="text-xs text-silver">
                  Strictly Tata/JSW Fe550D TMT steel and UltraTech 53-grade certified cement.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-navy/60 border border-gold/15 space-y-1.5">
                <div className="flex items-center gap-2 text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">100% Vastu Compliance</span>
                </div>
                <p className="text-xs text-silver">
                  Meticulously oriented east and north entrances with balanced airflow and daylight.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-navy/60 border border-gold/15 space-y-1.5">
                <div className="flex items-center gap-2 text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Transparent Pricing</span>
                </div>
                <p className="text-xs text-silver">
                  Clear square-foot rate agreements with zero hidden costs or surprise escalations.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-navy/60 border border-gold/15 space-y-1.5">
                <div className="flex items-center gap-2 text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Turnkey Execution</span>
                </div>
                <p className="text-xs text-silver">
                  Complete single-point responsibility from foundation earthwork to keys handover.
                </p>
              </div>
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-gold-300 font-semibold transition-colors"
              >
                <span>Explore Full Scope of Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
