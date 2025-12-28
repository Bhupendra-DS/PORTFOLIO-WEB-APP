import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

function ProfileImage() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/profile.jpeg');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  // Create a circular alpha mask
  const alphaMask = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Draw white circle on black background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 512, 512);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(256, 256, 256, 0, Math.PI * 2);
    ctx.fill();
    
    const mask = new THREE.CanvasTexture(canvas);
    mask.needsUpdate = true;
    return mask;
  }, []);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial
        map={texture}
        alphaMap={alphaMask}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <ProfileImage />
    </>
  );
}

export default function RotatingProfileImage() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60 flex items-center justify-center">
      <Suspense fallback={<div className="w-64 h-64 rounded-full bg-secondary/50 animate-pulse" />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

