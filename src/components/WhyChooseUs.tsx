import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Eye, CheckCircle2, HeartHandshake, FileText } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const corePillars = [
    {
      num: '01',
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "Quality-Focused Construction",
      description: "We never compromise on structural integrity. From primary steel brands (Tata / JSW) and high-grade cement to laser-calibrated formwork and concrete cube strength testing."
    },
    {
      num: '02',
      icon: <Compass className="w-5 h-5 text-gold" />,
      title: "Thoughtful Architectural Planning",
      description: "Spaces designed for natural illumination, cross-ventilation, and strict Vastu alignment. Detailed working blueprints and 3D models before civil ground-breaking."
    },
    {
      num: '03',
      icon: <Eye className="w-5 h-5 text-gold" />,
      title: "Obsessive Attention to Detail",
      description: "From concealed conduit precision and waterproof tile joints to millimeter-accurate false ceiling drops and hand-finished teak joinery."
    },
    {
      num: '04',
      icon: <CheckCircle2 className="w-5 h-5 text-gold" />,
      title: "Professional Project Execution",
      description: "Milestone-driven civil engineering schedules managed on-site with disciplined supervision and stage-by-stage quality checklist verifications."
    },
    {
      num: '05',
      icon: <HeartHandshake className="w-5 h-5 text-gold" />,
      title: "Customer-Focused Approach",
      description: "Direct access to proprietor Kiran Gajbhare throughout the project duration. We adapt to your family's custom requirements with personal care."
    },
    {
      num: '06',
      icon: <FileText className="w-5 h-5 text-gold" />,
      title: "Transparent Communication",
      description: "Clear square-foot rate documentation, detailed material brand bills, transparent legal titles, and regular photographic progress updates."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0E131A] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 03 // THE KNS STANDARD
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">FOUNDATIONAL VALUES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Built on Integrity. <br />
                <span className="gold-gradient-text italic font-normal">Delivered with Pride.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-silver text-sm sm:text-base font-light leading-relaxed border-l border-gold/25 pl-4 sm:pl-6">
                Our reputation in Hyderabad's construction and real-estate landscape is grounded in transparent engineering, branded material verifications, and authentic personal accountability.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Architectural Manifesto Matrix: Intersecting Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/20 shadow-2xl">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#121720] hover:bg-[#151D28] p-6 sm:p-8 space-y-4 group transition-colors duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header row with Pillar Number and Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm sm:text-base font-bold text-gold/80 group-hover:text-gold transition-colors">
                    {pillar.num}
                  </span>
                  <div className="w-9 h-9 bg-black/40 border border-gold/20 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl text-ivory font-medium group-hover:text-gold transition-colors leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Minimal architectural footer marker */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-silver/40">
                <span>KNS-PILLAR-0{idx + 1}</span>
                <span className="text-gold/40 group-hover:text-gold transition-colors">STRICT SPEC</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
