import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete, mountainsReady }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Determine console boot text based on load percentage
  const getStatusText = () => {
    if (progress < 25) return "CALIBRATING ALTITUDE VECTORS";
    if (progress < 55) return "SEEDING MOUNTAIN SHADERS";
    if (progress < 80) return "INJECTING ATMOSPHERIC HAZE";
    if (progress < 99) return "INITIALIZING CELESTIAL CANVAS";
    if (progress === 99 && !mountainsReady) return "AWAITING WEBGL BUFFER SWAP";
    return "CELESTIAL SYSTEM STABLE";
  };

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      let diff = 1;
      if (current < 50) {
        diff = Math.floor(Math.random() * 8) + 6;
      } else if (current < 85) {
        diff = Math.floor(Math.random() * 3) + 1;
      } else if (current < 99) {
        diff = 1;
      }

      // Hold at 99% if mountains are not yet compiled and ready
      if (current === 99 && !mountainsReady) {
        return;
      }

      current = Math.min(100, current + diff);
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 1100);
        }, 500);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete, mountainsReady]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center pointer-events-auto select-none"
        >
          {/* Aesthetic Console Loader Layout */}
          <div className="flex flex-col items-center max-w-sm w-full px-6">
            {/* Status text */}
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase text-center mb-3">
              {getStatusText()}
            </span>

            {/* Percentage counter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-3xl font-light text-white tracking-[0.15em] text-center"
            >
              {progress}%
            </motion.div>

            {/* Horizontal progress bar */}
            <div className="w-[180px] h-[1px] bg-white/10 relative overflow-hidden mt-6">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
