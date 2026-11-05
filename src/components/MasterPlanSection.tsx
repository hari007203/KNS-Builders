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
  const [selectedPlot, setSelectedPlot] = useState<ProjectPlot | null>(plots[2]); // Default to an available plot
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
    <section id="villa-plots" className="py-20 sm:py-28 bg-[#10141B] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gold mb-3 shadow-md">
            Featured Plotted Community • 8.25 Acres
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            KNS Premium Villa Community <br />
            <span className="gold-gradient-text italic font-normal">Patancheru / Pocharam Enclave.</span>
          </h2>
          <div className="flex items-center gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-silver">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <span>Ganapatiguda, Pocharam Village, Patancheru Mandal, Sangareddy District</span>
          </div>
        </motion.div>

        {/* Project Key Metrics Overview with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Total Land Area</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">8.25 Acres</span>
            <span className="text-[9px] sm:text-[10px] text-silver">6.25 Upper + 2.00 Lower</span>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Total Villa Plots</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">100 Plots</span>
            <span className="text-[9px] sm:text-[10px] text-silver">Standard 250 Sq.Yards</span>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Plot Dimensions</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">30 × 75 Ft</span>
            <span className="text-[9px] sm:text-[10px] text-silver">2,250 SFT Built-up Area</span>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver font-mono">Internal Roads</span>
            <span className="block font-mono text-xl sm:text-2xl font-bold text-gold mt-1">40' & 30'</span>
            <span className="text-[9px] sm:text-[10px] text-silver">Wide Blacktop Macadam</span>
          </div>
        </motion.div>

        {/* Master Plan Interactive Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-2xl border border-gold/30 p-4 sm:p-8 shadow-2xl mb-12"
        >
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-gold/20 gap-3 sm:gap-4">
            {/* View Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPlanViewMode('plan')}
                className={`flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer min-h-[38px] touch-manipulation ${
                  planViewMode === 'plan'
                    ? 'bg-gold text-navy shadow-md font-bold'
                    : 'bg-navy-800 text-silver border border-silver/20 hover:border-gold/40'
                }`}
              >
                Layout Visual
              </button>
              <button
                onClick={() => setPlanViewMode('grid')}
                className={`flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer min-h-[38px] touch-manipulation ${
                  planViewMode === 'grid'
                    ? 'bg-gold text-navy shadow-md font-bold'
                    : 'bg-navy-800 text-silver border border-silver/20 hover:border-gold/40'
                }`}
              >
                100 Plot Grid
              </button>
            </div>

            {/* Filter Tabs - Mobile Touch Scrollable */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer min-h-[34px] touch-manipulation ${
                  filterStatus === 'all' ? 'bg-gold text-navy font-bold' : 'bg-navy-800 text-silver border border-gold/20 hover:border-gold/40'
                }`}
              >
                All ({plots.length})
              </button>
              <button
                onClick={() => setFilterStatus('available')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer min-h-[34px] touch-manipulation ${
                  filterStatus === 'available' ? 'bg-emerald-600 text-white font-bold' : 'bg-navy-800 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available ({availableCount})
              </button>
              <button
                onClick={() => setFilterStatus('reserved')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer min-h-[34px] touch-manipulation ${
                  filterStatus === 'reserved' ? 'bg-amber-600 text-white font-bold' : 'bg-navy-800 text-amber-300 border border-amber-500/30'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Reserved ({reservedCount})
              </button>
              <button
                onClick={() => setFilterStatus('sold')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer min-h-[34px] touch-manipulation ${
                  filterStatus === 'sold' ? 'bg-zinc-700 text-white font-bold' : 'bg-navy-800 text-silver border border-silver/20'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-silver" />
                Sold ({soldCount})
              </button>
            </div>
          </div>

          {/* Main Visual Display */}
          {planViewMode === 'plan' ? (
            <div className="space-y-4">
              {/* Layout Blueprint Image with Mobile Pinch/Pan Support */}
              <div className="relative rounded-xl overflow-hidden border border-gold/30 bg-navy-900 group">
                <img
                  src="/assets/master-layout-plan-pocharam.png"
                  alt="Official KNS Premium Villa Community Master Layout Concept Plan"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto select-none"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-navy/90 backdrop-blur-md px-2.5 py-1 rounded border border-gold/30 text-[10px] sm:text-[11px] font-mono text-gold flex items-center gap-1.5 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="truncate">Ganapatiguda, Pocharam Layout</span>
                </div>
              </div>
            </div>
          ) : null}

          {/* 100 Plot Directory Grid View - Mobile Tap Optimized */}
          <div className="mt-6 space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gold font-mono font-semibold">
                Tap Any Plot to View Details:
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Search className="w-4 h-4 text-silver shrink-0" />
                <input
                  type="text"
                  placeholder="Find Plot # (e.g. 18)..."
                  value={searchNumber}
                  onChange={(e) => setSearchNumber(e.target.value)}
                  className="bg-navy-800 border border-gold/30 text-ivory text-xs px-3 py-2 rounded focus:outline-none focus:border-gold w-full sm:w-44 transition-colors min-h-[38px]"
                />
              </div>
            </div>

            {/* Interactive Grid of Plots with 44px+ tap targets on mobile */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5 sm:gap-2 max-h-[340px] overflow-y-auto p-2.5 sm:p-3 bg-navy-900/80 rounded-xl border border-gold/20 touch-pan-y">
              {filteredPlots.map((plot) => {
                const isSelected = selectedPlot?.id === plot.id;
                let bgBadge = 'bg-navy-800 border-silver/20 text-silver hover:border-gold/40';
                if (plot.status === 'available') bgBadge = 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300 hover:border-emerald-400';
                if (plot.status === 'reserved') bgBadge = 'bg-amber-950/80 border-amber-500/40 text-amber-300 hover:border-amber-400';
                if (plot.status === 'sold') bgBadge = 'bg-charcoal/80 border-zinc-700 text-zinc-500 opacity-60';

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer min-h-[44px] flex flex-col justify-center items-center touch-manipulation ${bgBadge} ${
                      isSelected ? 'ring-2 ring-gold scale-102 font-bold shadow-lg shadow-gold/20 bg-gold/15' : ''
                    }`}
                  >
                    <span className="block font-mono text-xs sm:text-sm font-bold">#{plot.number}</span>
                    <span className="text-[8px] sm:text-[9px] block uppercase truncate max-w-full">{plot.facing}</span>
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="mt-6 p-4 sm:p-6 rounded-xl bg-charcoal border border-gold/40 shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
                  {/* Plot Basics */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-gold">
                        Plot #{selectedPlot.number}
                      </span>
                      <span className={`px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase font-bold ${
                        selectedPlot.status === 'available'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : selectedPlot.status === 'reserved'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                      }`}>
                        {selectedPlot.status.toUpperCase()}
                      </span>
                      <span className="text-xs text-silver font-mono">
                        {selectedPlot.portion}
                      </span>
                    </div>
                    <p className="text-silver text-xs">
                      Dimensions: <strong>{selectedPlot.dimensions}</strong> • Net Area: <strong>{selectedPlot.size} ({selectedPlot.areaSqFt} Sq.Ft)</strong>
                    </p>
                  </div>

                  {/* Plot Features Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2 sm:p-2.5 rounded bg-navy/80 border border-gold/15">
                      <span className="text-silver text-[9px] sm:text-[10px] uppercase block">Road Access</span>
                      <span className="text-ivory font-semibold text-[11px] sm:text-xs">40' / 30' Road</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded bg-navy/80 border border-gold/15">
                      <span className="text-silver text-[9px] sm:text-[10px] uppercase block">Facing (Vastu)</span>
                      <span className="text-ivory font-semibold text-[11px] sm:text-xs">{selectedPlot.facing} Facing</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded bg-navy/80 border border-gold/15 col-span-2 sm:col-span-1">
                      <span className="text-silver text-[9px] sm:text-[10px] uppercase block">Classification</span>
                      <span className="text-gold font-semibold text-[11px] sm:text-xs">{selectedPlot.category}</span>
                    </div>
                  </div>

                  {/* Booking & Enquiry Action */}
                  <div className="flex items-center gap-3">
                    {selectedPlot.status !== 'sold' ? (
                      <button
                        onClick={() => handlePlotEnquire(selectedPlot)}
                        className="w-full lg:w-auto px-5 sm:px-6 py-3 bg-gradient-to-r from-gold via-gold-500 to-gold-600 text-navy font-semibold text-xs uppercase tracking-wider rounded transition-all duration-300 shadow-md shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
                      >
                        <span>Inquire For Plot #{selectedPlot.number}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-xs text-silver italic">This plot is already registered/sold.</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Community Amenities Grid with Staggered Entrance */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
            <h3 className="font-serif text-xl sm:text-2xl text-ivory">Gated Community Master Amenities</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {VILLA_PLOTS_PROJECT.amenities.map((amenity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-5 rounded-xl bg-charcoal/80 border border-gold/20 hover:border-gold/50 transition-all duration-300 space-y-1.5 sm:space-y-2 shadow-lg"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-navy border border-gold/30 flex items-center justify-center text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base sm:text-lg text-ivory font-medium">{amenity.title}</h4>
                <p className="text-xs text-silver font-light leading-relaxed">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
