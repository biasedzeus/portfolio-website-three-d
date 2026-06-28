import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setTransform(
      `perspective(1000px) rotateY(${(x - 0.5) * 6}deg) rotateX(${(y - 0.5) * -6}deg) scale(1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)");
  };

  const techLabel = project.techUsed?.length
    ? project.techUsed.join(" • ")
    : "React";

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="scroll-item group relative aspect-[16/10] overflow-hidden glass-panel rounded-xl cursor-pointer transition-transform duration-300"
    >
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${project.imgURL})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
        <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-caption uppercase font-bold tracking-[0.2em] mb-3 inline-block">
          {techLabel}
        </span>
        <h3 className="font-serif text-headline-lg-mobile text-white uppercase italic tracking-tighter">
          {project.title}
        </h3>
      </div>

      {/* Arrow icon */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="material-symbols-outlined text-white text-[48px] md:text-[64px]">
          north_east
        </span>
      </div>
    </motion.article>
  );
}
