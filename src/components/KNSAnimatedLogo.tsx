import React from 'react';
import { motion } from 'framer-motion';

interface KNSAnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showGlow?: boolean;
}

export const KNSAnimatedLogo: React.FC<KNSAnimatedLogoProps> = ({
  className = '',
  size = 'sm',
  showGlow = true,
}) => {
  const dimensions = {
    sm: { box: 38, icon: 26 },
    md: { box: 46, icon: 32 },
    lg: { box: 56, icon: 40 },
  }[size];

  return (
    <div
      className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br from-[#16212D] via-[#101820] to-[#0D141C] border border-[#C6A46A]/40 overflow-hidden shadow-lg group hover:border-[#C6A46A] transition-all duration-300 ${className}`}
      style={{
        width: dimensions.box,
        height: dimensions.box,
      }}
    >
      {/* Subtle ambient gold radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,164,106,0.18),transparent_70%)] pointer-events-none" />

      {/* Travelling metallic sheen light bar */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, transparent 20%, rgba(255, 246, 222, 0.28) 45%, rgba(198, 164, 106, 0.4) 50%, transparent 70%)',
          width: '200%',
          height: '200%',
          left: '-50%',
          top: '-50%',
        }}
        initial={{ x: '-100%', y: '-100%' }}
        animate={{ x: '100%', y: '100%' }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          duration: 1.8,
          ease: 'easeInOut',
        }}
      />

      {/* SVG Emblem from KNS Brand Identity */}
      <motion.svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
      >
        <defs>
          <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="35%" stopColor="#E5CFA0" />
            <stop offset="70%" stopColor="#C6A46A" />
            <stop offset="100%" stopColor="#966F35" />
          </linearGradient>
          <linearGradient id="navSheenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6A46A" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Tower Crane Apex Triangle */}
        <path d="M46 22 L72 22 L54 10 L46 22 Z" fill="url(#navGoldGrad)" />

        {/* Tower Crane Vertical Lattice Mast */}
        <rect x="52" y="22" width="6" height="76" fill="url(#navGoldGrad)" />
        <line x1="52" y1="28" x2="58" y2="34" stroke="#101820" strokeWidth="1.5" />
        <line x1="58" y1="34" x2="52" y2="40" stroke="#101820" strokeWidth="1.5" />
        <line x1="52" y1="40" x2="58" y2="46" stroke="#101820" strokeWidth="1.5" />
        <line x1="58" y1="46" x2="52" y2="52" stroke="#101820" strokeWidth="1.5" />
        <line x1="52" y1="52" x2="58" y2="58" stroke="#101820" strokeWidth="1.5" />
        <line x1="58" y1="58" x2="52" y2="64" stroke="#101820" strokeWidth="1.5" />
        <line x1="52" y1="64" x2="58" y2="70" stroke="#101820" strokeWidth="1.5" />
        <line x1="58" y1="70" x2="52" y2="76" stroke="#101820" strokeWidth="1.5" />

        {/* Jib Horizontal Arm */}
        <rect x="22" y="22" width="76" height="4.5" fill="url(#navGoldGrad)" rx="1" />

        {/* Counterweight */}
        <rect x="22" y="20" width="10" height="9" fill="url(#navGoldGrad)" rx="1" />

        {/* Cable & Hook */}
        <line
          x1="82"
          y1="26"
          x2="82"
          y2="36"
          stroke="#C6A46A"
          strokeWidth="1.5"
          strokeDasharray="2 1"
        />
        <circle cx="82" cy="38" r="2" fill="url(#navGoldGrad)" />
        <circle cx="82" cy="43" r="1.5" fill="url(#navGoldGrad)" />

        {/* Masonry / Brick Pyramid Foundation */}
        <rect x="24" y="86" width="11" height="6" fill="url(#navGoldGrad)" rx="0.5" />
        <rect x="37" y="86" width="12" height="6" fill="url(#navGoldGrad)" rx="0.5" />
        <rect x="28" y="78" width="10" height="6" fill="url(#navGoldGrad)" rx="0.5" />
        <rect x="40" y="78" width="9" height="6" fill="url(#navGoldGrad)" rx="0.5" />
        <rect x="32" y="70" width="11" height="6" fill="url(#navGoldGrad)" rx="0.5" />
        <polygon points="38,62 48,52 48,68 38,68" fill="url(#navGoldGrad)" />

        {/* Base Foundation line */}
        <rect x="20" y="94" width="80" height="3" fill="url(#navGoldGrad)" rx="1.5" />
      </motion.svg>

      {/* Subtle outer gold glow */}
      {showGlow && (
        <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-[#C6A46A]/20 via-transparent to-[#C6A46A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};
