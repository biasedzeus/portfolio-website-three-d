import React, { lazy, Suspense } from "react";
import HeroSection from "./HeroSection";
import LoadingSkeleton from "./LoadingSkeleton";

const Marquee = lazy(() => import("./InfinteLogos"));
const Projects = lazy(() => import("./Projects"));
const AboutMe = lazy(() => import("./AboutMe"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const ContactMe = lazy(() => import("./ContactMe"));

export default function Home() {
  return (
    <>
      {/* Hero: text overlay */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-background/20 to-background pointer-events-none" />
        <HeroSection />
      </header>

      {/* Sections */}
      <Suspense fallback={<LoadingSkeleton />}>
        <Projects />
        <Marquee />
        <AboutMe />
        <WhatIDo />
        <ContactMe />
      </Suspense>
    </>
  );
}
