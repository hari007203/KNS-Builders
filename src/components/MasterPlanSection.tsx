import React, { useState } from 'react';
import { MapPin, CheckCircle2, Shield, Trees, Waves, Building, Navigation, Zap, Droplets, Info, Search, Filter, Phone, ArrowRight, Eye } from 'lucide-react';
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
    <section id="villa-plots" className="py-28 bg-[#10141B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-xs font-mono uppercase tracking-widest text-gold mb-3">
            Featured Plotted Community • 8.25 Acres
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            KNS Premium Villa Community <br />
            <span className="gold-gradient-text italic font-normal">Patancheru / Pocharam Enclave.</span>
          </h2>
          <div className="flex items-center gap-2 mt-4 text-xs sm:text-sm text-silver">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Ganapatiguda, Pocharam Village, Patancheru Mandal, Sangareddy District</span>
          </div>
        </div>

        {/* Project Key Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-panel p-4 rounded-xl border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Total Land Area</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">8.25 Acres</span>
            <span className="text-[10px] text-silver">6.25 Upper + 2.00 Lower</span>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Total Villa Plots</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">100 Plots</span>
            <span className="text-[10px] text-silver">Standard 250 Sq.Yards</span>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Plot Dimensions</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">30 × 75 Ft</span>
            <span className="text-[10px] text-silver">2,250 Sq.Ft Built-up Potential</span>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-gold/20">
            <span className="text-[11px] uppercase tracking-wider text-silver font-mono">Internal Roads</span>
            <span className="block font-mono text-2xl font-bold text-gold mt-1">40' & 30'</span>
            <span className="text-[10px] text-silver">Wide Blacktop Macadam</span>
          </div>
        </div>

        {/* Master Plan Interactive Area */}
        <div className="glass-panel rounded-2xl border border-gold/30 p-6 sm:p-8 shadow-2xl mb-12">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-gold/20 gap-4">
            {/* View Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPlanViewMode('plan')}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  planViewMode === 'plan'
                    ? 'bg-gold text-navy shadow-md'
                    : 'bg-navy-800 text-silver border border-silver/20 hover:border-gold/40'
                }`}
              >
                Interactive Layout Visual
              </button>
              <button
                onClick={() => setPlanViewMode('grid')}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  planViewMode === 'grid'
                    ? 'bg-gold text-navy shadow-md'
                    : 'bg-navy-800 text-silver border border-silver/20 hover:border-gold/40'
                }`}
              >
                100 Plot Directory Grid
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono cursor-pointer ${
                  filterStatus === 'all' ? 'bg-gold text-navy font-bold' : 'bg-navy-800 text-silver border border-gold/20'
                }`}
              >
                All ({plots.length})
              </button>
              <button
                onClick={() => setFilterStatus('available')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 cursor-pointer ${
                  filterStatus === 'available' ? 'bg-emerald-600 text-white font-bold' : 'bg-navy-800 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available ({availableCount})
              </button>
              <button
                onClick={() => setFilterStatus('reserved')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 cursor-pointer ${
                  filterStatus === 'reserved' ? 'bg-amber-600 text-white font-bold' : 'bg-navy-800 text-amber-300 border border-amber-500/30'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Reserved ({reservedCount})
              </button>
              <button
                onClick={() => setFilterStatus('sold')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 cursor-pointer ${
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
            <div className="space-y-6">
              {/* Layout Blueprint Image with Zoom & Hover Indicator */}
              <div className="relative rounded-xl overflow-hidden border border-gold/30 bg-navy-900 group">
                <img
                  src="/assets/master-layout-plan-pocharam.png"
                  alt="Official KNS Premium Villa Community Master Layout Concept Plan"
                  className="w-full h-auto object-contain max-h-[650px] mx-auto select-none"
                />

                {/* Floating Note */}
                <div className="absolute top-4 left-4 z-10 bg-navy/90 backdrop-blur-md px-3 py-1.5 rounded border border-gold/30 text-[11px] font-mono text-gold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Actual Surveyed Layout — Ganapatiguda, Pocharam</span>
                </div>

                <div className="absolute bottom-4 right-4 z-10 bg-navy/90 backdrop-blur-md px-3 py-1.5 rounded border border-gold/30 text-[11px] font-mono text-silver">
                  Scroll down to inspect individual plot status
                </div>
              </div>
            </div>
          ) : null}

          {/* 100 Plot Directory Grid View */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-wider text-gold font-mono font-semibold">
                Select Any Plot to Inspect Details & Book:
              </span>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-silver" />
                <input
                  type="text"
                  placeholder="Find Plot # (e.g. 18)..."
                  value={searchNumber}
                  onChange={(e) => setSearchNumber(e.target.value)}
                  className="bg-navy-800 border border-gold/30 text-ivory text-xs px-3 py-1.5 rounded focus:outline-none focus:border-gold w-44"
                />
              </div>
            </div>

            {/* Interactive Grid of Plots */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 max-h-[360px] overflow-y-auto p-3 bg-navy-900/80 rounded-xl border border-gold/20">
              {filteredPlots.map((plot) => {
                const isSelected = selectedPlot?.id === plot.id;
                let bgBadge = 'bg-navy-800 border-silver/20 text-silver';
                if (plot.status === 'available') bgBadge = 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300 hover:border-emerald-400';
                if (plot.status === 'reserved') bgBadge = 'bg-amber-950/80 border-amber-500/40 text-amber-300 hover:border-amber-400';
                if (plot.status === 'sold') bgBadge = 'bg-charcoal/80 border-zinc-700 text-zinc-500 opacity-60';

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${bgBadge} ${
                      isSelected ? 'ring-2 ring-gold scale-105 font-bold shadow-lg' : ''
                    }`}
                  >
                    <span className="block font-mono text-sm font-bold">#{plot.number}</span>
                    <span className="text-[9px] block uppercase truncate">{plot.facing}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Plot Detail Inspector Modal / Card */}
          {selectedPlot && (
            <div className="mt-8 p-6 rounded-xl bg-charcoal border border-gold/40 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Plot Basics */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-gold">
                      Plot #{selectedPlot.number}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase font-bold ${
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 rounded bg-navy/80 border border-gold/15">
                    <span className="text-silver text-[10px] uppercase block">Road Access</span>
                    <span className="text-ivory font-semibold">40' Main / 30' Road</span>
                  </div>
                  <div className="p-2.5 rounded bg-navy/80 border border-gold/15">
                    <span className="text-silver text-[10px] uppercase block">Facing / Orientation</span>
                    <span className="text-ivory font-semibold">{selectedPlot.facing} Facing (Vastu)</span>
                  </div>
                  <div className="p-2.5 rounded bg-navy/80 border border-gold/15 col-span-2 sm:col-span-1">
                    <span className="text-silver text-[10px] uppercase block">Classification</span>
                    <span className="text-gold font-semibold">{selectedPlot.category}</span>
                  </div>
                </div>

                {/* Booking & Enquiry Action */}
                <div className="flex items-center gap-3">
                  {selectedPlot.status !== 'sold' ? (
                    <button
                      onClick={() => handlePlotEnquire(selectedPlot)}
                      className="px-6 py-3 bg-gold hover:bg-gold-500 text-navy font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-md shadow-gold/20 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Inquire For Plot #{selectedPlot.number}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-xs text-silver italic">This plot is already registered/sold.</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Community Amenities Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <h3 className="font-serif text-2xl text-ivory">Gated Community Master Amenities</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VILLA_PLOTS_PROJECT.amenities.map((amenity, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-charcoal/80 border border-gold/20 hover:border-gold/50 transition-colors space-y-2">
                <div className="w-9 h-9 rounded-lg bg-navy border border-gold/30 flex items-center justify-center text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-ivory font-medium">{amenity.title}</h4>
                <p className="text-xs text-silver font-light leading-relaxed">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
