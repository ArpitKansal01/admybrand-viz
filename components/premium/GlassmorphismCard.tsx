"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

// ✅ Define CardProps manually, since it's not exported from shadcn/ui
type CardProps = ComponentPropsWithoutRef<typeof Card>;

interface GlassmorphismCardProps extends CardProps {
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: "low" | "medium" | "high";
}

const GlassmorphismCard = forwardRef<HTMLDivElement, GlassmorphismCardProps>(
  ({ className, blur = "md", opacity = "medium", ...props }, ref) => {
    const blurClasses = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    };

    const opacityClasses = {
      low: "bg-white/30",
      medium: "bg-white/50",
      high: "bg-white/70",
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "border border-white/30 shadow-xl",
          blurClasses[blur],
          opacityClasses[opacity],
          "hover:bg-white/60 transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);

GlassmorphismCard.displayName = "GlassmorphismCard";

export { GlassmorphismCard };
