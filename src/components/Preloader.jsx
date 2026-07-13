import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Easing simulation: fast at first, decelerating at the end
      let diff = 1;
      if (current < 50) {
        diff = Math.floor(Math.random() * 8) + 5;
      } else if (current < 85) {
        diff = Math.floor(Math.random() * 3) + 1;
      } else if (current < 99) {
        diff = 1;
      }
      
      current = Math.min(100, current + diff);
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 1100);
        }, 400);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 bg-[#000000] z-[9999] flex items-center justify-center pointer-events-auto select-none"
        >
          {/* Naked, premium counter */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: "easeIn" } }}
            className="font-mono text-6xl md:text-7xl font-light text-white tracking-widest text-center"
          >
            {progress}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
