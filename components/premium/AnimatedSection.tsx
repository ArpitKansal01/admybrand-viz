"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = "up",
  className = ""
}: AnimatedSectionProps) => {
  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionMap[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedSection };