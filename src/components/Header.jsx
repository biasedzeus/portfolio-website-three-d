import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleConnect = () => {
    toast.success("Connection request initiated!", {
      icon: "👋",
      style: {
        background: "#1f1f24",
        color: "#e4e1e8",
        border: "1px solid rgba(144, 143, 161, 0.2)",
      },
    });
  };

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Experiment", href: "#experiment" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] rounded-full bg-glass-surface backdrop-blur-xl border border-border-muted shadow-2xl flex justify-between items-center px-8 py-4 z-50 hover:scale-[1.01] transition-all duration-300"
      >
        <a href="#" className="font-serif text-2xl italic tracking-tighter text-on-surface">
          BHANU SINGH
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300 pb-1"
            >
              {link.name}
            </a>
          ))}
          <Link to="/resume" className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300 pb-1">
            Resume
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleConnect}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-xs uppercase tracking-[0.15em] hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Connect
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-primary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">menu_open</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-5xl">close</span>
            </button>
            {navLinks.map((link) => (
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl italic tracking-tighter text-on-surface hover:text-primary transition-all duration-300 uppercase"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl italic tracking-tighter text-on-surface hover:text-primary transition-all duration-300 uppercase"
              >
                Resume
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
