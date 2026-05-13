"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { FEATURES } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-400 to-neon-400">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the next generation of AI interaction with our cutting-edge capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <LiquidGlassCard className="h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
