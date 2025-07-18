
import { ReactNode } from "react";
import { cn, glassEffect, hoverEffect } from "@/lib/utils";

interface AnimatedCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  imageSrc?: string;
  className?: string;
  onClick?: () => void;
  delay?: number;
  imageReveal?: boolean;
  badge?: string;
  glassType?: "light" | "medium" | "heavy" | "dark";
  hoverType?: "lift" | "glow" | "scale" | "border" | "shine" | "none";
}

const AnimatedCard = ({
  title,
  description,
  icon,
  imageSrc,
  className,
  onClick,
  delay = 0,
  imageReveal = false,
  badge,
  glassType = "medium",
  hoverType = "lift",
}: AnimatedCardProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-500 animate-fade-up",
        glassEffect[glassType],
        hoverType !== "none" && hoverEffect[hoverType],
        onClick && "cursor-pointer",
        className
      )}
      style={delayStyle}
      onClick={onClick}
    >
      {imageSrc && (
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
              imageReveal ? "animate-reveal" : "animate-fade-up"
            )}
            style={{ animationDelay: `${delay + 100}ms` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {badge && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground">
              {badge}
            </div>
          )}
        </div>
      )}
      
      <div className={cn("p-6", imageSrc && "absolute bottom-0 left-0 right-0 text-white")}>
        <div className="mb-4 flex items-center">
          {icon && <div className="mr-3">{icon}</div>}
          <h3 className={cn("font-serif text-xl font-medium", !imageSrc && "text-foreground")}>
            {title}
          </h3>
        </div>
        
        {description && (
          <p className={cn("mt-2 line-clamp-3", !imageSrc && "text-muted-foreground")}>
            {description}
          </p>
        )}
      </div>

      <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default AnimatedCard;
