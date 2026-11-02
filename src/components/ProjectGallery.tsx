import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryImage } from '../types';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

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

  const handleNext = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxImage(filteredItems[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxImage(filteredItems[prevIndex]);
    setZoomLevel(1);
  };

  return (
    <section id="gallery" className="py-28 bg-[#12161E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-xs font-mono uppercase tracking-widest text-gold mb-3">
              Authentic KNS Project Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light">
              Architectural Craftsmanship <br />
              <span className="gold-gradient-text italic font-normal">Captured in Every Detail.</span>
            </h2>
          </div>
          <p className="text-silver text-sm sm:text-base max-w-md font-light">
            Explore authentic high-resolution photography of completed structures, false ceilings, luxury wardrobes, and modular kitchens executed by KNS.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold text-navy font-bold shadow-lg shadow-gold/20'
                  : 'bg-navy-800 text-silver border border-gold/20 hover:border-gold/50 hover:text-ivory'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-xl overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-navy-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-navy/85 backdrop-blur-md border border-gold/30 text-[10px] font-mono uppercase tracking-wider text-gold">
                  {item.categoryLabel}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy/80 backdrop-blur-md border border-gold/30 flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-gold" />
                </div>

                {/* Bottom Title & Specs */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <h3 className="font-serif text-lg text-ivory font-medium group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.slice(0, 3).map((spec, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-navy/80 border border-gold/15 text-silver">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/95 backdrop-blur-lg p-4 animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-navy border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-20 p-3 rounded-full bg-navy/80 border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 z-20 p-3 rounded-full bg-navy/80 border border-gold/40 text-silver hover:text-gold transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            {/* Image Box */}
            <div className="relative max-h-[70vh] overflow-hidden rounded-xl border border-gold/40 shadow-2xl bg-black/50">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[70vh] w-auto object-contain transition-transform duration-300"
              />

              {/* Floating Zoom Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/30">
                <button
                  onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                  className="text-silver hover:text-gold p-1 cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-gold px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((prev) => Math.max(1, prev - 0.25))}
                  className="text-silver hover:text-gold p-1 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Captions & Technical Inclusions */}
            <div className="mt-4 text-center max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold font-mono">
                {lightboxImage.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl text-ivory">
                {lightboxImage.title}
              </h3>
              <p className="text-silver text-xs sm:text-sm font-light leading-relaxed">
                {lightboxImage.description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {lightboxImage.specs.map((sp, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded bg-navy border border-gold/20 text-ivory/80">
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
