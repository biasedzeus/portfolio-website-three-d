import React from "react";
import { motion } from "framer-motion";

const EXPERIMENTS = [
  {
    title: "Volumetric Mist",
    desc: "A WebGL exploration of raymarching and mountain noise textures.",
    icon: null,
    span: "md:col-span-2 md:row-span-2",
    accent: true,
    progress: 33,
  },
  {
    title: "Terrain Morph",
    desc: null,
    icon: "landscape",
    span: "",
    accent: false,
  },
  {
    title: "Snow Shaders",
    desc: null,
    icon: "ac_unit",
    span: "",
    accent: false,
  },
  {
    title: "Summit Type",
    desc: "Interactive kinetic typography responding to altitude data.",
    icon: null,
    span: "md:col-span-2",
    accent: false,
  },
];

function ExperimentCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-panel p-8 md:p-10 hover:bg-surface-container-high transition-all group ${item.span} ${
        item.accent ? "border-l-4 border-l-primary flex flex-col justify-between min-h-[300px] md:min-h-[450px]" : ""
      }`}
    >
      {item.icon && (
        <span className="material-symbols-outlined text-primary text-[48px] group-hover:scale-110 transition-transform">
          {item.icon}
        </span>
      )}
      <div>
        <h4 className="font-serif text-headline-sm text-white uppercase italic font-bold mt-4 md:mt-6">
          {item.title}
        </h4>
        {item.desc && (
          <p className="text-on-surface-variant mt-3 md:mt-4 font-body text-body-md">
            {item.desc}
          </p>
        )}
      </div>
      {item.progress != null && (
        <div className="w-full h-1 bg-border-muted rounded-full overflow-hidden mt-6">
          <div className="h-full bg-primary" style={{ width: `${item.progress}%` }} />
        </div>
      )}
    </motion.div>
  );
}

export default function WhatIDo() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low" id="experiment">
      <div className="max-w-[1200px] mx-auto px-5 md:px-gutter">
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-headline-lg uppercase italic font-black"
          >
            Laboratory
          </motion.h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-lg mt-4">
            R&amp;D experiments in shader mathematics and interactive topography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {EXPERIMENTS.map((item, i) => (
            <ExperimentCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
