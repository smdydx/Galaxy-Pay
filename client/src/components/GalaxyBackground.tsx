import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function GalaxyBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-background to-background" />
      
      {/* Black Hole Effect */}
      <BlackHole />
      
      {/* Stars */}
      <Stars />
      
      {/* Nebula Clouds */}
      <Nebula />
    </div>
  );
}

function BlackHole() {
  return (
    <div className="absolute inset-0">
      {/* Central black hole core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-black shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(139,0,139,0.3)]" />
      
      {/* Black hole glow rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-transparent opacity-40"
        style={{
          borderImage: "linear-gradient(45deg, #a855f7 0%, #7c3aed 50%, transparent 100%) 1",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-transparent opacity-30"
        style={{
          borderImage: "linear-gradient(45deg, transparent 0%, #3b82f6 50%, #1e40af 100%) 1",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-transparent opacity-20"
        style={{
          borderImage: "linear-gradient(45deg, #06b6d4 0%, transparent 50%, #0891b2 100%) 1",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Accretion disk particles */}
      <AccretionDisk />
    </div>
  );
}

function AccretionDisk() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    angle: (i / 20) * Math.PI * 2,
    distance: 120 + Math.random() * 40,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 8 + 12,
  }));

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [
              Math.cos(particle.angle) * particle.distance,
              Math.cos(particle.angle + Math.PI * 0.2) * (particle.distance - 20),
            ],
            y: [
              Math.sin(particle.angle) * particle.distance,
              Math.sin(particle.angle + Math.PI * 0.2) * (particle.distance - 20),
            ],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function Stars() {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 3
  }));

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Nebula() {
  return (
    <div className="absolute inset-0 opacity-40">
      {/* Purple nebula */}
      <motion.div
        className="absolute -top-1/4 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Blue nebula */}
      <motion.div
        className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[100px]"
        animate={{
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Cyan nebula near black hole */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-500/30 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
