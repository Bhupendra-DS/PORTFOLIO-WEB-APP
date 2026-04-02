import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { ArrowDown, Mail, Download } from 'lucide-react';
import * as THREE from 'three';

function BackgroundSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section id="hero-section" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#818cf8" />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#c084fc" />
          <BackgroundSphere />
        </Canvas>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--background)_80%)] pointer-events-none z-0" />

      {/* Content */}
      <div className="section-container relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]"
        >
          Associate AI <br className="hidden md:block" />
          <span className="text-gradient">Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Specializing in GenAI, Agentic Systems, and RAG Pipelines, 
          building intelligent document workflows and scalable AI applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View My Work <ArrowDown size={18} />
          </a>
          <a
            href="/BHUPENDRA_SINGH_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-10 border-t border-white/10"
        >
          {[
            { value: '12+', label: 'Models Deployed' },
            { value: '50+', label: 'Technologies' },
            { value: '5+', label: 'RAG Systems' },
            { value: '20+', label: 'Data Pipelines' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-xs md:text-sm text-white/50 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
