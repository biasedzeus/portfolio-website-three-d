import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleConnect = () => {
    toast.success("Connection channel open!", {
      icon: "⚡",
      style: {
        background: "#000000",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: "12px",
        borderRadius: "0px",
      },
    });
  };

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Lab", href: "/#experiment" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/80 via-black/45 to-transparent flex justify-between items-center px-8 md:px-12 py-8 z-50 transition-all duration-300"
      >
        <Link to="/" className="font-serif text-[15px] tracking-widest font-extrabold text-white uppercase">
          BHANU SINGH
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Link to="/resume" className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors duration-300">
            Resume
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleConnect}
            className="border border-white/20 text-white px-5 py-2 rounded-none font-sans text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Connect
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white hover:text-outline transition-colors"
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
            className="fixed inset-0 bg-[#000000]/98 backdrop-blur-3xl z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-on-surface hover:text-white transition-colors"
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
                className="font-serif text-3xl font-extrabold tracking-tight text-white hover:text-outline transition-all duration-300 uppercase"
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
                className="font-serif text-3xl font-extrabold tracking-tight text-white hover:text-outline transition-all duration-300 uppercase"
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
