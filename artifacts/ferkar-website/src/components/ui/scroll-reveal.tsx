import { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -18]);

  const directionOffset = {
    up: { y: 56, x: 0 },
    down: { y: -56, x: 0 },
    left: { x: 56, y: 0 },
    right: { x: -56, y: 0 },
  };

  return (
    <motion.div
      ref={revealRef}
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
      <motion.div style={prefersReducedMotion ? undefined : { y: parallaxY }}>
        {children}
      </motion.div>
    </motion.div>
  );
};
