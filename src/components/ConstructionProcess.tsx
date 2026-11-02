import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronRight, ChevronLeft, CheckCircle2, Clock, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { CONSTRUCTION_STAGES } from '../data/mockData';
import { ConstructionProcess3D } from './ConstructionProcess3D';

export const ConstructionProcess: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <section id="process" className="py-28 bg-[#12161D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-xs font-mono uppercase tracking-widest text-gold mb-3">
              Interactive 3D Engineering Journey
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light">
              The Anatomy of a Home: <br />
              <span className="gold-gradient-text italic font-normal">From Soil to Handover.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2.5 rounded-md border border-gold/40 hover:border-gold bg-navy text-gold text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Auto Journey</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto Play 9 Stages</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 9-Stage Progress Nav Timeline */}
        <div className="mb-10 overflow-x-auto pb-4">
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
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-gold text-navy border-gold font-bold shadow-lg shadow-gold/20 scale-105'
                      : isPast
                      ? 'bg-navy-800 text-gold/80 border-gold/30 hover:border-gold'
                      : 'bg-navy-900/60 text-silver border-silver/15 hover:border-gold/40'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    isActive ? 'bg-navy text-gold font-bold' : isPast ? 'bg-gold/20 text-gold' : 'bg-charcoal text-silver'
                  }`}>
                    0{stage.id}
                  </span>
                  <span className="hidden md:inline">{stage.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Interactive 3D Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Column 1: Interactive 3D Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <ConstructionProcess3D stage={activeStageId} />

            {/* Stage Quick Jump Controls */}
            <div className="flex items-center justify-between mt-4 px-2 text-xs text-silver">
              <button
                disabled={activeStageId === 1}
                onClick={() => setActiveStageId((prev) => Math.max(1, prev - 1))}
                className="flex items-center gap-1 hover:text-gold disabled:opacity-30 disabled:hover:text-silver cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Stage</span>
              </button>

              <span className="font-mono text-gold">
                Stage {activeStageId} of 9
              </span>

              <button
                disabled={activeStageId === 9}
                onClick={() => setActiveStageId((prev) => Math.min(9, prev + 1))}
                className="flex items-center gap-1 hover:text-gold disabled:opacity-30 disabled:hover:text-silver cursor-pointer"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Stage Details & Engineering Milestones (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-gold/30 shadow-2xl space-y-6">
              {/* Badge & Timeline */}
              <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                <span className="text-xs uppercase tracking-widest text-gold font-mono font-semibold">
                  Stage 0{activeStage.id} — Milestone
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
                <p className="text-silver text-sm leading-relaxed font-light">
                  {activeStage.fullDesc}
                </p>
              </div>

              {/* Key Materials Used */}
              <div className="space-y-2 pt-2 border-t border-gold/15">
                <h4 className="text-xs uppercase tracking-widest text-gold font-mono flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Specified Materials:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeStage.keyMaterials.map((mat, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-navy-800 text-ivory border border-gold/20">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inspection Milestones */}
              <div className="space-y-2 pt-2 border-t border-gold/15">
                <h4 className="text-xs uppercase tracking-widest text-gold font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Quality Assurance Checkpoints:</span>
                </h4>
                <div className="space-y-1.5">
                  {activeStage.inspectionMilestones.map((checkpoint, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-silver">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{checkpoint}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Quote link */}
              <div className="pt-2">
                <a
                  href="#calculator"
                  className="w-full py-2.5 bg-navy-800 hover:bg-gold hover:text-navy text-gold text-xs uppercase tracking-wider font-semibold rounded border border-gold/30 hover:border-gold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Calculate Turnkey Price for this Home</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
