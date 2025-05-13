
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const glassEffect = {
  light: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl",
  medium: "bg-white/20 backdrop-blur-md border border-white/30 rounded-xl",
  heavy: "bg-white/30 backdrop-blur-lg border border-white/40 rounded-xl",
  dark: "bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
}

export const hoverEffect = {
  lift: "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
  glow: "transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
  scale: "transition-all duration-300 hover:scale-105",
  border: "transition-all duration-300 hover:border-primary/50",
  shine: "relative overflow-hidden hover:before:animate-[shine_1.5s_ease] before:absolute before:content-[''] before:w-[200%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-left-[100%] before:top-0 before:transition-all"
}

export function createGlassEffect(type: keyof typeof glassEffect = "medium") {
  return glassEffect[type];
}

export function createHoverEffect(type: keyof typeof hoverEffect = "lift") {
  return hoverEffect[type];
}
