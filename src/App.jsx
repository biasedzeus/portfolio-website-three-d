import "./index.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingSkeleton from "./components/LoadingSkeleton";

const Resume = lazy(() => import("./components/Resume"));

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary selection:text-on-primary">
      {/* Grain overlay */}
      <div className="grain" />

      <Header />

      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
