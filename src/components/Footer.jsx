import React from "react";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/biasedzeus" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bhanu-singh107/" },
  { name: "AngelList", href: "https://angel.co/u/bhanu-pratap-singh-chauhan-2" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-transparent mt-24 md:mt-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-gutter py-16 flex flex-col items-center text-center">
        {/* Giant ghost text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.18 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-serif font-black select-none pointer-events-none mb-12 md:mb-16 text-white leading-none uppercase"
          style={{ fontSize: "clamp(48px, 12vw, 160px)" }}
        >
          BHANU SINGH
        </motion.div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 pt-12">
          <p className="font-sans text-[12px] font-medium text-outline uppercase tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} BHANU SINGH — SENIOR SOFTWARE ENGINEER
          </p>
          <div className="flex gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-muted hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
