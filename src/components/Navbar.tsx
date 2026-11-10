import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MapPin, ChevronDown, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { KNSAnimatedLogo } from './KNSAnimatedLogo';

interface NavbarProps {
  onOpenAdmin?: () => void;
  onReplayIntro?: () => void;
}

/** Smooth-scroll to a section id, accounting for the fixed navbar height. */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbar = document.querySelector('header');
  const offset = navbar ? navbar.offsetHeight + 4 : 76;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
}

// ─── Navigation structure ────────────────────────────────────────────────────

/** Sections that make the PROJECTS dropdown item appear active */
const PROJECT_IDS = ['packages', 'villa-plots', 'apartment', 'gallery'];

const PRIMARY_LINKS = [
  { label: 'Home',       id: 'hero' },
  { label: 'About',      id: 'about' },
  { label: 'Services',   id: 'services' },
  { label: '3D Process', id: 'process' },
  { label: 'Contact',    id: 'contact' },
];

const DROPDOWN_LINKS = [
  { label: 'Packages',         id: 'packages',   desc: 'Construction pricing' },
  { label: 'Villa Plots (100)',id: 'villa-plots', desc: '8.25 Acres community' },
  { label: '3BHK Apartment',   id: 'apartment',  desc: 'Kondapur Enclave' },
  { label: 'Gallery',          id: 'gallery',    desc: 'Project showcase' },
];

/** All section IDs observed by IntersectionObserver */
const ALL_SECTION_IDS = [
  'hero', 'about', 'services', 'process',
  'packages', 'villa-plots', 'apartment', 'gallery', 'contact',
];

