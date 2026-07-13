import React from "react";

const MARQUEE_TEXT =
  "SCALING PEAKS • ARCHITECTING FUTURES • HIMALAYAN DESIGN • CELESTIAL CODE • ";

export default function Marquee() {
  const block = Array(4).fill(MARQUEE_TEXT).join("");

  return (
    <div className="py-5 md:py-8 bg-white text-black overflow-hidden relative z-20 w-full select-none border-y border-black/5 flex items-center">
      <div className="marquee font-serif text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
        <span className="inline-block pr-4">{block}</span>
        <span className="inline-block pr-4">{block}</span>
      </div>
    </div>
  );
}