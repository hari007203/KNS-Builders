import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ConstructionSceneProps {
  stage: number; // 1 to 9
}

function ConstructionProceduralBuilding({ stage }: ConstructionSceneProps) {
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      // Gentle subtle rotation for cinematic presentation
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.2;
    }
  });

  return (
    <group ref={modelRef} position={[0, -0.6, 0]}>
      {/* Ground Base / Soil Terrain (All Stages) */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[10, 0.3, 8]} />
        <meshStandardMaterial
          color={stage >= 8 ? "#1F242C" : "#4A3B2C"}
          roughness={0.9}
        />
      </mesh>

      {/* Stage 1: Site Prep - Survey Pegs & Boundary Line */}
      {stage >= 1 && (
        <group>
          {[-3.5, 3.5].map((x) =>
            [-2.5, 2.5].map((z) => (
              <group key={`peg-${x}-${z}`} position={[x, 0.3, z]}>
                <mesh position={[0, 0.2, 0]}>
                  <cylinderGeometry args={[0.03, 0.03, 0.6]} />
                  <meshStandardMaterial color="#C6A46A" metalness={0.8} />
                </mesh>
                <mesh position={[0.1, 0.45, 0]}>
                  <boxGeometry args={[0.2, 0.12, 0.02]} />
                  <meshStandardMaterial color="#E63946" />
                </mesh>
              </group>
            ))
          )}
        </group>
      )}

      {/* Stage 2: Excavation Pits & Anti-Termite Layer */}
      {stage >= 2 && (
        <group position={[0, 0.02, 0]}>
          {[-2.5, 0, 2.5].map((x) =>
            [-1.8, 1.8].map((z) => (
              <mesh key={`pit-${x}-${z}`} position={[x, 0, z]}>
                <boxGeometry args={[1.2, 0.08, 1.2]} />
                <meshStandardMaterial color="#2B1E14" roughness={1.0} />
              </mesh>
            ))
          )}
        </group>
      )}

      {/* Stage 3: Footings & Foundation Concrete */}
      {stage >= 3 && (
        <group position={[0, 0.15, 0]}>
          {[-2.5, 0, 2.5].map((x) =>
            [-1.8, 1.8].map((z) => (
              <mesh key={`footing-${x}-${z}`} position={[x, 0, z]}>
                <boxGeometry args={[0.9, 0.25, 0.9]} />
                <meshStandardMaterial color="#7D8590" roughness={0.7} />
              </mesh>
            ))
          )}
        </group>
      )}

      {/* Stage 4: RCC Columns & Plinth Beam Grid */}
      {stage >= 4 && (
        <group>
          <mesh position={[0, 0.3, 1.8]}>
            <boxGeometry args={[5.2, 0.2, 0.25]} />
            <meshStandardMaterial color="#8B949E" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.3, -1.8]}>
            <boxGeometry args={[5.2, 0.2, 0.25]} />
            <meshStandardMaterial color="#8B949E" roughness={0.6} />
          </mesh>
          <mesh position={[-2.5, 0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[3.6, 0.2, 0.25]} />
            <meshStandardMaterial color="#8B949E" roughness={0.6} />
          </mesh>
          <mesh position={[2.5, 0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[3.6, 0.2, 0.25]} />
            <meshStandardMaterial color="#8B949E" roughness={0.6} />
          </mesh>

          {/* 6 Structural RCC Columns */}
          {[-2.5, 0, 2.5].map((x) =>
            [-1.8, 1.8].map((z) => (
              <mesh key={`col-${x}-${z}`} position={[x, 1.4, z]}>
                <boxGeometry args={[0.3, 2.2, 0.3]} />
                <meshStandardMaterial color="#C6A46A" metalness={0.6} roughness={0.3} />
              </mesh>
            ))
          )}
        </group>
      )}

      {/* Stage 5: Slab Castings (Ground & First Floor Slabs) */}
      {stage >= 5 && (
        <group>
          {/* Ground Floor Roof / First Floor Base Slab */}
          <mesh position={[0, 2.5, 0]}>
            <boxGeometry args={[5.8, 0.2, 4.2]} />
            <meshStandardMaterial color="#7D8590" roughness={0.6} />
          </mesh>

          {/* First Floor Columns */}
          {[-2.5, 0, 2.5].map((x) =>
            [-1.8, 1.8].map((z) => (
              <mesh key={`col-f1-${x}-${z}`} position={[x, 3.4, z]}>
                <boxGeometry args={[0.26, 1.8, 0.26]} />
                <meshStandardMaterial color="#C6A46A" metalness={0.6} roughness={0.3} />
              </mesh>
            ))
          )}

          {/* Cantilever Roof Slab */}
          <mesh position={[0, 4.3, 0]}>
            <boxGeometry args={[6.2, 0.18, 4.6]} />
            <meshStandardMaterial color="#7D8590" roughness={0.6} />
          </mesh>
        </group>
      )}

      {/* Stage 6: Precision Masonry Red-Clay Brick Walls */}
      {stage >= 6 && (
        <group>
          {/* Rear Wall Ground Floor */}
          <mesh position={[0, 1.4, -1.8]}>
            <boxGeometry args={[5.0, 2.0, 0.2]} />
            <meshStandardMaterial color="#A4422A" roughness={0.85} />
          </mesh>
          {/* Left Wall Ground Floor */}
          <mesh position={[-2.5, 1.4, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[3.4, 2.0, 0.2]} />
            <meshStandardMaterial color="#A4422A" roughness={0.85} />
          </mesh>
          {/* First Floor Walls */}
          <mesh position={[0, 3.4, -1.8]}>
            <boxGeometry args={[5.0, 1.6, 0.2]} />
            <meshStandardMaterial color="#B84A30" roughness={0.85} />
          </mesh>
        </group>
      )}

      {/* Stage 7: Plastering, MEP Conduits & Waterproofing */}
      {stage >= 7 && (
        <group>
          {/* Smooth Grey Architectural Plaster Render */}
          <mesh position={[0, 1.4, -1.82]}>
            <boxGeometry args={[5.04, 2.04, 0.05]} />
            <meshStandardMaterial color="#CBD2D9" roughness={0.5} />
          </mesh>
          <mesh position={[-2.52, 1.4, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[3.44, 2.04, 0.05]} />
            <meshStandardMaterial color="#CBD2D9" roughness={0.5} />
          </mesh>
        </group>
      )}

      {/* Stage 8: Luxury Flooring, Balconies & Exterior Elevation */}
      {stage >= 8 && (
        <group>
          {/* Architectural Teak Louvers */}
          {[-2.0, -1.7, -1.4].map((x) => (
            <mesh key={`louver-${x}`} position={[x, 3.4, 1.8]}>
              <boxGeometry args={[0.08, 1.6, 0.1]} />
              <meshStandardMaterial color="#854D27" roughness={0.5} />
            </mesh>
          ))}

          {/* Double-Glazed Glass Curtain Wall */}
          <mesh position={[1.2, 3.4, 1.8]}>
            <boxGeometry args={[2.2, 1.6, 0.05]} />
            <meshStandardMaterial
              color="#A0C4E2"
              transparent
              opacity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Toughened Glass Balustrade Ground Floor */}
          <mesh position={[0, 0.8, 1.9]}>
            <boxGeometry args={[4.8, 0.8, 0.04]} />
            <meshStandardMaterial
              color="#B8D5E5"
              transparent
              opacity={0.4}
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
        </group>
      )}

      {/* Stage 9: Final Turnkey Completion & Warm Lighting */}
      {stage >= 9 && (
        <group>
          {/* Exterior Premium Acrylic Paint Texture */}
          <mesh position={[0, 2.8, 0]}>
            <boxGeometry args={[5.6, 3.2, 3.8]} />
            <meshStandardMaterial color="#F4EFE6" roughness={0.3} />
          </mesh>

          {/* Front Entrance Teak Door */}
          <mesh position={[0, 1.2, 1.92]}>
            <boxGeometry args={[1.1, 2.0, 0.06]} />
            <meshStandardMaterial color="#5C3317" roughness={0.4} />
          </mesh>

          {/* Roof Champagne Gold Fascia Accent */}
          <mesh position={[0, 4.22, 1.9]}>
            <boxGeometry args={[5.45, 0.06, 0.06]} />
            <meshStandardMaterial color="#C6A46A" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* Ambient Warm Interior Room Lights */}
          <pointLight position={[0, 1.5, 0]} color="#FFD180" intensity={4} distance={6} />
          <pointLight position={[0, 3.2, 0]} color="#FFE0B2" intensity={3} distance={5} />

          {/* Manicured Landscaping & Garden Lights */}
          <mesh position={[3.6, 0.6, 2.2]}>
            <coneGeometry args={[0.45, 1.4, 6]} />
            <meshStandardMaterial color="#2D5A43" roughness={0.8} />
          </mesh>
          <mesh position={[-3.6, 0.6, 2.2]}>
            <coneGeometry args={[0.45, 1.4, 6]} />
            <meshStandardMaterial color="#2D5A43" roughness={0.8} />
          </mesh>
        </group>
      )}
    </group>
  );
}

