import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronRight, ChevronLeft, CheckCircle2, Clock, Layers, ShieldCheck } from 'lucide-react';
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
    <section ref={sectionRef} id="process" className="py-20 sm:py-28 bg-[#12161D] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gold mb-3 shadow-md">
              Interactive 3D Engineering Journey
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
              The Anatomy of a Home: <br />
              <span className="gold-gradient-text italic font-normal">From Soil to Handover.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-md border border-gold/40 hover:border-gold bg-navy text-gold text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-gold/20 cursor-pointer min-h-[42px] touch-manipulation"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-gold animate-pulse" />
                  <span>Pause Auto Journey</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-gold" />
                  <span>Auto Play 9 Stages</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* 9-Stage Progress Nav Timeline with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-10 overflow-x-auto pb-3 sm:pb-4 no-scrollbar touch-pan-x"
        >
          <div className="flex items-center min-w-max gap-2 sm:gap-3">
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
                  className={`flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 border cursor-pointer min-h-[40px] touch-manipulation ${
                    isActive
                      ? 'bg-gold text-navy border-gold font-bold shadow-lg shadow-gold/25 scale-102 sm:scale-105'
                      : isPast
                      ? 'bg-navy-800 text-gold/80 border-gold/30 hover:border-gold'
                      : 'bg-navy-900/60 text-silver border-silver/15 hover:border-gold/40'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-colors ${
                      isActive
                        ? 'bg-navy text-gold font-bold'
                        : isPast
                        ? 'bg-gold/20 text-gold'
                        : 'bg-charcoal text-silver'
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Column 1: Interactive 3D Canvas (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ConstructionProcess3D stage={activeStageId} />

            {/* Stage Quick Jump Controls - Mobile Friendly 44px+ tap targets */}
            <div className="flex items-center justify-between mt-3 sm:mt-4 px-1 text-xs text-silver">
              <button
                disabled={activeStageId === 1}
                onClick={() => {
                  setActiveStageId((prev) => Math.max(1, prev - 1));
                  setIsPlaying(false);
                }}
                className="flex items-center gap-1.5 hover:text-gold disabled:opacity-30 disabled:hover:text-silver cursor-pointer transition-colors min-h-[44px] px-2 touch-manipulation"
                aria-label="Go to Previous Stage"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Stage</span>
              </button>

              <span className="font-mono text-gold font-semibold tracking-wider text-xs sm:text-sm">
                Stage 0{activeStageId} / 09
              </span>

              <button
                disabled={activeStageId === 9}
                onClick={() => {
                  setActiveStageId((prev) => Math.min(9, prev + 1));
                  setIsPlaying(false);
                }}
                className="flex items-center gap-1.5 hover:text-gold disabled:opacity-30 disabled:hover:text-silver cursor-pointer transition-colors min-h-[44px] px-2 touch-manipulation"
                aria-label="Go to Next Stage"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Column 2: Stage Details & Engineering Milestones (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-5 sm:p-8 rounded-xl border border-gold/30 shadow-2xl space-y-5 sm:space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Badge & Timeline */}
                  <div className="flex items-center justify-between border-b border-gold/20 pb-3 sm:pb-4">
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-mono font-semibold">
                      Stage 0{activeStage.id} — Milestone
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-silver font-mono">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{activeStage.timeline}</span>
                    </div>
                  </div>

                  {/* Title & Short Summary */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="font-serif text-xl sm:text-3xl text-ivory font-normal leading-snug">
                      {activeStage.title}
                    </h3>
                    <p className="text-silver text-xs sm:text-sm leading-relaxed font-light">
                      {activeStage.fullDesc}
                    </p>
                  </div>

                  {/* Key Materials Used */}
                  <div className="space-y-2 pt-2 border-t border-gold/15">
                    <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-mono flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Specified Materials:</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {activeStage.keyMaterials.map((mat, i) => (
                        <span key={i} className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded bg-navy-800 text-ivory border border-gold/20 shadow-sm">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inspection Milestones */}
                  <div className="space-y-2 pt-2 border-t border-gold/15">
                    <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Quality Assurance Checkpoints:</span>
                    </h4>
                    <div className="space-y-1.5">
                      {activeStage.inspectionMilestones.map((checkpoint, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-silver">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{checkpoint}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Quote link */}
                  <div className="pt-2">
                    <a
                      href="#calculator"
                      className="w-full py-3 bg-navy-800 hover:bg-gold hover:text-navy text-gold text-xs uppercase tracking-wider font-semibold rounded border border-gold/30 hover:border-gold transition-all duration-300 flex items-center justify-center gap-2 shadow-md touch-manipulation min-h-[44px]"
                    >
                      <span>Calculate Turnkey Price for this Home</span>
                      <ChevronRight className="w-4 h-4" />
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
