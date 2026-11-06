import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronRight, ChevronLeft, CheckCircle2, Clock, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONSTRUCTION_STAGES } from '../data/mockData';
import { ConstructionProcess3D } from './ConstructionProcess3D';

export const ConstructionProcess: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStageId((prev) => (prev < 9 ? prev + 1 : 1));
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeStage = CONSTRUCTION_STAGES.find((s) => s.id === activeStageId) || CONSTRUCTION_STAGES[0];

  return (
    <section ref={sectionRef} id="process" className="py-24 sm:py-32 bg-[#0C1017] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 04 // STRUCTURAL EXECUTION CHRONOLOGY
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">3D SPATIAL SIMULATION</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                The Anatomy of a Home: <br />
                <span className="gold-gradient-text italic font-normal">From Subsoil to Handover.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-full sm:w-auto px-5 py-2.5 border border-gold/40 hover:border-gold bg-[#141B24] text-gold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[44px] touch-manipulation"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-gold animate-pulse" />
                    <span>Pause Chronology</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-gold" />
                    <span>Auto Play 9 Stages</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* 9-Stage Progress Rail */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-10 overflow-x-auto pb-3 no-scrollbar touch-pan-x"
        >
          <div className="flex items-center min-w-max gap-1.5 sm:gap-2 border-b border-gold/15 pb-3">
            {CONSTRUCTION_STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              const isPast = stage.id < activeStageId;

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveStageId(stage.id);
                    setIsPlaying(false);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer min-h-[40px] touch-manipulation ${
                    isActive
                      ? 'bg-gold text-navy border-gold font-bold shadow-md'
                      : isPast
                      ? 'bg-[#121720] text-gold/80 border-gold/30 hover:border-gold'
                      : 'bg-[#0E131A] text-silver/60 border-white/5 hover:border-gold/30'
                  }`}
                >
                  <span
                    className={`w-4 h-4 flex items-center justify-center text-[10px] ${
                      isActive ? 'bg-navy text-gold font-bold' : isPast ? 'bg-gold/20 text-gold' : 'text-silver/50'
                    }`}
                  >
                    0{stage.id}
                  </span>
                  <span>{stage.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Two-Column Interactive 3D Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Column 1: Interactive 3D Canvas (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#121720] border border-gold/25 p-4 sm:p-5 shadow-2xl space-y-4"
          >
            {/* Header info bar */}
            <div className="flex items-center justify-between text-xs font-mono text-silver/70 border-b border-gold/15 pb-2.5">
              <span className="text-gold tracking-widest uppercase text-[10px]">
                LIVE PROCEDURAL MODEL // RESIDENTIAL VILLA
              </span>
              <span className="text-[10px]">ROTATION: FREE ORBIT</span>
            </div>

            {/* 3D Canvas */}
            <div className="rounded overflow-hidden">
              <ConstructionProcess3D stage={activeStageId} />
            </div>

            {/* Stage Quick Jump Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-gold/15 text-xs text-silver">
              <button
                disabled={activeStageId === 1}
                onClick={() => {
                  setActiveStageId((prev) => Math.max(1, prev - 1));
                  setIsPlaying(false);
                }}
                className="flex items-center gap-1.5 hover:text-gold disabled:opacity-30 disabled:hover:text-silver cursor-pointer transition-colors min-h-[44px] px-2 font-mono uppercase tracking-wider text-[11px] touch-manipulation"
                aria-label="Go to Previous Stage"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Stage</span>
              </button>

              <span className="font-mono text-gold font-medium tracking-widest text-xs sm:text-sm">
                STAGE 0{activeStageId} / 09
              </span>

              <button
                disabled={activeStageId === 9}
                onClick={() => {
                  setActiveStageId((prev) => Math.min(9, prev + 1));
                  setIsPlaying(false);
                }}
                className="flex items-center gap-1.5 hover:text-gold disabled:opacity-30 disabled:hover:text-silver cursor-pointer transition-colors min-h-[44px] px-2 font-mono uppercase tracking-wider text-[11px] touch-manipulation"
                aria-label="Go to Next Stage"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Column 2: Stage Details & Engineering Milestones (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121720] p-6 sm:p-8 border border-gold/25 shadow-2xl space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-5 sm:space-y-6"
                >
                  {/* Badge & Timeline */}
                  <div className="flex items-center justify-between border-b border-gold/15 pb-4">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold">
                      CHRONOLOGY 0{activeStage.id}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-silver font-mono">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{activeStage.timeline}</span>
                    </div>
                  </div>

                  {/* Title & Short Summary */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
                      {activeStage.title}
                    </h3>
                    <p className="text-silver text-xs sm:text-sm leading-relaxed font-light">
                      {activeStage.fullDesc}
                    </p>
                  </div>

                  {/* Key Materials Used */}
                  <div className="space-y-2 pt-2 border-t border-gold/15">
                    <h4 className="text-[10px] uppercase tracking-widest text-gold font-mono flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Specified Materials:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeStage.keyMaterials.map((mat, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-1 bg-[#0E131A] text-ivory border border-white/5 font-mono">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inspection Milestones */}
                  <div className="space-y-2 pt-2 border-t border-gold/15">
                    <h4 className="text-[10px] uppercase tracking-widest text-gold font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Quality Assurance Protocol:</span>
                    </h4>
                    <div className="space-y-2">
                      {activeStage.inspectionMilestones.map((checkpoint, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-silver">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{checkpoint}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Quote link */}
                  <div className="pt-2">
                    <a
                      href="#packages"
                      className="w-full py-3 bg-[#0B0F15] hover:bg-gold hover:text-navy text-gold text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border border-gold/30 hover:border-gold touch-manipulation min-h-[44px]"
                    >
                      <span>Calculate Turnkey Price for this Structure</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
