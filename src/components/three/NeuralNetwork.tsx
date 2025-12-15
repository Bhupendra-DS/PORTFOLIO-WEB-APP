import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NetworkParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 100;

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const connections: [number, number][] = [];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    // Create connections between nearby particles
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.8 && connections.length < 150) {
          connections.push([i, j]);
        }
      }
    }

    const linePos = new Float32Array(connections.length * 6);
    connections.forEach(([ii, jj], idx) => {
      linePos[idx * 6] = pos[ii * 3];
      linePos[idx * 6 + 1] = pos[ii * 3 + 1];
      linePos[idx * 6 + 2] = pos[ii * 3 + 2];
      linePos[idx * 6 + 3] = pos[jj * 3];
      linePos[idx * 6 + 4] = pos[jj * 3 + 1];
      linePos[idx * 6 + 5] = pos[jj * 3 + 2];
    });

    return { positions: pos, linePositions: linePos };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#00b8b8"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00b8b8"
          transparent
          opacity={0.2}
        />
      </lineSegments>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <NetworkParticles />
    </>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
