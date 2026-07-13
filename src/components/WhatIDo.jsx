import React from "react";
import { motion } from "framer-motion";

const EXPERIMENTS = [
  {
    title: "Volumetric Mist",
    desc: "A WebGL exploration of raymarching, fog interpolation, and noise displacement.",
    span: "md:col-span-2",
  },
  {
    title: "Terrain Morph",
    desc: "Dynamic vertex shader mountain range deformation reacting to sound amplitude.",
    span: "",
  },
  {
    title: "Snow Shaders",
    desc: "Custom GPU instanced particle simulation with gravity vectors and wind drift.",
    span: "",
  },
  {
    title: "Summit Type",
    desc: "Interactive kinetic typography rendering 3D letters influenced by elevation maps.",
    span: "md:col-span-2",
  },
];

function ExperimentCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
      className={`py-8 border-t border-border-muted/20 flex flex-col justify-between min-h-[200px] ${item.span}`}
    >
      <div>
        <span className="font-mono text-[11px] text-outline">
          0{index + 1}
        </span>
        <h4 className="font-serif text-2xl text-white uppercase font-extrabold mt-4 leading-none">
          {item.title}
        </h4>
        <p className="text-on-surface-variant mt-4 font-sans text-[14px] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhatIDo() {
  return (
    <section className="py-24 md:py-40 bg-transparent" id="experiment">
      <div className="max-w-[1200px] mx-auto px-6 md:px-gutter">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl uppercase font-extrabold text-white"
            >
              Laboratory
            </motion.h2>
            <p className="font-sans text-[15px] text-on-surface-variant max-w-md mt-4 leading-relaxed">
              Active prototypes in shader mathematics, WebGL rendering, and kinetic interfaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-2">
          {EXPERIMENTS.map((item, i) => (
            <ExperimentCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
