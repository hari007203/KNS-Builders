import React from 'react';
import { ShieldCheck, Compass, Eye, CheckCircle2, HeartHandshake, FileText, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const corePillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: "Quality-Focused Construction",
      description: "We never compromise on structural integrity. From primary steel brands (Tata / JSW) and high-grade cement to laser-calibrated formwork and concrete cube strength testing."
    },
    {
      icon: <Compass className="w-6 h-6 text-gold" />,
      title: "Thoughtful Architectural Planning",
      description: "Spaces designed for natural illumination, cross-ventilation, and strict Vastu alignment. Detailed working blueprints and 3D models before civil ground-breaking."
    },
    {
      icon: <Eye className="w-6 h-6 text-gold" />,
      title: "Obsessive Attention to Detail",
      description: "From concealed conduit precision and waterproof tile joints to millimeter-accurate false ceiling drops and hand-finished teak joinery."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
      title: "Professional Project Execution",
      description: "Milestone-driven civil engineering schedules managed on-site with disciplined supervision and stage-by-stage quality checklist verifications."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-gold" />,
      title: "Customer-Focused Approach",
      description: "Direct access to proprietor Kiran Gajbhare throughout the project duration. We adapt to your family's custom requirements with personal care."
    },
    {
      icon: <FileText className="w-6 h-6 text-gold" />,
      title: "Transparent Communication",
      description: "Clear square-foot rate documentation, detailed material brand bills, transparent legal titles, and regular photographic progress updates."
    }
  ];

  return (
    <section className="py-28 bg-[#10141B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-xs font-mono uppercase tracking-widest text-gold mb-3">
            The KNS Standard
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Built on Integrity. <br />
            <span className="gold-gradient-text italic font-normal">Delivered with Pride.</span>
          </h2>
          <p className="text-silver text-sm sm:text-base mt-4 font-light">
            Our reputation in Hyderabad's construction and real-estate landscape is grounded in transparent engineering and authentic personal accountability.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-charcoal border border-gold/20 hover:border-gold/50 transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-navy border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl text-ivory font-normal group-hover:text-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
