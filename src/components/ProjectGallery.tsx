import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryImage } from '../types';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  const categories = [
    { id: 'all', label: 'All Project References' },
    { id: 'exterior', label: 'Exterior Architecture' },
    { id: 'living', label: 'Living & False Ceilings' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'bedroom', label: 'Wardrobes & Bedrooms' },
    { id: 'porch', label: 'Porches & Entrances' },
    { id: 'staircase', label: 'Staircases & Details' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (img: GalleryImage) => {
    setLightboxImage(img);
    setZoomLevel(1);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxImage(filteredItems[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxImage(filteredItems[prevIndex]);
    setZoomLevel(1);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#12161E] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.025] pointer-events-none" />

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
              Authentic KNS Project Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
              Architectural Craftsmanship <br />
              <span className="gold-gradient-text italic font-normal">Captured in Every Detail.</span>
            </h2>
          </div>
          <p className="text-silver text-sm sm:text-base max-w-md font-light leading-relaxed">
            Explore authentic high-resolution photography of completed structures, false ceilings, luxury wardrobes, and modular kitchens executed by KNS.
          </p>
        </motion.div>

        {/* Category Filter Pills - Mobile Touch Scrollable */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar touch-pan-x"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer min-h-[38px] flex items-center touch-manipulation ${
                activeCategory === cat.id
                  ? 'bg-gold text-navy font-bold shadow-lg shadow-gold/20 scale-102'
                  : 'bg-navy-800 text-silver border border-gold/20 hover:border-gold/50 hover:text-ivory'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid with Northwall Top-Down Unfolding Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, clipPath: 'inset(0% 0% 85% 0%)', y: 30 }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min((index % 6) * 0.06, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenLightbox(item)}
                className="group relative rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gold/15 cursor-pointer touch-manipulation"
              >
                {/* Image Container with Northwall Top-Down Reveal */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-navy-900">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-navy/85 backdrop-blur-md border border-gold/30 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gold shadow-md">
                    {item.categoryLabel}
                  </div>

                  {/* Maximize Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy/85 backdrop-blur-md border border-gold/40 flex items-center justify-center text-ivory opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-gold" />
                  </div>

                  {/* Bottom Title & Specs */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 space-y-1.5 sm:space-y-2">
                    <h3 className="font-serif text-base sm:text-lg text-ivory font-medium group-hover:text-gold transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {item.specs.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-navy/85 border border-gold/20 text-silver shadow-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal - Mobile Touch Optimized */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/96 backdrop-blur-xl p-3 sm:p-6"
          >
            {/* Close Button - 44px tap target */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-navy border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Close Fullscreen View"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous / Next Arrow Controls - Accessible on Mobile */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-navy/90 border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Previous Project Reference"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-navy/90 border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Next Project Reference"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col items-center max-h-[92vh] overflow-y-auto px-2"
            >
              {/* Image Box */}
              <div className="relative max-h-[55vh] sm:max-h-[68vh] overflow-hidden rounded-xl border border-gold/40 shadow-2xl bg-black/70 flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[55vh] sm:max-h-[68vh] w-auto max-w-full object-contain transition-transform duration-300"
                />

                {/* Floating Zoom Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 sm:gap-2 bg-navy/85 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-gold/30 shadow-lg">
                  <button
                    onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                    className="text-silver hover:text-gold p-1 cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center touch-manipulation"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] sm:text-[11px] font-mono text-gold px-1">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={() => setZoomLevel((prev) => Math.max(1, prev - 0.25))}
                    className="text-silver hover:text-gold p-1 cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center touch-manipulation"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Captions & Technical Inclusions */}
              <div className="mt-3 sm:mt-4 text-center max-w-2xl space-y-1.5 sm:space-y-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono">
                  {lightboxImage.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory">
                  {lightboxImage.title}
                </h3>
                <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                  {lightboxImage.description}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1.5">
                  {lightboxImage.specs.map((sp, idx) => (
                    <span key={idx} className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded bg-navy border border-gold/20 text-ivory/80 shadow-sm">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
