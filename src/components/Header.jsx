import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#top", action: scrollToTop },
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
        <button onClick={scrollToTop} className="font-serif text-[15px] tracking-widest font-extrabold text-white uppercase cursor-pointer bg-transparent border-none">
          BHANU SINGH
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.action ? (
              <button
                key={link.name}
                onClick={link.action}
                className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            )
          ))}
          <Link to="/resume" className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors duration-300">
            Resume
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:bhanusinghwebdev@gmail.com"
            className="bg-white text-black px-5 py-2 rounded-none font-sans text-xs font-bold uppercase tracking-wider hover:bg-white/85 transition-all duration-300 flex items-center justify-center"
          >
            Connect
          </a>
          
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
              link.action ? (
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  key={link.name}
                  onClick={() => { link.action(); setIsOpen(false); }}
                  className="font-serif text-3xl font-extrabold tracking-tight text-white hover:text-outline transition-all duration-300 uppercase bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </motion.button>
              ) : (
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
              )
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
