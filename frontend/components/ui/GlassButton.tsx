"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative overflow-hidden rounded-xl font-medium transition-all duration-300",
          "glass border border-white/10 dark:border-white/5",
          "hover:scale-105 active:scale-95",
          variant === "primary" && "bg-gradient-to-r from-electric-500 to-neon-500 text-white",
          variant === "primary" && "border-0 hover:shadow-lg hover:shadow-electric-500/25",
          variant === "secondary" && "glass hover:bg-white/10",
          variant === "ghost" && "glass hover:bg-white/5",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-to-r from-electric-400 to-neon-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton };
