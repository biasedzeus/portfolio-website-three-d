import React from "react";
import { motion } from "framer-motion";

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const SKILLS = [
  "UX / Systems Architecture",
  "WebGL / Shaders / Three.js",
  "Creative Motion & Micro-interactions",
  "Fullstack System Design & Integration",
];

export default function AboutMe() {
  return (
    <section
      className="py-24 md:py-40 max-w-[1200px] mx-auto px-6 md:px-gutter grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start bg-transparent"
      id="about"
    >
      {/* Left Column: Philosophy Panel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textReveal}
        className="md:col-span-5 space-y-6"
      >
        <p className="font-serif text-3.5xl md:text-4xl leading-tight font-extrabold text-white">
          "I merge engineering precision with creative integrity."
        </p>
        <p className="font-sans text-[15px] text-on-surface-variant leading-relaxed font-normal">
          Drawing inspiration from the architectural scale and quiet depth of the Himalayas, I treat front-end applications as digital monuments: structures built to be interactive, visually stunning, and architecturally sound.
        </p>
      </motion.div>

      {/* Right Column: Profile details + Stats */}
      <div className="md:col-span-7 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textReveal}
          className="space-y-6"
        >
          <p className="font-sans text-[13px] font-semibold text-outline uppercase tracking-wider">
            Introduction
          </p>
          <h2
            className="font-serif leading-[1.1] font-extrabold text-white"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Constructing digital interfaces with a focus on details and <span className="italic underline decoration-white/30">motion</span>.
          </h2>
        </motion.div>

        {/* Technical Competencies */}
        <div className="space-y-6">
          <p className="font-sans text-[13px] font-semibold text-outline uppercase tracking-wider">
            Expertise
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {SKILLS.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="font-sans text-[15px] text-on-surface-variant py-2 border-b border-border-muted/15"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
          className="grid grid-cols-2 gap-8 border-t border-border-muted pt-10"
        >
          <div className="space-y-1">
            <span className="block font-serif text-5xl md:text-6xl text-white font-extrabold">
              05+
            </span>
            <span className="font-sans text-[13px] font-semibold text-outline uppercase tracking-wider">
              Years Experience
            </span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-5xl md:text-6xl text-white font-extrabold">
              20+
            </span>
            <span className="font-sans text-[13px] font-semibold text-outline uppercase tracking-wider">
              Shipped Platforms
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}