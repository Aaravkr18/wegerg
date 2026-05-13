"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { ParticleBackground } from "@/components/three/ParticleBackground";

export function HeroSection() {
  const [blobs, setBlobs] = useState<Array<{left: string, top: string, duration: number, delay: number}>>([]);

  useEffect(() => {
    setBlobs([...Array(6)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    })));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-electric-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-400 via-neon-400 to-purple-400">
              Meet Aura
            </span>
            <br />
            <span className="text-white">Your Adaptive AI Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Multi-model orchestration that dynamically switches between LLM providers 
            based on your needs, delivering the perfect balance of speed and intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#" className="w-full sm:w-auto">
              <GlassButton size="lg" className="w-full">
                Join Waitlist
              </GlassButton>
            </Link>
            <GlassButton variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Models
            </GlassButton>
          </div>
        </motion.div>
      </div>

      {/* Floating glass blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 glass-strong rounded-full"
            style={{
              left: blob.left,
              top: blob.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: blob.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
