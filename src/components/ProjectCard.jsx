import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const getColSpanClass = (index) => {
  const spans = [
    "md:col-span-8 aspect-[16/10]",
    "md:col-span-4 aspect-[4/3] md:aspect-auto md:h-full",
    "md:col-span-12 aspect-[21/9] md:aspect-auto md:h-[450px]"
  ];
  return spans[index % spans.length];
};

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
      `perspective(1000px) rotateY(${(x - 0.5) * 5}deg) rotateX(${(y - 0.5) * -5}deg) scale(1.01)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)");
  };

  return (
    <motion.a
      href={project.site_URL || project.github_URL || "#"}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`group relative overflow-hidden glass-panel rounded-2xl block border border-border-muted/30 hover:border-primary/45 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition-all duration-500 bg-[#0c0c0e]/30 backdrop-blur-md ${getColSpanClass(index)}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-[0.9]"
        style={{ backgroundImage: `url(${project.imgURL})` }}
      />
      {/* Cinematic Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-85" />
      
      {/* Glow overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-10 flex flex-col items-start">
        <div className="font-sans text-[12px] font-medium text-outline mb-3 tracking-wide">
          {project.techUsed.join("  /  ")}
        </div>
        <h3 className="font-serif text-3xl md:text-4xl text-white uppercase font-extrabold tracking-tight mb-2 leading-none transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-sans text-[14px] md:text-[14px] text-on-surface-muted max-w-lg leading-relaxed line-clamp-3 md:line-clamp-none opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
          {project.description}
        </p>
      </div>

      {/* Arrow Icon Reveal */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
        <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
          arrow_outward
        </span>
      </div>
    </motion.a>
  );
}
