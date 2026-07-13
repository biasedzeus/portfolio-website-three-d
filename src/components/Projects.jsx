import React from "react";
import { motion } from "framer-motion";
import { portfolioProjects } from "../data/portfolioProjects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="py-24 md:py-40 bg-transparent overflow-hidden"
      id="work"
    >
      {/* Section header with high contrast and extreme whitespace spacing */}
      <div className="px-6 md:px-gutter mb-16 md:mb-24 flex items-baseline justify-between max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif text-5xl md:text-7xl uppercase font-extrabold tracking-tight text-white"
        >
          Selected Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-sans text-[11px] font-semibold text-outline uppercase tracking-wider"
        >
          Index ({portfolioProjects.length})
        </motion.p>
      </div>

      {/* Asymmetric Bento CSS Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-[1200px] mx-auto px-6 md:px-gutter">
        {portfolioProjects.map((project, i) => (
          <ProjectCard key={project.id + i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
