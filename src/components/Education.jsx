import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Institute of Technology And Management, Gwalior",
    degree: "Bachelor of Technology",
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    score: "CGPA 7.5",
    year: "2021",
  },
  {
    institution: "Greenfield Higher Secondary School, Gwalior",
    degree: "Class XII (High School)",
    university: "Madhya Pradesh Board Of Secondary Education",
    score: "78 %",
    year: "2016",
  },
  {
    institution: "Miss Hill Higher Secondary School, Gwalior",
    degree: "Class X (Matriculation)",
    university: "Madhya Pradesh Board Of Secondary Education",
    score: "82 %",
    year: "2014",
  },
];

export default function Education() {
  return (
    <div className="space-y-4">
      {educationData.map((edu, idx) => (
        <motion.div
          key={edu.degree}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
          className="border-t border-border-muted/20 py-6 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4"
        >
          <div>
            <h3 className="font-serif text-lg md:text-xl text-white font-extrabold uppercase tracking-tight">
              {edu.institution}
            </h3>
            <p className="font-sans text-[13px] text-on-surface-variant mt-1 font-normal leading-relaxed">
              {edu.degree} <span className="text-on-surface-muted/60">—</span> <span className="text-on-surface-muted">{edu.university}</span>
            </p>
          </div>
          <div className="flex gap-4 shrink-0 font-sans text-[12px] font-semibold text-outline uppercase tracking-wider">
            <span>{edu.score}</span>
            <span className="text-outline/40">/</span>
            <span>{edu.year}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
