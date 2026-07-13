import React from "react";
import { motion } from "framer-motion";

function FloatingInput({ label, type = "text", isTextarea = false }) {
  const InputEl = isTextarea ? "textarea" : "input";

  return (
    <div className="relative group">
      <InputEl
        type={type}
        rows={isTextarea ? 3 : undefined}
        placeholder=" "
        className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:border-white focus:outline-none font-sans text-[15px] text-white transition-all placeholder-transparent resize-none"
      />
      <label className="absolute left-0 top-4 text-outline font-sans text-[11px] font-semibold uppercase tracking-wider pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-3">
        {label}
      </label>
    </div>
  );
}

export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className="py-24 md:py-40 relative bg-transparent overflow-hidden"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-gutter grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left Column: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2
              className="font-serif leading-[0.9] uppercase font-extrabold text-white mb-12 md:mb-16 select-none"
              style={{ fontSize: "clamp(56px, 8vw, 120px)" }}
            >
              BESPOKE <br />
              BUILD.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <span className="block font-sans text-[11px] font-semibold text-outline uppercase tracking-wider">
                Contact
              </span>
              <a
                href="mailto:bhanusinghwebdev@gmail.com"
                className="group flex items-center gap-4 font-serif text-3xl font-extrabold text-on-surface-variant hover:text-white transition-colors duration-300"
              >
                bhanusinghwebdev@gmail.com
                <span className="material-symbols-outlined text-outline group-hover:text-white group-hover:translate-x-4 transition-all duration-300">
                  arrow_right_alt
                </span>
              </a>
            </div>

            <div className="flex flex-wrap gap-8 border-t border-border-muted/20 pt-8 mt-12">
              {[
                { name: "LinkedIn", url: "https://in.linkedin.com/" },
                { name: "AngelList", url: "https://angel.co/u/bhanu-pratap-singh-chauhan-2" },
                { name: "GitHub", url: "https://github.com/biasedzeus" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="p-0 flex flex-col justify-between"
        >
          <form className="space-y-12" onSubmit={handleSubmit}>
            <FloatingInput label="Your Name" />
            <FloatingInput label="Your Email" type="email" />
            <FloatingInput label="Project Brief" isTextarea />
            
            <button
              type="submit"
              className="w-full bg-white text-black py-5 rounded-none font-sans text-[12px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all duration-300 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
