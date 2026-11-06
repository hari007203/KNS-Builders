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
    <section id="packages" className="py-24 sm:py-32 bg-[#0E131A] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 05 // TURNKEY FINANCIAL SPECIFICATION
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">FIXED CONTRACT RATES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Transparent Pricing. <br />
                <span className="gold-gradient-text italic font-normal">Zero Hidden Escalations.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-silver text-sm sm:text-base font-light leading-relaxed border-l border-gold/25 pl-4 sm:pl-6">
                All package rates include complete structural civil materials, laser-checked formwork, branded MEP fittings, and certified engineering supervision with stage-wise milestone contracts.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Package Comparison Dossiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {CONSTRUCTION_PACKAGES.map((pkg, idx) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                onClick={() => setSelectedPackageId(pkg.id as any)}
                className={`p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer relative touch-manipulation ${
                  isSelected
                    ? 'bg-[#141B24] border-2 border-gold shadow-2xl'
                    : 'bg-[#10151E] border border-white/5 hover:border-gold/40'
                }`}
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div className="absolute top-0 right-0 bg-gold text-navy font-mono font-bold text-[9px] uppercase tracking-widest px-3 py-1">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="border-b border-gold/15 pb-4">
                    <span className="font-mono text-xs text-gold/70 block mb-1">SCHEDULE 0{idx + 1}</span>
                    <h3 className="font-serif text-2xl text-ivory">{pkg.name}</h3>
                    <p className="text-xs text-silver font-light mt-1">{pkg.tagline}</p>
                  </div>

                  {/* Rate Card */}
                  <div className="p-4 bg-[#0B0F15] border border-gold/15">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-gold">
                        ₹{pkg.minRate} – ₹{pkg.maxRate}
                      </span>
                      <span className="text-xs text-silver font-mono">/ sq.ft</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-silver/70 font-mono block mt-1">
                      Turnkey Civil Materials + Skilled Labor
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
                      ARCHITECTURAL SPECIFICATIONS:
                    </span>
                    {pkg.features.slice(0, 6).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ivory/80">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/15">
                  <button
                    className={`w-full py-3 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer min-h-[44px] touch-manipulation ${
                      isSelected
                        ? 'bg-gold text-navy font-bold'
                        : 'border border-gold/30 text-gold hover:border-gold'
                    }`}
                  >
                    {isSelected ? 'ACTIVE IN ESTIMATOR' : 'APPLY TO ESTIMATOR'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Construction Cost Calculator Dossier */}
        <motion.div
          id="calculator"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#121720] p-6 sm:p-10 border border-gold/30 shadow-2xl relative"
        >
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-widest mb-2">
              <Calculator className="w-4 h-4" />
              <span>PROJECT ESTIMATION DOSSIER</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-light">
              Interactive Construction Cost Estimator
            </h3>
            <p className="text-silver text-xs sm:text-sm mt-1.5 font-light">
              Calibrate your desired built-up area and architectural finishing options for a transparent turnkey budget breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Selector */}
              <div>
                <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-gold mb-2.5 font-mono">
                  1. STRUCTURAL SPECIFICATION CATEGORY:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['standard', 'premium', 'commercial'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedPackageId(cat)}
                      className={`py-3 px-3 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer min-h-[44px] touch-manipulation border ${
                        selectedPackageId === cat
                          ? 'bg-gold text-navy font-bold border-gold'
                          : 'bg-[#0E131A] text-silver border-white/5 hover:border-gold/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Built-up area slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono">
                    2. PLANNED BUILT-UP AREA (SFT):
                  </label>
                  <span className="font-mono text-gold font-bold text-lg">
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
                  className="w-full accent-[#C6A46A] h-2.5 bg-[#0B0F15] rounded cursor-pointer touch-pan-x"
                />
                <div className="flex justify-between text-[10px] text-silver/60 font-mono mt-1.5">
                  <span>800 SFT (Boutique)</span>
                  <span>4,000 SFT (Duplex)</span>
                  <span>8,000 SFT (Mansion)</span>
                </div>
              </div>

              {/* Add-ons checkboxes */}
              <div>
                <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-gold mb-3 font-mono">
                  3. BESPOKE INTERIOR & MEP INCLUSIONS:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center gap-3 p-3.5 bg-[#0E131A] border border-white/5 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[48px]">
                    <input
                      type="checkbox"
                      checked={includeModularKitchen}
                      onChange={(e) => setIncludeModularKitchen(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs">Modular Acrylic Kitchen (+₹2.5L)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 bg-[#0E131A] border border-white/5 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[48px]">
                    <input
                      type="checkbox"
                      checked={includeFullWardrobes}
                      onChange={(e) => setIncludeFullWardrobes(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs">Full Bedroom Wardrobes (+₹3.5L)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 bg-[#0E131A] border border-white/5 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[48px]">
                    <input
                      type="checkbox"
                      checked={includeFalseCeiling}
                      onChange={(e) => setIncludeFalseCeiling(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs">Gypsum Tray Cove False Ceilings</span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 bg-[#0E131A] border border-white/5 cursor-pointer hover:border-gold/40 touch-manipulation min-h-[48px]">
                    <input
                      type="checkbox"
                      checked={includeSolarPlant}
                      onChange={(e) => setIncludeSolarPlant(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <span className="text-ivory text-xs">3kW Rooftop Solar Plant (+₹2.2L)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Estimated Quote Result Box (5 cols) */}
            <div className="lg:col-span-5 bg-[#0E131A] p-6 sm:p-8 border border-gold/30 shadow-2xl space-y-6">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono block border-b border-gold/15 pb-3">
                INDICATIVE TURNKEY ESTIMATE
              </span>

              <div className="space-y-1">
                <div className="font-mono text-2xl sm:text-4xl text-ivory font-bold">
                  {formatLakhs(totalMin)} – {formatLakhs(totalMax)}
                </div>
                <span className="text-xs text-silver/80 block font-light">
                  All-inclusive turnkey execution for {builtUpArea.toLocaleString()} SFT
                </span>
              </div>

              <div className="space-y-2.5 text-xs border-t border-gold/15 pt-4 text-silver font-mono">
                <div className="flex justify-between">
                  <span>Selected Category:</span>
                  <span className="text-ivory font-medium uppercase">{activePackage.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Base Rate:</span>
                  <span className="text-ivory">₹{activePackage.minRate} - ₹{activePackage.maxRate}/sft</span>
                </div>
                <div className="flex justify-between">
                  <span>Interior Inclusions:</span>
                  <span className="text-gold">₹{(addOnsCost / 100000).toFixed(2)} Lakhs</span>
                </div>
              </div>

              <button
                onClick={handleSendWhatsAppQuote}
                className="w-full py-3.5 bg-gold hover:bg-gold-300 text-navy font-semibold text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
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
