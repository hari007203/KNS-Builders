import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

/** Smooth scroll to a section, offset by the navbar height */
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbar = document.querySelector('header');
  const offset = navbar ? navbar.offsetHeight : 72;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
}

export const Hero: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const shouldReduce = useReducedMotion();

  const heroImages = [
    {
      src: '/assets/kns-luxury-hero-living.jpg',
      label: 'Signature Double-Height Living Experience',
      caption: 'Raghavendra Colony, Kondapur',
    },
    {
      src: '/assets/kns-exterior-villa-facade.png',
      label: 'Contemporary Luxury Duplex Villa Elevation',
      caption: 'Patancheru / Hyderabad West',
    },
    {
      src: '/assets/kns-living-grand-tray-ceiling.png',
      label: 'Bespoke Architectural Ceilings & Lighting',
      caption: 'Turnkey Interior Execution',
    },
  ];

  // Fade-up variant — respects prefers-reduced-motion
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduce ? 0.01 : 0.6, delay: shouldReduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const handleScrollDown = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo('about');
  }, []);

  const handleCTA = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      scrollTo(id);
    },
    []
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-16"
    >
      {/* ── Background Immersive Imagery with Smooth Cross-Fade & Ken-Burns Zoom ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={heroImages[activeImageIndex].src}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImages[activeImageIndex].src}')` }}
        />
      </AnimatePresence>

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/80 to-[#101820]/85 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/70 to-[#101820]/40 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#101820_90%)] z-[1]" />

      {/* Architectural Blueprint Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-[2]">
        <div className="max-w-7xl mx-auto h-full border-x border-gold/30 flex justify-between">
          <div className="h-full border-r border-gold/15 w-1/3" />
          <div className="h-full border-r border-gold/15 w-1/3" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Typography & Key Facts */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">

            {/* Tagline Architectural Marker */}
            <motion.div {...fadeUp(0.08)} className="flex items-center gap-3">
              <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
                KNS PRACTICE // HYDERABAD
              </span>
              <div className="h-px bg-gold/30 w-10 sm:w-16" />
              <span className="text-[10px] font-mono text-silver/60 tracking-wider">EST. 2018</span>
            </motion.div>

            {/* Mobile Portrait Photograph Deck */}
            <div className="block lg:hidden my-2 relative w-full max-w-[330px] mx-auto h-[220px] sm:h-[260px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {heroImages.map((img, idx) => {
                  const isActive = idx === activeImageIndex;
                  const offset = (idx - activeImageIndex + heroImages.length) % heroImages.length;
                  const rotation = offset === 0 ? 0 : offset === 1 ? 4 : -4;
                  const translateX = offset === 0 ? 0 : offset === 1 ? 16 : -16;
                  const translateY = offset === 0 ? 0 : offset === 1 ? -8 : -12;
                  const zIndex = offset === 0 ? 20 : offset === 1 ? 10 : 5;
                  const scale = offset === 0 ? 1 : offset === 1 ? 0.94 : 0.88;
                  const opacity = offset === 0 ? 1 : 0.65;

                  return (
                    <motion.div
                      key={`mob-${img.src}`}
                      onClick={() => setActiveImageIndex(idx)}
                      initial={{ opacity: 0, y: 30, rotateZ: 4 }}
                      animate={{ opacity, scale, rotateZ: shouldReduce ? 0 : rotation, x: translateX, y: translateY, zIndex }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute w-[240px] sm:w-[280px] h-[190px] sm:h-[230px] rounded-xl overflow-hidden border cursor-pointer shadow-2xl touch-manipulation ${
                        isActive ? 'border-gold shadow-gold/30' : 'border-gold/30'
                      }`}
                    >
                      <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
                        <span className="text-[9px] uppercase font-mono tracking-wider text-gold block">
                          Tap to view perspective 0{idx + 1}
                        </span>
                        <h4 className="font-serif text-xs sm:text-sm text-ivory font-medium truncate">{img.label}</h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-0.5 sm:space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: shouldReduce ? 0 : 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: shouldReduce ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl lg:text-7xl text-ivory font-light leading-[1.1] tracking-tight"
              >
                Building Spaces.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: shouldReduce ? 0 : 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: shouldReduce ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight"
              >
                <span className="gold-gradient-text italic font-normal">Creating Legacies.</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p {...fadeUp(0.38)} className="text-silver text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
              From thoughtfully planned homes to premium developments, KNS brings quality, craftsmanship, and vision together.
            </motion.p>

            {/* Key Facts Cards */}
            <motion.div {...fadeUp(0.48)} className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 max-w-xl">
              {[
                { stat: '100 Plots', sub: '8.25 Acres Villa Community', span: '' },
                { stat: '₹1,600+', sub: 'Turnkey SFT Construction', span: '' },
                { stat: '10 Luxury Units', sub: '3BHK Kondapur Enclave', span: 'col-span-2 sm:col-span-1' },
              ].map(({ stat, sub, span }) => (
                <div
                  key={stat}
                  className={`glass-panel p-3 sm:p-3.5 rounded-lg border border-gold/25 hover:border-gold/55 hover:bg-gold/5 transition-all duration-300 cursor-default group ${span}`}
                >
                  <span className="block font-mono text-lg sm:text-xl text-gold font-bold group-hover:drop-shadow-[0_0_8px_rgba(198,164,106,0.4)] transition-all duration-300">
                    {stat}
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-silver">
                    {sub}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.58)} className="flex flex-wrap items-center gap-3 pt-2">
              {/* Explore Projects → villa-plots */}
              <a
                href="#villa-plots"
                onClick={(e) => handleCTA(e, 'villa-plots')}
                className="flex-1 sm:flex-initial px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-gold via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold text-navy font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2 group touch-manipulation min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Estimate Cost → calculator */}
              <a
                href="#calculator"
                onClick={(e) => handleCTA(e, 'calculator')}
                className="flex-1 sm:flex-initial px-5 sm:px-7 py-3 sm:py-3.5 border border-gold/40 hover:border-gold text-ivory hover:text-gold text-xs uppercase tracking-widest rounded backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <span>Estimate Cost</span>
              </a>

              {/* Contact Us → contact */}
              <a
                href="#contact"
                onClick={(e) => handleCTA(e, 'contact')}
                className="w-full sm:w-auto px-4 py-2.5 text-silver hover:text-ivory text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded"
              >
                <span>Contact Us</span>
              </a>
            </motion.div>

            {/* Proprietor Assurance Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: shouldReduce ? 0 : 0.7 }}
              className="pt-4 flex items-center gap-2 sm:gap-4 text-xs text-silver/80 border-t border-gold/15 flex-wrap"
            >
              <span className="font-serif italic text-gold text-xs sm:text-sm font-semibold">Led by Kiran Gajbhare</span>
              <span>•</span>
              <span className="text-[11px] sm:text-xs">Raghavendra Colony, Kondapur</span>
              <span>•</span>
              <span className="text-gold text-[11px] sm:text-xs">Turnkey Civil &amp; Interiors</span>
            </motion.div>
          </div>

          {/* Right Column: Desktop Architectural Photo Deck */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative w-full h-[460px] flex items-center justify-center">
              {heroImages.map((img, idx) => {
                const isActive = idx === activeImageIndex;
                const offset = (idx - activeImageIndex + heroImages.length) % heroImages.length;
                const rotation = shouldReduce ? 0 : (offset === 0 ? 0 : offset === 1 ? 5 : -5);
                const translateX = offset === 0 ? 0 : offset === 1 ? 24 : -24;
                const translateY = offset === 0 ? 0 : offset === 1 ? -12 : -18;
                const zIndex = offset === 0 ? 20 : offset === 1 ? 10 : 5;
                const scale = offset === 0 ? 1 : offset === 1 ? 0.94 : 0.88;
                const opacity = offset === 0 ? 1 : 0.65;

                return (
                  <motion.div
                    key={`desk-${img.src}`}
                    onClick={() => setActiveImageIndex(idx)}
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 40, rotateZ: shouldReduce ? 0 : 8 }}
                    animate={{ opacity, scale, rotateZ: rotation, x: translateX, y: translateY, zIndex }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={
                      shouldReduce
                        ? undefined
                        : { scale: offset === 0 ? 1.025 : 0.97, opacity: 0.95 }
                    }
                    className={`absolute w-[360px] h-[430px] rounded-2xl overflow-hidden border cursor-pointer shadow-2xl transition-all duration-300 ${
                      isActive
                        ? 'border-gold shadow-gold/25'
                        : 'border-gold/30 hover:border-gold/60'
                    }`}
                  >
                    {/* Image with subtle zoom on hover via CSS */}
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.label}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isActive && !shouldReduce ? 'group-hover:scale-105' : ''
                        }`}
                        style={{ willChange: 'transform' }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/30 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                        Perspective 0{idx + 1}
                      </span>
                      <h4 className="font-serif text-lg text-ivory font-medium leading-snug">{img.label}</h4>
                      <p className="text-silver text-xs font-light">{img.caption}</p>
                    </div>

                    {isActive && (
                      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-navy/90 border border-gold/40 text-[10px] font-mono text-gold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                        <span>Viewing</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slider Indicators */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20 flex lg:hidden items-center gap-2 bg-navy/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/25 shadow-lg">
        <span className="text-[9px] uppercase tracking-wider text-silver">Views:</span>
        {heroImages.map((img, idx) => (
          <button
            key={`dot-${img.label}`}
            onClick={() => setActiveImageIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
              idx === activeImageIndex ? 'bg-gold w-6' : 'bg-silver/40 hover:bg-silver w-2.5'
            }`}
            title={img.label}
            aria-label={`View ${img.label}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator — clickable, smooth scroll to #about */}
      <motion.a
        href="#about"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduce ? 0 : 0.9, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-silver hover:text-gold transition-colors duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded"
        aria-label="Scroll down to next section"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-silver/80 group-hover:text-gold transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-gold/40 group-hover:border-gold/70 transition-colors flex items-start justify-center p-1">
          <motion.div
            animate={shouldReduce ? {} : { y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-gold"
          />
        </div>
      </motion.a>
    </section>
  );
};
