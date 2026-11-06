import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { VILLA_PLOTS_PROJECT, BRAND_INFO } from '../data/mockData';
import { ProjectPlot } from '../types';

interface MasterPlanSectionProps {
  plots: ProjectPlot[];
  onSelectPlotForEnquiry?: (plot: ProjectPlot) => void;
}

export const MasterPlanSection: React.FC<MasterPlanSectionProps> = ({ plots, onSelectPlotForEnquiry }) => {
  const [selectedPlot, setSelectedPlot] = useState<ProjectPlot | null>(plots[2]);
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'reserved' | 'sold'>('all');
  const [filterPortion, setFilterPortion] = useState<'all' | 'upper' | 'lower'>('all');
  const [searchNumber, setSearchNumber] = useState('');
  const [planViewMode, setPlanViewMode] = useState<'plan' | 'grid'>('plan');

  const filteredPlots = plots.filter((plot) => {
    if (filterStatus !== 'all' && plot.status !== filterStatus) return false;
    if (filterPortion === 'upper' && !plot.portion.includes('Upper')) return false;
    if (filterPortion === 'lower' && !plot.portion.includes('Lower')) return false;
    if (searchNumber && !plot.number.includes(searchNumber.trim())) return false;
    return true;
  });

  const availableCount = plots.filter((p) => p.status === 'available').length;
  const reservedCount = plots.filter((p) => p.status === 'reserved').length;
  const soldCount = plots.filter((p) => p.status === 'sold').length;

  const handlePlotEnquire = (plot: ProjectPlot) => {
    if (onSelectPlotForEnquiry) {
      onSelectPlotForEnquiry(plot);
    }
    const text = `Hello Kiran Sir, I am interested in Villa Plot #${plot.number} (250 Sq.Yds, ${plot.facing} facing) in the KNS Villa Community, Pocharam. Please share current pricing and availability.`;
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="villa-plots" className="py-24 sm:py-32 bg-[#0C1017] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 06 // PLOTTED ESTATE ARCHITECTURE
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">8.25 ACRE GATED ENCLAVE</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                KNS Villa Community <br />
                <span className="gold-gradient-text italic font-normal">Patancheru / Pocharam Enclave.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-silver/80 font-light border-l border-gold/25 pl-4 sm:pl-6">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>Ganapatiguda, Pocharam Village, Patancheru Mandal, Sangareddy District</span>
            </div>
          </div>
        </motion.div>

        {/* Project Key Metrics Overview: Architectural Survey Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20 border border-gold/20 shadow-2xl mb-12 sm:mb-16"
        >
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">TOTAL SURVEYED LAND</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">8.25 Acres</span>
            <span className="text-[10px] text-silver/60 font-mono block">6.25 Upper + 2.00 Lower</span>
          </div>
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">PLOTTED INVENTORY</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">100 Plots</span>
            <span className="text-[10px] text-silver/60 font-mono block">Standard 250 Sq.Yards</span>
          </div>
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">DIMENSION STANDARD</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">30 × 75 Ft</span>
            <span className="text-[10px] text-silver/60 font-mono block">2,250 SFT Built-Up Potential</span>
          </div>
          <div className="bg-[#121720] p-4 sm:p-6 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">INTERNAL CORRIDORS</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ivory block">40' & 30'</span>
            <span className="text-[10px] text-silver/60 font-mono block">Blacktop Macadam Roads</span>
          </div>
        </motion.div>

        {/* Master Plan Interactive Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#121720] border border-gold/30 p-5 sm:p-8 shadow-2xl mb-14 sm:mb-20 space-y-6"
        >
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-gold/15 gap-4">
            {/* View Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPlanViewMode('plan')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer min-h-[40px] touch-manipulation border ${
                  planViewMode === 'plan'
                    ? 'bg-gold text-navy font-bold border-gold'
                    : 'bg-[#0E131A] text-silver border-white/5 hover:border-gold/40'
                }`}
              >
                Layout Visual Blueprint
              </button>
              <button
                onClick={() => setPlanViewMode('grid')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer min-h-[40px] touch-manipulation border ${
                  planViewMode === 'grid'
                    ? 'bg-gold text-navy font-bold border-gold'
                    : 'bg-[#0E131A] text-silver border-white/5 hover:border-gold/40'
                }`}
              >
                100 Plot Directory
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer min-h-[36px] touch-manipulation border ${
                  filterStatus === 'all'
                    ? 'bg-gold text-navy font-bold border-gold'
                    : 'bg-[#0E131A] text-silver border-white/5 hover:border-gold/30'
                }`}
              >
                All ({plots.length})
              </button>
              <button
                onClick={() => setFilterStatus('available')}
                className={`px-3 py-1.5 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer min-h-[36px] touch-manipulation border ${
                  filterStatus === 'available'
                    ? 'bg-emerald-600 text-white font-bold border-emerald-500'
                    : 'bg-[#0E131A] text-emerald-400 border-white/5 hover:border-emerald-500/40'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available ({availableCount})
              </button>
              <button
                onClick={() => setFilterStatus('reserved')}
                className={`px-3 py-1.5 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer min-h-[36px] touch-manipulation border ${
                  filterStatus === 'reserved'
                    ? 'bg-amber-600 text-white font-bold border-amber-500'
                    : 'bg-[#0E131A] text-amber-300 border-white/5 hover:border-amber-500/40'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Reserved ({reservedCount})
              </button>
              <button
                onClick={() => setFilterStatus('sold')}
                className={`px-3 py-1.5 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer min-h-[36px] touch-manipulation border ${
                  filterStatus === 'sold'
                    ? 'bg-zinc-700 text-white font-bold border-zinc-600'
                    : 'bg-[#0E131A] text-silver/60 border-white/5 hover:border-zinc-700'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-silver/60" />
                Sold ({soldCount})
              </button>
            </div>
          </div>

          {/* Main Visual Display */}
          {planViewMode === 'plan' && (
            <div className="relative border border-gold/25 bg-[#080B0F] p-2 sm:p-4">
              <img
                src="/assets/master-layout-plan-pocharam.png"
                alt="Official KNS Premium Villa Community Master Layout Concept Plan"
                className="w-full h-auto object-contain max-h-[640px] mx-auto select-none"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 z-10 bg-black/80 px-3 py-1 border border-gold/30 text-[10px] font-mono text-gold flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>SURVEY DOSSIER: GANAPATIGUDA, POCHARAM</span>
              </div>
            </div>
          )}

          {/* 100 Plot Directory Grid View */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
                SELECT PLOT DOSSIER (100 UNITS SURVEYED):
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Search className="w-4 h-4 text-silver/60 shrink-0" />
                <input
                  type="text"
                  placeholder="Filter Plot # (e.g. 18)..."
                  value={searchNumber}
                  onChange={(e) => setSearchNumber(e.target.value)}
                  className="bg-[#0E131A] border border-gold/20 text-ivory text-xs px-3 py-2 focus:outline-none focus:border-gold w-full sm:w-48 font-mono min-h-[38px]"
                />
              </div>
            </div>

            {/* Interactive Grid of Plots */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5 sm:gap-2 max-h-[340px] overflow-y-auto p-3 bg-[#090D12] border border-white/5 touch-pan-y">
              {filteredPlots.map((plot) => {
                const isSelected = selectedPlot?.id === plot.id;
                let bgBadge = 'bg-[#121720] border-white/5 text-silver/70 hover:border-gold/40';
                if (plot.status === 'available') bgBadge = 'bg-emerald-950/70 border-emerald-500/30 text-emerald-300 hover:border-emerald-400';
                if (plot.status === 'reserved') bgBadge = 'bg-amber-950/70 border-amber-500/30 text-amber-300 hover:border-amber-400';
                if (plot.status === 'sold') bgBadge = 'bg-[#0E131A] border-zinc-800 text-zinc-600 opacity-50';

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`p-2 border text-center transition-all cursor-pointer min-h-[44px] flex flex-col justify-center items-center touch-manipulation ${bgBadge} ${
                      isSelected ? 'border-gold font-bold shadow-md bg-gold/15' : ''
                    }`}
                  >
                    <span className="block font-mono text-xs sm:text-sm font-bold">#{plot.number}</span>
                    <span className="text-[8px] block uppercase truncate max-w-full font-mono">{plot.facing}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Plot Detail Inspector Card */}
          <AnimatePresence mode="wait">
            {selectedPlot && (
              <motion.div
                key={selectedPlot.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-7 bg-[#0E131A] border border-gold/30 shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Plot Basics */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-gold">
                        Plot #{selectedPlot.number}
                      </span>
                      <span className={`px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold border ${
                        selectedPlot.status === 'available'
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                          : selectedPlot.status === 'reserved'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                      }`}>
                        {selectedPlot.status.toUpperCase()}
                      </span>
                      <span className="text-xs text-silver font-mono">
                        {selectedPlot.portion}
                      </span>
                    </div>
                    <p className="text-silver text-xs font-light">
                      Dimensions: <strong className="text-ivory">{selectedPlot.dimensions}</strong> • Net Area: <strong className="text-ivory">{selectedPlot.size} ({selectedPlot.areaSqFt} Sq.Ft)</strong>
                    </p>
                  </div>

                  {/* Plot Features Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                    <div className="p-3 bg-[#121720] border border-gold/15">
                      <span className="text-silver/60 text-[9px] uppercase block">Road Access</span>
                      <span className="text-ivory font-semibold text-xs">40' / 30' Road</span>
                    </div>
                    <div className="p-3 bg-[#121720] border border-gold/15">
                      <span className="text-silver/60 text-[9px] uppercase block">Facing (Vastu)</span>
                      <span className="text-ivory font-semibold text-xs">{selectedPlot.facing} Facing</span>
                    </div>
                    <div className="p-3 bg-[#121720] border border-gold/15 col-span-2 sm:col-span-1">
                      <span className="text-silver/60 text-[9px] uppercase block">Classification</span>
                      <span className="text-gold font-semibold text-xs">{selectedPlot.category}</span>
                    </div>
                  </div>

                  {/* Booking & Enquiry Action */}
                  <div className="flex items-center">
                    {selectedPlot.status !== 'sold' ? (
                      <button
                        onClick={() => handlePlotEnquire(selectedPlot)}
                        className="w-full lg:w-auto px-6 py-3 bg-gold hover:bg-gold-300 text-navy font-semibold text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
                      >
                        <span>Inquire For Plot #{selectedPlot.number}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-xs text-silver/60 italic font-mono">This plot is registered / sold.</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Community Amenities Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gold" />
            <h3 className="font-serif text-2xl text-ivory">Gated Community Master Infrastructure</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VILLA_PLOTS_PROJECT.amenities.map((amenity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="p-5 bg-[#121720] border border-white/5 hover:border-gold/40 transition-colors space-y-2"
              >
                <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-ivory font-medium">{amenity.title}</h4>
                <p className="text-xs text-silver font-light leading-relaxed">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
