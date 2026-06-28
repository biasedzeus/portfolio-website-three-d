import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <div className="relative z-20 text-center flex flex-col items-center justify-center min-h-screen px-5 md:px-8">
      {/* Large kinetic headline */}
      <motion.h1
        className="font-serif uppercase font-black italic select-none leading-[0.85] tracking-tighter"
        style={{ fontSize: "clamp(64px, 12vw, 180px)" }}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="block kinetic-text" variants={fadeUp} custom={0}>
          Celestial
        </motion.span>
        <motion.span className="block ml-[10vw] text-on-surface" variants={fadeUp} custom={1}>
          Architect
        </motion.span>
        <motion.span className="block mr-[5vw] kinetic-text" variants={fadeUp} custom={2}>
          Himalaya
        </motion.span>
      </motion.h1>

      {/* Info bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 md:mt-24 w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center md:items-end border-t border-border-muted pt-8 gap-6 md:gap-8"
      >
        <div className="text-center md:text-left">
          <p className="font-label-md uppercase tracking-[0.2em] text-primary text-label-md">
            Based in the Himalayas
          </p>
          <p className="font-label-md uppercase tracking-[0.2em] text-outline text-label-md mt-1">
            Available for Freelance
          </p>
        </div>
        <p className="max-w-md text-center md:text-right font-body text-on-surface-variant text-body-lg leading-relaxed">
          Scaling digital peaks. I architect immersive ecosystems and high-impact
          digital experiences from the roof of the world.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        <span className="font-label-md text-[9px] uppercase tracking-[0.3em] text-outline">
          Scroll to Explore
        </span>
      </motion.div>
    </div>
  );
}
