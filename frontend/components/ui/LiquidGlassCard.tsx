"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface LiquidGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowColor?: string;
}

const LiquidGlassCard = forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  ({ className, hoverEffect = true, glowColor = "electric", children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "glass rounded-2xl p-6 transition-all duration-500",
          "border border-white/10 dark:border-white/5",
          hoverEffect && "hover:scale-[1.02] hover:shadow-xl",
          hoverEffect && `hover:shadow-${glowColor}-500/20`,
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

LiquidGlassCard.displayName = "LiquidGlassCard";

export { LiquidGlassCard };
