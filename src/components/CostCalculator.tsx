import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Info, Sparkles, Building, CheckCircle2 } from 'lucide-react';
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
    <section id="packages" className="py-28 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy-800 text-xs font-mono uppercase tracking-widest text-gold mb-3">
            Indicative Turnkey Pricing & Estimation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Transparent Pricing. <br />
            <span className="gold-gradient-text italic font-normal">Zero Hidden Surprises.</span>
          </h2>
          <p className="text-silver text-sm sm:text-base mt-4 font-light">
            All prices include complete civil materials, skilled engineering labor, and structural compliance. Indicative rates subject to site topography, soil conditions, and final client specifications.
          </p>
        </div>

        {/* 3 Package Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {CONSTRUCTION_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id as any)}
                className={`relative rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-charcoal border-2 border-gold shadow-2xl scale-[1.02]'
                    : 'bg-navy-800/80 border border-gold/20 hover:border-gold/50'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gold text-navy font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-ivory">{pkg.name}</h3>
                    <p className="text-xs text-silver font-light">{pkg.tagline}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-navy/80 border border-gold/15">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-bold text-gold">
                        ₹{pkg.minRate} – ₹{pkg.maxRate}
                      </span>
                      <span className="text-xs text-silver font-mono">/ sq.ft</span>
                    </div>
                    <span className="text-[11px] text-silver block mt-1">Materials + Civil Labor Included</span>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-gold font-mono block">
                      Package Inclusions:
                    </span>
                    {pkg.features.slice(0, 6).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-ivory/80">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/15">
                  <button
                    className={`w-full py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gold text-navy shadow-md shadow-gold/20'
                        : 'border border-gold/30 text-gold hover:border-gold'
                    }`}
                  >
                    {isSelected ? 'Selected for Calculator' : 'Select Package'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Construction Cost Calculator */}
        <div id="calculator" className="glass-panel rounded-2xl p-6 sm:p-10 border border-gold/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-widest mb-1">
              <Calculator className="w-4 h-4" />
              <span>Real-Time Estimation Tool</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-ivory">
              Interactive Construction Cost Calculator
            </h3>
            <p className="text-silver text-sm mt-1">
              Adjust your desired built-up area and select architectural interior options to see an estimated budget range.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-silver mb-2 font-mono">
                  1. Construction Category:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['standard', 'premium', 'commercial'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedPackageId(cat)}
                      className={`py-2 px-3 rounded text-xs font-medium capitalize transition-all cursor-pointer ${
                        selectedPackageId === cat
                          ? 'bg-gold text-navy font-bold'
                          : 'bg-navy-800 text-silver border border-silver/20 hover:border-gold/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Built-up Area Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase tracking-wider text-silver font-mono">
                    2. Built-Up Area (Square Feet):
                  </label>
                  <span className="font-mono text-lg font-bold text-gold bg-navy-800 px-3 py-1 rounded border border-gold/30">
                    {builtUpArea.toLocaleString()} SFT
                  </span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="10000"
                  step="50"
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full accent-[#C6A46A] h-2 bg-navy-900 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-silver font-mono">
                  <span>600 SFT (Small Independent)</span>
                  <span>2,400 SFT (Standard Duplex)</span>
                  <span>10,000 SFT (Luxury Estate)</span>
                </div>
              </div>

              {/* Optional Add-Ons */}
              <div className="space-y-3 pt-2 border-t border-gold/15">
                <label className="block text-xs uppercase tracking-wider text-silver font-mono">
                  3. Optional Architectural Add-Ons:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy-800/80 border border-gold/15 cursor-pointer hover:border-gold/30">
                    <input
                      type="checkbox"
                      checked={includeModularKitchen}
                      onChange={(e) => setIncludeModularKitchen(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <div className="text-xs">
                      <span className="text-ivory block font-medium">Modular Acrylic Kitchen</span>
                      <span className="text-silver text-[10px]">+ ₹2.50 Lakhs</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy-800/80 border border-gold/15 cursor-pointer hover:border-gold/30">
                    <input
                      type="checkbox"
                      checked={includeFullWardrobes}
                      onChange={(e) => setIncludeFullWardrobes(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <div className="text-xs">
                      <span className="text-ivory block font-medium">Full Bedroom Wardrobes & Lofts</span>
                      <span className="text-silver text-[10px]">+ ₹3.50 Lakhs</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy-800/80 border border-gold/15 cursor-pointer hover:border-gold/30">
                    <input
                      type="checkbox"
                      checked={includeFalseCeiling}
                      onChange={(e) => setIncludeFalseCeiling(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <div className="text-xs">
                      <span className="text-ivory block font-medium">Gypsum False Ceiling & Cove</span>
                      <span className="text-silver text-[10px]">
                        {selectedPackageId === 'standard' ? '+ ₹110/SFT' : 'Included in Package'}
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded bg-navy-800/80 border border-gold/15 cursor-pointer hover:border-gold/30">
                    <input
                      type="checkbox"
                      checked={includeSolarPlant}
                      onChange={(e) => setIncludeSolarPlant(e.target.checked)}
                      className="accent-[#C6A46A] w-4 h-4 rounded"
                    />
                    <div className="text-xs">
                      <span className="text-ivory block font-medium">3kW Rooftop Solar System</span>
                      <span className="text-silver text-[10px]">+ ₹2.20 Lakhs</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Estimated Output Panel (5 cols) */}
            <div className="lg:col-span-5 bg-charcoal p-6 sm:p-8 rounded-xl border border-gold/40 shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-silver font-mono block">
                  Estimated Investment Range
                </span>
                <div className="font-mono text-3xl sm:text-4xl font-bold text-gold">
                  {formatLakhs(totalMin)} – {formatLakhs(totalMax)}
                </div>
                <span className="text-xs text-silver">
                  For {builtUpArea.toLocaleString()} SFT • {activePackage.name}
                </span>
              </div>

              {/* Cost Breakdown Details */}
              <div className="space-y-2 py-3 border-y border-gold/15 text-xs">
                <div className="flex justify-between text-silver">
                  <span>Base Civil Construction:</span>
                  <span className="text-ivory font-mono">
                    ₹{((builtUpArea * activePackage.minRate) / 100000).toFixed(2)}L – ₹{((builtUpArea * activePackage.maxRate) / 100000).toFixed(2)}L
                  </span>
                </div>
                <div className="flex justify-between text-silver">
                  <span>Selected Interior Add-ons:</span>
                  <span className="text-ivory font-mono">
                    ₹{(addOnsCost / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
                <div className="flex justify-between text-silver">
                  <span>Turnkey Material Standard:</span>
                  <span className="text-gold font-mono">Tata Fe550D / UltraTech</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 text-[11px] text-silver/80 leading-relaxed bg-navy/60 p-3 rounded border border-gold/15">
                <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Indicative Pricing Notice:</strong> These figures are calculated on standard architectural parameters. Actual quotation depends on site soil strata, foundation depth, elevation architectural treatments, and final material choices confirmed by KNS.
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleSendWhatsAppQuote}
                  className="w-full py-3.5 bg-gold hover:bg-gold-500 text-navy font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Detailed Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#contact"
                  className="w-full py-2.5 border border-gold/30 hover:border-gold text-ivory hover:text-gold text-xs uppercase tracking-wider rounded block text-center transition-colors"
                >
                  Schedule Site Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
