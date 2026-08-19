import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 56, x: 0 },
    down: { y: -56, x: 0 },
    left: { x: 56, y: 0 },
    right: { x: -56, y: 0 },
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, filter: "blur(8px)", ...directionOffset[direction] }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
