import React from "react";

const MARQUEE_TEXT =
  "SCALING PEAKS • ARCHITECTING FUTURES • HIMALAYAN DESIGN • CELESTIAL CODE • SCALING PEAKS • ARCHITECTING FUTURES • HIMALAYAN DESIGN • CELESTIAL CODE • ";

export default function Marquee() {
  return (
    <div className="py-16 bg-primary overflow-hidden">
      <div className="marquee font-serif text-headline-md uppercase text-on-primary font-black italic tracking-tighter">
        {MARQUEE_TEXT}
      </div>
    </div>
  );
}