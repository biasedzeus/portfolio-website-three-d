import React from "react";
import { motion } from "framer-motion";
import { portfolioProjects } from "../data/portfolioProjects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest overflow-hidden"
      id="work"
    >
      {/* Section header */}
      <div className="px-5 md:px-gutter mb-12 md:mb-16 flex items-baseline justify-between max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-headline-lg uppercase italic font-black"
        >
          Selected Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-label-md uppercase tracking-[0.3em] text-outline text-label-md"
        >
          {String(portfolioProjects.length).padStart(2, "0")} / 12
        </motion.p>
      </div>

      {/* Horizontal scroll cards */}
      <div className="horizontal-scroll-container px-[5vw] md:px-[10vw] gap-8 md:gap-12 pb-8 md:pb-12 cursor-grab active:cursor-grabbing">
        {portfolioProjects.map((project, i) => (
          <ProjectCard key={project.id + i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
