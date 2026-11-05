import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FastForward, ArrowRight } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentScene, setCurrentScene] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const rafRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  // Single completion guard — prevents duplicate onComplete calls
  const triggerComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsCompleted(true);
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setTimeout(() => onComplete(), 400);
  }, [onComplete]);

  // rAF-driven progress tracker derived from actual video currentTime / duration
  const startProgressLoop = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      if (!videoRef.current || completedRef.current) return;
      const duration = videoRef.current.duration || 1;
      const current = videoRef.current.currentTime;
      const pct = Math.min(current / duration, 1);

      setProgress(pct);

      // Scene segmentation — 4 equal quarters
      if (pct < 0.25) setCurrentScene(1);
      else if (pct < 0.5) setCurrentScene(2);
      else if (pct < 0.75) setCurrentScene(3);
      else setCurrentScene(4);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Fallback timer when video cannot play
  useEffect(() => {
    if (!videoError) return;

    const totalDuration = 7900;
    const intervalTime = 25;
    const step = intervalTime / totalDuration;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 1) {
          clearInterval(timer);
          triggerComplete();
          return 1;
        }
        if (next < 0.25) setCurrentScene(1);
        else if (next < 0.5) setCurrentScene(2);
        else if (next < 0.75) setCurrentScene(3);
        else setCurrentScene(4);
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [videoError, triggerComplete]);

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoReady(true);
      video.play().catch(() => {
        // Autoplay blocked — treat as error and use fallback timer
        setVideoError(true);
      });
    };

    const handlePlaying = () => {
      startProgressLoop();
    };

    const handleEnded = () => {
      setProgress(1);
      triggerComplete();
    };

    const handleError = () => {
      setVideoError(true);
    };

    // Safety net: if video stalls for over 3 s, start fallback
    const handleStalled = () => {
      setTimeout(() => {
        if (videoRef.current && videoRef.current.paused && !completedRef.current) {
          setVideoError(true);
        }
      }, 3000);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    video.addEventListener('stalled', handleStalled);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      video.removeEventListener('stalled', handleStalled);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [startProgressLoop, triggerComplete]);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    triggerComplete();
  };

  if (isCompleted) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#101820] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Cinematic Video Background ── */}
      <video
        ref={videoRef}
        src="/videos/kns-intro.mp4"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        preload="metadata"
        autoPlay
        muted
        playsInline
        loop={false}
        disablePictureInPicture
        style={{ display: 'block', pointerEvents: 'none' }}
        aria-hidden="true"
      />

      {/* Cinematic Vignette — softens video edges for luxury feel */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(16,24,32,0.55) 100%)',
        }}
      />
      {/* Top & bottom gradient scrim — keeps UI readable over bright video */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            'linear-gradient(to bottom, rgba(16,24,32,0.75) 0%, transparent 25%, transparent 70%, rgba(16,24,32,0.85) 100%)',
        }}
      />


      {/* ── Foreground Typography Sequences ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none select-none">
        <AnimatePresence mode="wait">
          {currentScene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy/60 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">Architectural Excellence</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-ivory font-light tracking-wide">
                KNS Construction &amp; Real Estate
              </h2>
              <p className="text-silver text-sm tracking-wider uppercase">Hyderabad</p>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl md:text-6xl text-ivory tracking-tight font-normal">
                Building Dreams,{' '}
                <span className="gold-gradient-text italic">Brick by Brick.</span>
              </h1>
              <p className="text-gold/90 text-sm md:text-base tracking-widest uppercase max-w-md mx-auto">
                By Kiran Gajbhare • Kondapur, Hyderabad
              </p>
            </motion.div>
          )}

          {currentScene === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                Transforming Visions
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-ivory font-light">
                Spaces Built Around Your Dreams.
              </h2>
              <p className="text-silver text-base max-w-xl mx-auto">
                Thoughtfully designed spaces. Quality construction. Lasting value.
              </p>
            </motion.div>
          )}

          {currentScene === 4 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 pointer-events-auto"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.35em] text-gold font-semibold">
                  Welcome to KNS
                </span>
                <h1 className="font-serif text-4xl md:text-6xl text-ivory font-medium">
                  Building Spaces.{' '}
                  <span className="gold-gradient-text italic">Creating Legacies.</span>
                </h1>
                <p className="text-silver text-base md:text-lg max-w-xl mx-auto font-light">
                  From thoughtfully planned homes to premium developments, KNS brings quality,
                  craftsmanship, and vision together.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={handleSkip}
                  className="px-6 py-3 bg-gold hover:bg-gold-500 text-navy font-semibold text-sm rounded-md transition-all duration-300 shadow-lg shadow-gold/20 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={handleSkip}
                  className="px-6 py-3 border border-gold/40 hover:border-gold text-ivory hover:text-gold text-sm rounded-md backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  Start Your Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Top Bar: KNS Logo + Skip Intro ── */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-navy-800 border border-gold/40 flex items-center justify-center backdrop-blur-sm">
            <span className="font-serif font-bold text-gold text-base tracking-wider">KNS</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-silver hidden sm:inline">
            Cinematic Experience
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 hover:border-gold bg-navy/80 hover:bg-navy backdrop-blur-sm text-xs uppercase tracking-widest text-ivory hover:text-gold transition-all duration-200 cursor-pointer shadow-md"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── Bottom Progress Bar ── */}
      <div className="absolute bottom-6 left-8 right-8 z-20 flex flex-col gap-2">
        <div className="flex justify-between items-center text-[11px] text-silver font-mono">
          <span>SCENE 0{currentScene} / 04</span>
          <span>{Math.round(progress * 100)}%</span>
        </div>
        <div className="w-full h-1 bg-charcoal rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold-gradient"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