// Responsive Camera Controller for mobile portrait vs desktop widescreen
function ResponsiveCameraController() {
  const { camera, size } = useThree();

  useEffect(() => {
    const isPortrait = size.width < 640;
    if (isPortrait) {
      // Pull camera back slightly and increase FOV so entire building & terrain fit without lateral clipping
      camera.position.set(6.8, 4.6, 7.2);
      if (camera instanceof THREE.PerspectiveCamera) {
        camera.fov = 48;
        camera.updateProjectionMatrix();
      }
    } else {
      camera.position.set(5.5, 4.0, 6.0);
      if (camera instanceof THREE.PerspectiveCamera) {
        camera.fov = 42;
        camera.updateProjectionMatrix();
      }
    }
  }, [camera, size.width]);

  return null;
}

export const ConstructionProcess3D: React.FC<ConstructionSceneProps> = ({ stage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden bg-gradient-to-b from-navy-900 to-charcoal border border-gold/25 shadow-2xl relative touch-pan-y"
      style={{ touchAction: 'pan-y' }}
    >
      <Canvas
        camera={{ position: [5.5, 4.0, 6.0], fov: 44 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <ResponsiveCameraController />
        <ambientLight intensity={0.65} />
        <directionalLight position={[8, 12, 10]} intensity={1.5} />
        <pointLight position={[-6, 4, -4]} intensity={0.9} color="#C6A46A" />
        <ConstructionProceduralBuilding stage={stage} />
        <OrbitControls
          enableZoom={!isMobile} // Disable pinch/wheel zoom on mobile so page scrolling is never hijacked
          maxPolarAngle={Math.PI / 2.05}
          minDistance={4}
          maxDistance={12}
          autoRotate={false}
          enablePan={false}
        />
      </Canvas>

      {/* Floating 3D Control Hints - Mobile Friendly */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-navy/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md border border-gold/30 text-[10px] sm:text-xs font-mono text-silver flex items-center gap-1.5 sm:gap-2 shadow-lg">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse" />
        <span className="hidden sm:inline">Interactive 3D Model: Drag to Orbit</span>
        <span className="sm:hidden">Drag 3D Model to Rotate</span>
      </div>

      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 bg-navy/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md border border-gold/30 text-[10px] sm:text-xs font-serif text-gold shadow-lg">
        Stage 0{stage} / 09
      </div>
    </div>
  );
};
