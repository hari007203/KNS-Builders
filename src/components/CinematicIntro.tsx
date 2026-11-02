import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FastForward, ArrowRight, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

// 3D Architectural Scene Elements
function CinematicArchitecturalScene({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const logoRef = useRef<THREE.Group>(null);
  const villaRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (logoRef.current) {
      // Gentle floating and metallic reflection sway
      logoRef.current.rotation.y = Math.sin(t * 0.5) * 0.15;
      logoRef.current.position.y = Math.sin(t * 1.2) * 0.08;
    }

    if (villaRef.current) {
      // Slow majestic parallax
      villaRef.current.rotation.y = -0.2 + Math.sin(t * 0.2) * 0.05;
    }
  });

  // Calculate opacity & scale based on intro progress
  const logoOpacity = Math.max(0, Math.min(1, (progress - 0.15) * 4)) * (1 - Math.max(0, Math.min(1, (progress - 0.55) * 4)));
  const villaScale = Math.max(0, Math.min(1, (progress - 0.45) * 2.5));

  return (
    <group ref={groupRef}>
      {/* Ambient & Cinematic Accent Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 15]} intensity={1.5} color="#FAF6EE" castShadow />
      <pointLight position={[-10, 5, -5]} intensity={1.8} color="#C6A46A" />
      <pointLight position={[0, -2, 5]} intensity={0.8} color="#E4CFAB" />
      <spotLight position={[0, 15, 0]} intensity={2} angle={0.6} penumbra={0.8} color="#C6A46A" />

      {/* Subtle Dust & Gold Ambient Particles */}
      <Sparkles
        count={70}
        scale={18}
        size={2.5}
        speed={0.4}
        opacity={0.6}
        color="#C6A46A"
      />

      {/* 3D Extruded Metallic KNS Logo & Emblem (Scene 2) */}
      <group
        ref={logoRef}
        position={[0, 0, -2]}
        visible={progress < 0.75}
      >
        {/* Tower Crane Mast */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.15, 3.2, 0.15]} />
          <meshStandardMaterial
            color="#C6A46A"
            metalness={0.9}
            roughness={0.2}
            emissive="#59421A"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Crane Horizontal Jib Arm */}
        <mesh position={[0.7, 1.9, 0]}>
          <boxGeometry args={[3.2, 0.14, 0.14]} />
          <meshStandardMaterial color="#EED8A1" metalness={0.85} roughness={0.2} />
        </mesh>
        {/* Crane Tower Apex Triangle */}
        <mesh position={[0, 2.3, 0]}>
          <coneGeometry args={[0.4, 0.7, 4]} />
          <meshStandardMaterial color="#C6A46A" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Architectural Masonry Pyramid Steps */}
        <mesh position={[-0.8, -1.0, 0]}>
          <boxGeometry args={[0.55, 0.3, 0.3]} />
          <meshStandardMaterial color="#C6A46A" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[-0.55, -0.7, 0]}>
          <boxGeometry args={[0.45, 0.3, 0.3]} />
          <meshStandardMaterial color="#E4CFAB" metalness={0.75} roughness={0.25} />
        </mesh>
        <mesh position={[-0.35, -0.4, 0]}>
          <boxGeometry args={[0.35, 0.3, 0.3]} />
          <meshStandardMaterial color="#C6A46A" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Foundation Plinth */}
        <mesh position={[0, -1.3, 0]}>
          <boxGeometry args={[4.2, 0.15, 0.8]} />
          <meshStandardMaterial color="#75552B" metalness={0.8} roughness={0.4} />
        </mesh>
      </group>

      {/* Realistic Luxury Architectural Villa Transformation (Scene 3 & 4) */}
      <group
        ref={villaRef}
        position={[0, -1.2, -4]}
        scale={[villaScale, villaScale, villaScale]}
        visible={progress > 0.4}
      >
        {/* Ground Platform & Patio */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[14, 0.4, 10]} />
          <meshStandardMaterial color="#1E2229" roughness={0.8} />
        </mesh>

        {/* Swimming Pool Water Reflection */}
        <mesh position={[3.5, 0.22, 2.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4.5, 2.8]} />
          <meshStandardMaterial
            color="#2A6F97"
            roughness={0.05}
            metalness={0.3}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Pool Deck Border */}
        <mesh position={[3.5, 0.21, 2.5]}>
          <boxGeometry args={[4.8, 0.05, 3.1]} />
          <meshStandardMaterial color="#C6A46A" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Villa Main Ground Floor Volume */}
        <mesh position={[-1.5, 1.4, 0]}>
          <boxGeometry args={[6.5, 2.4, 6]} />
          <meshStandardMaterial color="#FAF8F3" roughness={0.4} />
        </mesh>

        {/* First Floor Cantilevered Master Suite Volume */}
        <mesh position={[-1.0, 3.4, 0.5]}>
          <boxGeometry args={[6.0, 1.8, 5.5]} />
          <meshStandardMaterial color="#22252B" roughness={0.5} />
        </mesh>

        {/* Warm Wood Vertical Architectural Louvers */}
        <mesh position={[-4.2, 2.4, 1.2]}>
          <boxGeometry args={[0.3, 4.2, 1.8]} />
          <meshStandardMaterial color="#8B5A2B" roughness={0.6} />
        </mesh>

        {/* Double-Height Glass Curtain Wall */}
        <mesh position={[0.6, 2.4, 2.9]}>
          <boxGeometry args={[2.8, 4.0, 0.08]} />
          <meshStandardMaterial
            color="#90B0D0"
            metalness={0.8}
            roughness={0.05}
            transparent
            opacity={0.45}
          />
        </mesh>

        {/* Cantilever Roof Slab with Champagne Trim */}
        <mesh position={[-0.8, 4.4, 0.6]}>
          <boxGeometry args={[7.2, 0.25, 6.4]} />
          <meshStandardMaterial color="#FAF8F3" roughness={0.3} />
        </mesh>
        <mesh position={[-0.8, 4.38, 3.82]}>
          <boxGeometry args={[7.25, 0.08, 0.08]} />
          <meshStandardMaterial color="#C6A46A" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Warm Interior Lighting Emitters */}
        <pointLight position={[-1.2, 1.5, 1.5]} intensity={3.5} color="#FFD180" distance={6} />
        <pointLight position={[0.5, 3.2, 1.8]} intensity={3.0} color="#FFE0B2" distance={5} />

        {/* Minimalist Architectural Trees */}
        <mesh position={[-5.5, 1.8, 2]}>
          <coneGeometry args={[0.8, 3.2, 6]} />
          <meshStandardMaterial color="#2D4A3E" roughness={0.7} />
        </mesh>
        <mesh position={[-5.5, 0.4, 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8]} />
          <meshStandardMaterial color="#3D2B1F" />
        </mesh>

        <mesh position={[6.0, 1.5, -2]}>
          <coneGeometry args={[0.7, 2.8, 6]} />
          <meshStandardMaterial color="#233D32" roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

