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
    <section id="gallery" className="py-24 sm:py-32 bg-[#0C1017] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 08 // ARCHITECTURAL REPERTORY
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">REAL ON-SITE PHOTOGRAPHY</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Architectural Craftsmanship <br />
                <span className="gold-gradient-text italic font-normal">Captured in Every Detail.</span>
              </h2>
            </div>
            <p className="text-silver text-sm sm:text-base max-w-md font-light leading-relaxed border-l border-gold/25 pl-4 sm:pl-6">
              Authentic high-resolution documentation of completed civil elevations, false ceilings, luxury wardrobes, and modular kitchens executed directly by KNS.
            </p>
          </div>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 sm:mb-12 no-scrollbar touch-pan-x border-b border-gold/15"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer min-h-[40px] flex items-center touch-manipulation border ${
                activeCategory === cat.id
                  ? 'bg-gold text-navy font-bold border-gold'
                  : 'bg-[#121720] text-silver border-white/5 hover:border-gold/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid with Asymmetric Editorial Rhythms */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min((index % 6) * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => handleOpenLightbox(item)}
                className="group relative bg-[#121720] border border-gold/20 hover:border-gold/60 transition-colors shadow-2xl cursor-pointer touch-manipulation"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-black">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121720] via-transparent to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 border border-gold/30 text-[9px] font-mono uppercase tracking-wider text-gold">
                    {item.categoryLabel}
                  </div>

                  {/* Maximize Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black/70 border border-gold/40 flex items-center justify-center text-ivory opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-gold" />
                  </div>

                  {/* Bottom Title & Specs */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <h3 className="font-serif text-base sm:text-lg text-ivory font-medium group-hover:text-gold transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {item.specs.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-black/70 border border-white/10 text-silver font-mono">
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-30 p-2.5 bg-[#121720] border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Close Fullscreen View"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous / Next Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#121720]/90 border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Previous Project Reference"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#121720]/90 border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Next Project Reference"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col items-center max-h-[92vh] overflow-y-auto px-2"
            >
              {/* Image Box */}
              <div className="relative max-h-[55vh] sm:max-h-[68vh] overflow-hidden border border-gold/40 bg-black flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[55vh] sm:max-h-[68vh] w-auto max-w-full object-contain transition-transform duration-300"
                />

                {/* Floating Zoom Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/80 px-3 py-1 border border-gold/30">
                  <button
                    onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                    className="text-silver hover:text-gold p-1 cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center touch-manipulation"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono text-gold px-1">
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
              <div className="mt-4 text-center max-w-2xl space-y-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-mono">
                  {lightboxImage.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory">
                  {lightboxImage.title}
                </h3>
                <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                  {lightboxImage.description}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  {lightboxImage.specs.map((sp, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-1 bg-[#121720] border border-white/10 text-ivory/80 font-mono">
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
