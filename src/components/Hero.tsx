import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Phone, Compass, Shield, Award, Sparkles, Building } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const Hero: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroImages = [
    {
      src: '/assets/kns-luxury-hero-living.jpg',
      label: 'Signature Double-Height Living Experience',
      caption: 'Raghavendra Colony, Kondapur'
    },
    {
      src: '/assets/kns-exterior-villa-facade.png',
      label: 'Contemporary Luxury Duplex Villa Elevation',
      caption: 'Patancheru / Hyderabad West'
    },
    {
      src: '/assets/kns-living-grand-tray-ceiling.png',
      label: 'Bespoke Architectural Ceilings & Lighting',
      caption: 'Turnkey Interior Execution'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Full-Bleed Background Images with Cross-Fade & Slow Zoom Effect */}
      {heroImages.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url('${img.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1.2s ease-in-out, transform 8s ease-out',
          }}
        />
      ))}

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#101820_90%)]" />

      {/* Elegant Architectural Grid & Gold Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-gold/40 flex justify-between">
          <div className="h-full border-r border-gold/20 w-1/3" />
          <div className="h-full border-r border-gold/20 w-1/3" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold/40 bg-navy/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
              Hyderabad’s Premier Architectural Builders
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-ivory font-light leading-[1.1] tracking-tight">
            Building Spaces. <br />
            <span className="gold-gradient-text italic font-normal">Creating Legacies.</span>
          </h1>

          {/* Description */}
          <p className="text-silver text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
            From thoughtfully planned homes to premium developments, KNS brings quality, craftsmanship, and vision together.
          </p>

          {/* Key Facts Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
            <div className="glass-panel p-3 rounded-lg border border-gold/20">
              <span className="block font-mono text-xl text-gold font-bold">100 Plots</span>
              <span className="text-[11px] uppercase tracking-wider text-silver">8.25 Acres Villa Community</span>
            </div>
            <div className="glass-panel p-3 rounded-lg border border-gold/20">
              <span className="block font-mono text-xl text-gold font-bold">₹1,600+</span>
              <span className="text-[11px] uppercase tracking-wider text-silver">Turnkey SFT Construction</span>
            </div>
            <div className="glass-panel p-3 rounded-lg border border-gold/20 col-span-2 sm:col-span-1">
              <span className="block font-mono text-xl text-gold font-bold">10 Luxury Units</span>
              <span className="text-[11px] uppercase tracking-wider text-silver">3BHK Kondapur Enclave</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#villa-plots"
              className="px-7 py-3.5 bg-gold hover:bg-gold-500 text-navy font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-lg shadow-gold/20 flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#calculator"
              className="px-7 py-3.5 border border-gold/40 hover:border-gold text-ivory hover:text-gold text-xs uppercase tracking-widest rounded backdrop-blur-md transition-all duration-300 flex items-center gap-2"
            >
              <span>Estimate Cost</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-3.5 text-silver hover:text-ivory text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5"
            >
              <span>Contact Us</span>
            </a>
          </div>

          {/* Proprietor Assurance Note */}
          <div className="pt-6 flex items-center gap-4 text-xs text-silver/80 border-t border-gold/15">
            <span className="font-serif italic text-gold text-sm font-semibold">Led by Kiran Gajbhare</span>
            <span>•</span>
            <span>Raghavendra Colony, Kondapur, Hyderabad</span>
            <span>•</span>
            <span className="text-gold">Turnkey Civil & Interiors</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Slider Indicators */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3 bg-navy/85 backdrop-blur-md px-4 py-2 rounded-full border border-gold/25">
        <span className="text-[11px] uppercase tracking-wider text-silver">Featured Views:</span>
        {heroImages.map((img, idx) => (
          <button
            key={img.label}
            onClick={() => setActiveImageIndex(idx)}
            className={`w-7 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeImageIndex ? 'bg-gold w-9' : 'bg-silver/40 hover:bg-silver'
            }`}
            title={img.label}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-silver hover:text-gold transition-colors duration-200 group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-silver/80 group-hover:text-gold">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border border-gold/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
        </div>
      </a>
    </section>
  );
};