// Camera Dolly Controller
function DollyCamera({ progress }: { progress: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (!cameraRef.current) return;
    // Dolly-in motion: starting from z=7 down to z=4.2 with smooth ease
    const ease = 1 - Math.pow(1 - progress, 3);
    cameraRef.current.position.z = 7.5 - ease * 3.2;
    cameraRef.current.position.y = 0.8 - ease * 0.4;
    cameraRef.current.position.x = Math.sin(progress * Math.PI) * 0.4;
    cameraRef.current.lookAt(0, 0.2, -1);
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0.8, 7.5]} fov={45} />;
}

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentScene, setCurrentScene] = useState(1);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // 5.5 second cinematic progression
    const totalDuration = 5500;
    const intervalTime = 25;
    const step = intervalTime / totalDuration;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 1) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 1;
        }

        // Scene tracking for typography overlays
        if (next < 0.25) setCurrentScene(1);
        else if (next < 0.55) setCurrentScene(2);
        else if (next < 0.85) setCurrentScene(3);
        else setCurrentScene(4);

        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  if (isSkipped) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#101820] flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: true, alpha: true }}>
          <DollyCamera progress={progress} />
          <CinematicArchitecturalScene progress={progress} />
        </Canvas>
      </div>

      {/* Cinematic Vignette & Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gold opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#101820] via-transparent to-[#101820]/80" />

      {/* Foreground Cinematic Typography Sequences */}
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
                KNS Construction & Real Estate
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
                Building Dreams, <span className="gold-gradient-text italic">Brick by Brick.</span>
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
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Transforming Visions</span>
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
                <span className="text-xs uppercase tracking-[0.35em] text-gold font-semibold">Welcome to KNS</span>
                <h1 className="font-serif text-4xl md:text-6xl text-ivory font-medium">
                  Building Spaces. <span className="gold-gradient-text italic">Creating Legacies.</span>
                </h1>
                <p className="text-silver text-base md:text-lg max-w-xl mx-auto font-light">
                  From thoughtfully planned homes to premium developments, KNS brings quality, craftsmanship, and vision together.
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

      {/* Top Controls: Brand Minimal Mark & Skip Intro Button */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-navy-800 border border-gold/40 flex items-center justify-center">
            <span className="font-serif font-bold text-gold text-base tracking-wider">KNS</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-silver hidden sm:inline">
            Cinematic Experience
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 hover:border-gold bg-navy/80 hover:bg-navy text-xs uppercase tracking-widest text-ivory hover:text-gold transition-all duration-200 cursor-pointer shadow-md"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Cinematic Progress Bar */}
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
