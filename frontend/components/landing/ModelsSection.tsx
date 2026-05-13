"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { AI_MODELS } from "@/lib/constants";
import { AIModel } from "@/types";
import { cn } from "@/lib/utils";

export function ModelsSection() {
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
              Model Ecosystem
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from the world&apos;s leading AI models, all seamlessly integrated
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_MODELS.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ModelCard model={model} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelCard({ model }: { model: AIModel }) {
  return (
    <LiquidGlassCard className="p-8 h-full relative group flex flex-col items-start text-left overflow-hidden">
      {/* Badge */}
      {model.badge && (
        <div className="absolute top-6 right-6">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
            {model.badge}
          </span>
        </div>
      )}

      {/* Icon with glow */}
      <div className="relative mb-8">
        <div className={cn(
          "absolute inset-0 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r",
          model.color
        )} />
        <div className={cn(
          "relative w-12 h-12 rounded-2xl flex items-center justify-center bg-black/50 border border-white/10 text-transparent bg-clip-text bg-gradient-to-r",
          model.color
        )}>
          <Sparkles className={cn("w-6 h-6", model.color.replace('from-', 'text-').split(' ')[0])} />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-white">{model.name}</h3>
      
      <p className="text-gray-400 leading-relaxed text-sm">
        {model.description}
      </p>

      <div className="mt-auto pt-8">
        <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500 uppercase tracking-widest">
          <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse bg-gradient-to-r", model.color)} />
          Available Now
        </div>
      </div>
    </LiquidGlassCard>
  );
}
