import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Eye, CheckCircle2, HeartHandshake, FileText } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const corePillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />,
      title: "Quality-Focused Construction",
      description: "We never compromise on structural integrity. From primary steel brands (Tata / JSW) and high-grade cement to laser-calibrated formwork and concrete cube strength testing."
    },
    {
      icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />,
      title: "Thoughtful Architectural Planning",
      description: "Spaces designed for natural illumination, cross-ventilation, and strict Vastu alignment. Detailed working blueprints and 3D models before civil ground-breaking."
    },
    {
      icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />,
      title: "Obsessive Attention to Detail",
      description: "From concealed conduit precision and waterproof tile joints to millimeter-accurate false ceiling drops and hand-finished teak joinery."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />,
      title: "Professional Project Execution",
      description: "Milestone-driven civil engineering schedules managed on-site with disciplined supervision and stage-by-stage quality checklist verifications."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />,
      title: "Customer-Focused Approach",
      description: "Direct access to proprietor Kiran Gajbhare throughout the project duration. We adapt to your family's custom requirements with personal care."
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />,
      title: "Transparent Communication",
      description: "Clear square-foot rate documentation, detailed material brand bills, transparent legal titles, and regular photographic progress updates."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#10141B] relative overflow-hidden">
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
            The KNS Standard
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Built on Integrity. <br />
            <span className="gold-gradient-text italic font-normal">Delivered with Pride.</span>
          </h2>
          <p className="text-silver text-sm sm:text-base mt-3 sm:mt-4 font-light leading-relaxed">
            Our reputation in Hyderabad's construction and real-estate landscape is grounded in transparent engineering and authentic personal accountability.
          </p>
        </motion.div>

        {/* 6 Core Pillars Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="p-5 sm:p-8 rounded-xl bg-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-300 space-y-3 sm:space-y-4 group shadow-xl hover:shadow-gold/10"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-navy border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:scale-105 transition-all duration-300 shadow-md">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal group-hover:text-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
