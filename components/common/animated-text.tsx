"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}: AnimatedTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 0 } : "hidden"}
      animate="visible"
      custom={delay}
      variants={shouldReduceMotion ? undefined : textVariants}
      className={className}
    >
      {children}
    </Component>
  );
};
