import React from "react";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/biasedzeus" },
  { name: "LinkedIn", href: "https://linkedin.com/in/bhanu-singh-ab09a0250" },
  { name: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-border-muted pt-section-gap-mobile md:pt-section-gap-desktop">
      <div className="max-w-7xl mx-auto px-5 md:px-gutter py-12 flex flex-col items-center text-center">
        {/* Giant ghost text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-serif font-black italic select-none pointer-events-none mb-12 md:mb-16 text-on-surface leading-none uppercase"
          style={{ fontSize: "clamp(60px, 18vw, 300px)" }}
        >
          HIMALAYA
        </motion.div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 border-t border-border-muted pt-12 md:pt-16">
          <p className="font-label-md text-on-surface-muted uppercase tracking-[0.1em] text-label-md text-center md:text-left">
            © {new Date().getFullYear()} CELESTIAL ARCHITECT — BORN IN THE MOUNTAINS
          </p>
          <div className="flex gap-8 md:gap-10">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-md uppercase text-on-surface-muted hover:text-primary transition-all duration-700 hover:tracking-[0.2em] text-label-md"
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