// ─── Component ───────────────────────────────────────────────────────────────

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin: _onOpenAdmin, onReplayIntro: _onReplayIntro }) => {
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [dropdownOpen,    setDropdownOpen]    = useState(false);   // desktop projects
  const [mobileProjects,  setMobileProjects]  = useState(false);   // mobile accordion
  const [activeSection,   setActiveSection]   = useState('hero');

  const clickedRef    = useRef<string | null>(null);
  const clickTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef   = useRef<HTMLDivElement>(null);
  const hoverTimeout  = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Derived: is a Projects sub-section active? ─────────────────────────────
  const projectsActive = PROJECT_IDS.includes(activeSection);

  // ── Sticky background ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Active section via IntersectionObserver ────────────────────────────────
  useEffect(() => {
    const visible = new Set<string>();

    const pickActive = () => {
      if (clickedRef.current) { setActiveSection(clickedRef.current); return; }
      if (!visible.size) return;
      let topId = '', topY = Infinity;
      visible.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top;
          if (y < topY) { topY = y; topId = id; }
        }
      });
      if (topId) setActiveSection(topId);
    };

    const observers = ALL_SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => { e.isIntersecting ? visible.add(id) : visible.delete(id); });
          pickActive();
        },
        { threshold: 0.12, rootMargin: '-76px 0px 0px 0px' }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // ── Close dropdown when clicking outside ──────────────────────────────────
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const keyHandler = (e: KeyboardEvent) => { if (e.key === 'Escape') setDropdownOpen(false); };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', keyHandler);
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('keydown', keyHandler); };
  }, [dropdownOpen]);

  // ── Lock body scroll when mobile menu open ────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // ── Navigation click handler ──────────────────────────────────────────────
  const navigate = useCallback((id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileProjects(false);

    clickedRef.current = id;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => { clickedRef.current = null; }, 1000);

    scrollToSection(id);
  }, []);

  const handleLink = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigate(id);
  }, [navigate]);

  // ── Dropdown hover helpers ────────────────────────────────────────────────
  const openDropdown  = () => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); setDropdownOpen(true); };
  const closeDropdown = () => { hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 180); };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101820]/96 backdrop-blur-md border-b border-[#C6A46A]/20 shadow-2xl py-0'
          : 'bg-gradient-to-b from-[#101820]/95 via-[#101820]/70 to-transparent py-0'
      }`}
    >
      {/* ── Desktop navbar ──────────────────────────────────────────────────── */}
      <div className="hidden lg:flex max-w-[1600px] mx-auto px-6 xl:px-10 items-center h-[68px]">

        {/* LEFT — Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLink(e, 'hero')}
          className="flex items-center gap-3 group select-none shrink-0 mr-10"
          aria-label="KNS Construction — Home"
        >
          <KNSAnimatedLogo size="sm" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[15px] tracking-[0.1em] text-ivory font-medium group-hover:text-gold transition-colors duration-200 whitespace-nowrap">
              KNS CONSTRUCTION
            </span>
            <span className="text-[9px] tracking-[0.22em] text-gold/85 font-sans uppercase mt-0.5">
              &amp; Real Estate
            </span>
          </div>
        </a>

        {/* CENTRE — Primary links + Projects dropdown */}
        <nav
          className="flex items-center gap-1 flex-1 justify-center"
          aria-label="Main navigation"
        >
          {PRIMARY_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLink(e, link.id)}
                className={`relative px-4 py-2 text-[13.5px] font-semibold tracking-[0.06em] uppercase whitespace-nowrap rounded
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
                  isActive
                    ? 'text-gold'
                    : 'text-ivory/90 hover:text-gold'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="desktopActiveBar"
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}

          {/* PROJECTS dropdown trigger */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              className={`relative flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold tracking-[0.06em] uppercase whitespace-nowrap rounded
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
                projectsActive || dropdownOpen
                  ? 'text-gold'
                  : 'text-ivory/90 hover:text-gold'
              }`}
            >
              Projects
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
              {projectsActive && (
                <motion.span
                  layoutId="desktopActiveBar"
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
            </button>

            {/* Dropdown panel */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-[#101820] border border-gold/20 shadow-2xl shadow-black/60 overflow-hidden"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <div className="p-1.5">
                    {DROPDOWN_LINKS.map((item) => {
                      const isItemActive = activeSection === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => handleLink(e, item.id)}
                          className={`flex flex-col px-4 py-3 rounded-lg transition-all duration-150
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40
                            group ${
                            isItemActive
                              ? 'bg-gold/10 text-gold'
                              : 'text-ivory/85 hover:bg-gold/8 hover:text-gold'
                          }`}
                        >
                          <span className="text-[13px] font-semibold tracking-[0.04em] leading-tight">
                            {item.label}
                          </span>
                          <span className={`text-[11px] mt-0.5 ${isItemActive ? 'text-gold/70' : 'text-silver/60 group-hover:text-gold/60'}`}>
                            {item.desc}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* RIGHT — Call Builder CTA */}
        <div className="shrink-0 ml-10">
          <a
            href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="group inline-flex items-center gap-2 px-5 py-2.5
              bg-gradient-to-r from-gold via-[#C6A46A] to-[#B89255]
              hover:from-gold-300 hover:to-gold
              text-navy font-bold text-[12px] uppercase tracking-[0.12em] whitespace-nowrap
              rounded transition-all duration-300
              shadow-md shadow-gold/20
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <Phone className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Call Builder</span>
          </a>
        </div>
      </div>

      {/* ── Mobile / Tablet navbar ───────────────────────────────────────────── */}
      <div className="lg:hidden flex items-center justify-between h-[60px] sm:h-[68px] px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLink(e, 'hero')}
          className="flex items-center gap-2.5 group select-none"
          aria-label="KNS Construction — Home"
        >
          <KNSAnimatedLogo size="sm" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[13px] sm:text-[15px] tracking-[0.1em] text-ivory font-medium group-hover:text-gold transition-colors duration-200 whitespace-nowrap">
              KNS CONSTRUCTION
            </span>
            <span className="text-[8px] tracking-[0.2em] text-gold/85 font-sans uppercase mt-0.5">
              &amp; Real Estate
            </span>
          </div>
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5">
          <a
            href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="p-2 rounded-full bg-gold/15 text-gold border border-gold/30 hover:bg-gold hover:text-navy
              transition-all duration-200 flex items-center justify-center min-w-[40px] min-h-[40px] touch-manipulation"
            aria-label="Call Builder"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2.5 text-ivory hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 z-50
              bg-[#101820]/98 backdrop-blur-2xl overflow-y-auto flex flex-col"
          >
            {/* Nav links */}
            <div className="px-5 pt-4 pb-2 flex-1">
              {/* Primary links */}
              <div className="divide-y divide-gold/10">
                {PRIMARY_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.28 }}
                    onClick={(e) => handleLink(e, link.id)}
                    className={`flex items-center justify-between py-4 text-[14px] font-semibold uppercase tracking-[0.1em]
                      transition-colors touch-manipulation min-h-[52px]
                      focus-visible:outline-none focus-visible:text-gold ${
                      activeSection === link.id ? 'text-gold' : 'text-ivory/90 hover:text-gold'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {activeSection === link.id && <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />}
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gold/50 shrink-0" />
                  </motion.a>
                ))}

                {/* Projects accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: PRIMARY_LINKS.length * 0.04, duration: 0.28 }}
                >
                  <button
                    onClick={() => setMobileProjects((v) => !v)}
                    className={`w-full flex items-center justify-between py-4 text-[14px] font-semibold uppercase tracking-[0.1em]
                      transition-colors touch-manipulation min-h-[52px]
                      focus-visible:outline-none focus-visible:text-gold ${
                      projectsActive ? 'text-gold' : 'text-ivory/90 hover:text-gold'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {projectsActive && <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />}
                      Projects
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gold/60 transition-transform duration-200 ${mobileProjects ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileProjects && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 pl-4 border-l-2 border-gold/25 ml-1 space-y-1">
                          {DROPDOWN_LINKS.map((item) => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              onClick={(e) => handleLink(e, item.id)}
                              className={`flex flex-col py-3 px-3 rounded-lg transition-colors touch-manipulation min-h-[48px]
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 ${
                                activeSection === item.id
                                  ? 'text-gold bg-gold/8'
                                  : 'text-ivory/80 hover:text-gold hover:bg-gold/5'
                              }`}
                            >
                              <span className="text-[13px] font-semibold tracking-[0.06em]">{item.label}</span>
                              <span className="text-[11px] text-silver/60 mt-0.5">{item.desc}</span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Drawer footer */}
            <div className="px-5 py-5 border-t border-gold/15 space-y-3">
              <div className="flex items-center gap-2 text-[12px] text-silver/70">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Raghavendra Colony, Kondapur, Hyderabad</span>
              </div>
              <a
                href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full py-4 bg-gradient-to-r from-gold via-[#C6A46A] to-[#B89255]
                  text-navy font-bold text-[13px] uppercase tracking-widest
                  rounded-xl text-center flex items-center justify-center gap-2
                  shadow-lg shadow-gold/20 touch-manipulation min-h-[52px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Kiran Gajbhare — {BRAND_INFO.primaryPhone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
