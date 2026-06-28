import React from "react";
import { motion } from "framer-motion";

function FloatingInput({ label, type = "text", isTextarea = false }) {
  const InputEl = isTextarea ? "textarea" : "input";

  return (
    <div className="relative group">
      <InputEl
        type={type}
        rows={isTextarea ? 1 : undefined}
        placeholder=" "
        className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:border-primary focus:outline-none font-serif text-headline-sm italic transition-all placeholder-transparent resize-none"
      />
      <label className="absolute left-0 top-4 text-outline font-label-md uppercase tracking-[0.2em] text-label-md pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6">
        {label}
      </label>
    </div>
  );
}

export default function ContactMe() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-gutter grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left: CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-serif leading-[0.8] uppercase font-black italic mb-12 md:mb-16 select-none"
            style={{ fontSize: "clamp(64px, 9vw, 140px)" }}
          >
            Reach <br />
            The <br />
            Peak.
          </h2>

          <div className="space-y-6">
            <a
              href="mailto:hello@bhanu.dev"
              className="group flex items-center gap-4 font-serif text-headline-sm italic hover:text-primary transition-colors"
            >
              hello@bhanu.dev
              <span className="material-symbols-outlined group-hover:translate-x-4 transition-transform">
                east
              </span>
            </a>

            <div className="flex flex-wrap gap-6 md:gap-8 mt-10 md:mt-16">
              {["LinkedIn", "Twitter", "GitHub"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-label-md uppercase tracking-[0.3em] text-on-surface-variant hover:text-primary transition-colors text-label-md"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 md:p-14 rounded-2xl shadow-2xl"
        >
          <form className="space-y-10 md:space-y-14">
            <FloatingInput label="Mission Name" />
            <FloatingInput label="Signal Path (Email)" type="email" />
            <FloatingInput label="The Brief" isTextarea />
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-6 md:py-8 rounded-full font-label-md uppercase tracking-[0.4em] font-black text-lg md:text-xl shadow-2xl shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Initiate Connection
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
