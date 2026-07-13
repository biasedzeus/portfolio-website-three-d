import "./index.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import HomePage from "./components/HomePage";

import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import LoadingSkeleton from "./components/LoadingSkeleton";

const Resume = lazy(() => import("./components/Resume"));

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "unset";

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#000000] text-on-surface font-sans selection:bg-primary selection:text-on-primary">
      {/* Grain overlay */}
      <div className="grain" />

      {/* Center Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && <Header />}

      {/* Background Layer */}
      {!loading && <HomePage />}

      {/* Content Layer */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Suspense>
        </AnimatePresence>

        {!loading && <Footer />}
      </div>
    </div>
  );
}
