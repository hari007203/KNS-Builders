import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { CONSTRUCTION_PACKAGES, BRAND_INFO } from '../data/mockData';

export const CostCalculator: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<'standard' | 'premium' | 'commercial'>('premium');
  const [builtUpArea, setBuiltUpArea] = useState<number>(2400);

  // Optional add-ons with indicative costs
  const [includeModularKitchen, setIncludeModularKitchen] = useState(true);
  const [includeFullWardrobes, setIncludeFullWardrobes] = useState(true);
  const [includeFalseCeiling, setIncludeFalseCeiling] = useState(true);
  const [includeSolarPlant, setIncludeSolarPlant] = useState(false);

  const activePackage = CONSTRUCTION_PACKAGES.find((p) => p.id === selectedPackageId) || CONSTRUCTION_PACKAGES[1];

  // Base construction cost range
  const minBaseCost = builtUpArea * activePackage.minRate;
  const maxBaseCost = builtUpArea * activePackage.maxRate;

  // Add-ons calculations
  let addOnsCost = 0;
  if (includeModularKitchen) addOnsCost += 250000;
  if (includeFullWardrobes) addOnsCost += 350000;
  if (includeFalseCeiling && selectedPackageId === 'standard') addOnsCost += builtUpArea * 110;
  if (includeSolarPlant) addOnsCost += 220000; // 3kW solar rooftop

  const totalMin = minBaseCost + addOnsCost;
  const totalMax = maxBaseCost + addOnsCost;

  const formatLakhs = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  const handleSendWhatsAppQuote = () => {
    const text = `Hello Kiran Sir, I calculated an indicative estimate on the KNS website:
- Service: ${activePackage.name}
- Built-up Area: ${builtUpArea} Sq.Ft.
- Estimated Range: ${formatLakhs(totalMin)} to ${formatLakhs(totalMax)}
I would like to request a detailed site survey and finalized quotation for my plot.`;
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#101820] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy-800 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gold mb-3 shadow-md">
            Indicative Turnkey Pricing & Estimation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Transparent Pricing. <br />
            <span className="gold-gradient-text italic font-normal">Zero Hidden Surprises.</span>
          </h2>
          <p className="text-silver text-sm sm:text-base mt-3 sm:mt-4 font-light leading-relaxed">
            All prices include complete civil materials, skilled engineering labor, and structural compliance. Indicative rates subject to site topography, soil conditions, and final client specifications.
          </p>
        </motion.div>

        {/* 3 Package Comparison Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {CONSTRUCTION_PACKAGES.map((pkg, idx) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedPackageId(pkg.id as any)}
                className={`relative rounded-xl p-5 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer touch-manipulation ${
                  isSelected
                    ? 'bg-charcoal border-2 border-gold shadow-2xl scale-[1.01] sm:scale-[1.02] shadow-gold/15'
                    : 'bg-navy-800/80 border border-gold/20 hover:border-gold/50 shadow-lg'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-5 sm:left-6 px-3 py-1 bg-gold text-navy font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-3.5 sm:space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-ivory">{pkg.name}</h3>
                    <p className="text-xs text-silver font-light">{pkg.tagline}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-lg bg-navy/80 border border-gold/15">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-gold">
                        ₹{pkg.minRate} – ₹{pkg.maxRate}
                      </span>
                      <span className="text-xs text-silver font-mono">/ sq.ft</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-silver block mt-1">Materials + Civil Labor Included</span>
                  </div>

                  <div className="space-y-2 pt-1 sm:pt-2">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gold font-mono block">
                      Package Inclusions:
                    </span>
                    {pkg.features.slice(0, 6).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-ivory/80">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gold/15">
                  <button
                    className={`w-full py-2.5 sm:py-3 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer min-h-[42px] touch-manipulation ${
                      isSelected
                        ? 'bg-gold text-navy shadow-md shadow-gold/20 font-bold'
                        : 'border border-gold/30 text-gold hover:border-gold'
                    }`}
                  >
                    {isSelected ? 'Selected for Calculator' : 'Select Package'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Construction Cost Calculator */}
        <motion.div
          id="calculator"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-2xl p-5 sm:p-10 border border-gold/30 shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-2xl mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-widest mb-1">
              <Calculator className="w-4 h-4" />
              <span>Real-Time Estimation Tool</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-ivory">
              Interactive Construction Cost Calculator
            </h3>
            <p className="text-silver text-xs sm:text-sm mt-1">
              Adjust your desired built-up area and select architectural interior options to see an estimated budget range.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Category Selector */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-silver mb-2 font-mono">
                  1. Construction Category:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['standard', 'premium', 'commercial'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedPackageId(cat)}
                      className={`py-2.5 px-2 rounded text-xs font-medium capitalize transition-all cursor-pointer min-h-[42px] touch-manipulation ${
                        selectedPackageId === cat
                          ? 'bg-gold text-navy font-bold shadow-md'
                          : 'bg-navy-800 text-silver border border-silver/20 hover:border-gold/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Built-up area slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider text-silver font-mono">
                    2. Planned Built-Up Area:
                  </label>
                  <span className="font-mono text-gold font-bold text-base sm:text-lg">
                    {builtUpArea.toLocaleString()} Sq.Ft.
                  </span>
                </div>
                <input
                  type="range"
                  min={800}
                  max={8000}
                  step={100}
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full accent-[#C6A46A] h-3 bg-navy-800 rounded-lg cursor-pointer touch-pan-x"
                />
                <div className="flex justify-between text-[9px] sm:text-[10px] text-silver/60 font-mono mt-1">
                  <span>800 SFT</span>
                  <span>4,000 SFT</span>
                  <span>8,000 SFT</span>
                </div>
              </div>

              {/* Add-ons checkboxes with 44px+ tap targets */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-silver mb-2.5 font-mono">
                  3. Key Architectural & Interior Inclusions:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs">
                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy/60 border border-gold/15 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={includeModularKitchen}
                      onChange={(e) => setIncludeModularKitchen(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs sm:text-sm">Factory Modular Kitchen</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy/60 border border-gold/15 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={includeFullWardrobes}
                      onChange={(e) => setIncludeFullWardrobes(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs sm:text-sm">Full Bedroom Wardrobes</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy/60 border border-gold/15 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={includeFalseCeiling}
                      onChange={(e) => setIncludeFalseCeiling(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs sm:text-sm">Gypsum Cove False Ceilings</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy/60 border border-gold/15 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={includeSolarPlant}
                      onChange={(e) => setIncludeSolarPlant(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs sm:text-sm">3kW Rooftop Solar System</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Estimated Quote Result Box (5 cols) */}
            <div className="lg:col-span-5 bg-navy-900/90 rounded-xl p-5 sm:p-8 border border-gold/40 shadow-2xl space-y-5 sm:space-y-6">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono block">
                Estimated Project Cost Range
              </span>

              <div className="space-y-1">
                <div className="font-mono text-2xl sm:text-4xl text-ivory font-bold">
                  {formatLakhs(totalMin)} – {formatLakhs(totalMax)}
                </div>
                <span className="text-[11px] sm:text-xs text-silver block">
                  Indicative Turnkey Estimate for {builtUpArea.toLocaleString()} SFT
                </span>
              </div>

              <div className="space-y-2 text-xs border-t border-gold/15 pt-4 text-silver">
                <div className="flex justify-between">
                  <span>Selected Package:</span>
                  <span className="text-ivory font-medium">{activePackage.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Base Rate:</span>
                  <span className="text-ivory font-mono">₹{activePackage.minRate} - ₹{activePackage.maxRate}/sft</span>
                </div>
                <div className="flex justify-between">
                  <span>Interior Inclusions:</span>
                  <span className="text-gold font-mono">₹{(addOnsCost / 100000).toFixed(2)} Lakhs</span>
                </div>
              </div>

              <button
                onClick={handleSendWhatsAppQuote}
                className="w-full py-3.5 bg-gradient-to-r from-gold via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold text-navy font-semibold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-xl shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[46px]"
              >
                <span>Request Site Survey for this Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
