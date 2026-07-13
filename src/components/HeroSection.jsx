import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const titleReveal = {
  hidden: { y: "115%" },
  visible: (i = 0) => ({
    y: "0%",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: i * 0.15 },
  }),
};

export default function HeroSection() {
  return (
    <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-6 md:px-gutter max-w-[1200px] mx-auto w-full pt-20">
      {/* Massive asymmetric unmasking typography */}
      <motion.h1
        className="font-serif uppercase font-extrabold select-none leading-[0.88] tracking-tighter text-left w-full mt-12 md:mt-20"
        style={{ fontSize: "clamp(56px, 12vw, 160px)" }}
        initial="hidden"
        animate="visible"
      >
        <span className="block overflow-hidden relative">
          <motion.span className="block text-on-surface" variants={titleReveal} custom={0}>
            BHANU
          </motion.span>
        </span>
        <span className="block overflow-hidden relative ml-[12vw] sm:ml-[16vw]">
          <motion.span 
            className="block" 
            variants={titleReveal} 
            custom={1}
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)", color: "transparent" }}
          >
            SINGH
          </motion.span>
        </span>
      </motion.h1>

      {/* Editorial Info Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        className="mt-16 md:mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-border-muted pt-10 text-left"
      >
        <div className="space-y-2">
          <p className="font-sans text-[11px] font-semibold text-outline uppercase tracking-wider">
            Location
          </p>
          <p className="font-sans text-[14px] text-on-surface-variant font-medium">
            Himalayas, India
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-sans text-[11px] font-semibold text-outline uppercase tracking-wider">
            Availability
          </p>
          <p className="font-sans text-[14px] text-on-surface-variant font-medium">
            Available for selected roles
          </p>
        </div>
        <div className="space-y-2 col-span-1 md:col-span-1">
          <p className="font-sans text-[11px] font-semibold text-outline uppercase tracking-wider">
            Philosophy
          </p>
          <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed font-normal">
            Developing high-fidelity interactive platforms. Integrating engineering excellence with clean, premium design.
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-gutter flex items-center gap-4 hidden sm:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-outline">
          Scroll to view selected works
        </span>
        <div className="w-8 h-[1px] bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ 
              x: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute left-0 top-0 h-full w-full bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
}
