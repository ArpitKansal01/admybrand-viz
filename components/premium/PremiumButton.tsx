"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

interface PremiumButtonProps extends ButtonProps {
  gradient?: boolean;
  glow?: boolean;
}

const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, gradient = false, glow = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "btn-premium",
          gradient && "btn-gradient text-white",
          glow && "shadow-lg hover:shadow-2xl",
          "transition-all duration-300 transform hover:scale-105 active:scale-95",
          className
        )}
        {...props}
      />
    );
  }
);

PremiumButton.displayName = "PremiumButton";

export { PremiumButton };