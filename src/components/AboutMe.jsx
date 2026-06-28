import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SKILLS = [
  "UX Architecture",
  "WebGL / Three.js",
  "Motion Design",
  "Brand Strategy",
];

export default function AboutMe() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop max-w-[1200px] mx-auto px-5 md:px-gutter grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center"
      id="about"
    >
      {/* Left: Philosophy card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="md:col-span-5 glass-panel p-8 md:p-10 rounded-2xl space-y-8"
      >
        <p className="font-serif text-headline-sm leading-[1.1] font-black italic text-white">
          "I build bridges between monumental scale and human nuance."
        </p>
        <div className="w-20 h-[2px] bg-primary" />
        <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
          My work is a synergy of technical mastery and the vast, quiet
          inspiration of the Himalayan landscape. I don't just build
          websites; I construct digital monuments that endure.
        </p>
      </motion.div>

      {/* Right: About text + Stats */}
      <div className="md:col-span-7 space-y-12">
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif italic leading-[1.1] font-bold"
          style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
        >
          I architect immersive digital ecosystems from the heart of the{" "}
          <span className="text-primary">mountains</span>.
        </motion.h2>

        {/* Skills list */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {SKILLS.map((skill, i) => (
            <motion.li
              key={skill}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.1, duration: 0.5 },
                },
              }}
              className="flex items-center gap-4 font-sans text-xl md:text-2xl font-bold uppercase tracking-tight text-on-surface"
            >
              <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex gap-12 md:gap-16 border-t border-border-muted pt-8 md:pt-10"
        >
          <div>
            <span className="block font-serif text-headline-md text-primary italic font-black">
              05+
            </span>
            <span className="font-label-md uppercase tracking-[0.2em] text-outline text-label-md">
              Years Scaling
            </span>
          </div>
          <div>
            <span className="block font-serif text-headline-md text-primary italic font-black">
              40+
            </span>
            <span className="font-label-md uppercase tracking-[0.2em] text-outline text-label-md">
              Summits Reached
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}