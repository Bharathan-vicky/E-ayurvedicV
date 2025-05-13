
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: ReactNode;
  hoverEffect?: "lift" | "glow" | "scale" | "border" | "none";
  glassType?: "light" | "medium" | "heavy";
}

const GlassCard = ({
  className,
  children,
  hoverEffect = "lift",
  glassType = "medium"
}: GlassCardProps) => {
  // Glass effect classes based on type
  const glassClasses = {
    light: "bg-white/10 backdrop-blur-sm border border-white/20",
    medium: "bg-white/20 backdrop-blur-md border border-white/30",
    heavy: "bg-white/30 backdrop-blur-lg border border-white/40"
  };

  // Hover effect classes
  const hoverClasses = {
    lift: "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
    glow: "transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    scale: "transition-all duration-300 hover:scale-105",
    border: "transition-all duration-300 hover:border-primary/50",
    none: ""
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden", 
        glassClasses[glassType],
        hoverClasses[hoverEffect],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
