import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
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
          {/* Site boundary flags */}
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
          {/* Plinth beams tying columns */}
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

          {/* Vertical RCC Columns */}
          {[-2.5, 0, 2.5].map((x) =>
            [-1.8, 1.8].map((z) => (
              <mesh key={`col-${x}-${z}`} position={[x, 1.4, z]}>
                <boxGeometry args={[0.28, 2.2, 0.28]} />
                <meshStandardMaterial
                  color="#9AA0A6"
                  roughness={0.5}
                  metalness={0.1}
                />
              </mesh>
            ))
          )}
        </group>
      )}

      {/* Stage 5: Brickwork & Masonry Walls */}
      {stage >= 5 && (
        <group position={[0, 1.3, 0]}>
          {/* Back wall */}
          <mesh position={[0, 0, -1.7]}>
            <boxGeometry args={[5.0, 2.0, 0.25]} />
            <meshStandardMaterial
              color={stage >= 8 ? "#F5F1E9" : "#C85A32"} // Brick red or plastered ivory
              roughness={stage >= 8 ? 0.3 : 0.8}
            />
          </mesh>
          {/* Left Wall */}
          <mesh position={[-2.4, 0, 0]}>
            <boxGeometry args={[0.25, 2.0, 3.4]} />
            <meshStandardMaterial
              color={stage >= 8 ? "#F5F1E9" : "#C85A32"}
              roughness={stage >= 8 ? 0.3 : 0.8}
            />
          </mesh>
          {/* Front Wall with Window & Door cutouts */}
          <mesh position={[-1.4, 0, 1.7]}>
            <boxGeometry args={[1.8, 2.0, 0.25]} />
            <meshStandardMaterial
              color={stage >= 8 ? "#F5F1E9" : "#C85A32"}
              roughness={stage >= 8 ? 0.3 : 0.8}
            />
          </mesh>
          <mesh position={[1.4, 0, 1.7]}>
            <boxGeometry args={[1.8, 2.0, 0.25]} />
            <meshStandardMaterial
              color={stage >= 8 ? "#F5F1E9" : "#C85A32"}
              roughness={stage >= 8 ? 0.3 : 0.8}
            />
          </mesh>
        </group>
      )}

      {/* Stage 6: RCC Slab & Roofing */}
      {stage >= 6 && (
        <group>
          {/* Ground Floor Roof Slab */}
          <mesh position={[0, 2.4, 0]}>
            <boxGeometry args={[5.6, 0.2, 4.0]} />
            <meshStandardMaterial color="#A8B0B8" roughness={0.5} />
          </mesh>
          {/* First floor structural columns */}
          {[-2.0, 2.0].map((x) =>
            [-1.5, 1.5].map((z) => (
              <mesh key={`col2-${x}-${z}`} position={[x, 3.3, z]}>
                <boxGeometry args={[0.24, 1.6, 0.24]} />
                <meshStandardMaterial color="#9AA0A6" roughness={0.5} />
              </mesh>
            ))
          )}
          {/* First floor terrace canopy */}
          <mesh position={[0, 4.15, 0]}>
            <boxGeometry args={[5.4, 0.15, 3.8]} />
            <meshStandardMaterial
              color={stage >= 8 ? "#FAF6EE" : "#8B949E"}
              roughness={0.4}
            />
          </mesh>
        </group>
      )}

      {/* Stage 7: MEP Plumbing & Electrical Conduit Tracks */}
      {stage >= 7 && stage < 8 && (
        <group>
          {/* Concealed conduits glowing blue & gold */}
          <mesh position={[0, 1.2, 1.82]}>
            <boxGeometry args={[3.2, 0.05, 0.05]} />
            <meshStandardMaterial color="#4CC9F0" emissive="#4CC9F0" emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[-2.42, 1.0, 0]}>
            <boxGeometry args={[0.05, 0.05, 2.8]} />
            <meshStandardMaterial color="#F72585" emissive="#F72585" emissiveIntensity={0.8} />
          </mesh>
        </group>
      )}

      {/* Stage 8 & 9: Plastering, Architectural Glass & Finishes */}
      {stage >= 8 && (
        <group>
          {/* Balcony Glass Railing */}
          <mesh position={[0, 2.8, 1.9]}>
            <boxGeometry args={[4.8, 0.7, 0.04]} />
            <meshStandardMaterial
              color="#A0C4E2"
              transparent
              opacity={0.5}
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
          {/* Windows Glass */}
          <mesh position={[-1.4, 1.3, 1.8]}>
            <boxGeometry args={[0.9, 1.1, 0.06]} />
            <meshStandardMaterial color="#4A90E2" transparent opacity={0.6} metalness={0.9} />
          </mesh>
          <mesh position={[1.4, 1.3, 1.8]}>
            <boxGeometry args={[0.9, 1.1, 0.06]} />
            <meshStandardMaterial color="#4A90E2" transparent opacity={0.6} metalness={0.9} />
          </mesh>
        </group>
      )}

      {/* Stage 9: Completed Turnkey Home with Teak Door, Warm Lights & Landscape */}
      {stage === 9 && (
        <group>
          {/* Teak Main Entrance Door with Brass Handle */}
          <mesh position={[0, 0.95, 1.72]}>
            <boxGeometry args={[0.85, 1.7, 0.08]} />
            <meshStandardMaterial color="#5C3317" roughness={0.3} metalness={0.2} />
          </mesh>
          <mesh position={[0.3, 0.95, 1.77]}>
            <sphereGeometry args={[0.04]} />
            <meshStandardMaterial color="#C6A46A" metalness={0.9} roughness={0.1} />
          </mesh>

          {/* Exterior Architectural Wood Louvers */}
          <mesh position={[-2.45, 2.0, 0]}>
            <boxGeometry args={[0.05, 3.2, 0.8]} />
            <meshStandardMaterial color="#8B5A2B" roughness={0.4} />
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

export const ConstructionProcess3D: React.FC<ConstructionSceneProps> = ({ stage }) => {
  return (
    <div className="w-full h-[380px] md:h-[460px] rounded-xl overflow-hidden bg-gradient-to-b from-navy-900 to-charcoal border border-gold/20 shadow-2xl relative">
      <Canvas camera={{ position: [5.5, 4.0, 6.0], fov: 42 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[8, 12, 10]} intensity={1.6} castShadow />
        <pointLight position={[-6, 4, -4]} intensity={0.9} color="#C6A46A" />
        <ConstructionProceduralBuilding stage={stage} />
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2.05}
          minDistance={4}
          maxDistance={12}
          autoRotate={false}
        />
      </Canvas>

      {/* Floating 3D Control Hints */}
      <div className="absolute top-4 left-4 z-10 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-gold/30 text-xs font-mono text-silver flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <span>Interactive 3D Model: Drag to Orbit | Scroll to Zoom</span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-gold/30 text-xs font-serif text-gold">
        Stage 0{stage} / 09
      </div>
    </div>
  );
};
