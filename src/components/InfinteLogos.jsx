import React from "react";

const MARQUEE_TEXT =
  "REACT • NEXT.JS • TYPESCRIPT • REDUX • PROSEMIRROR • AWS • RXJS • NODE.JS • WEBPACK • CI/CD • REST APIs • GRAPHQL • TIPTAP • FORMIK • STYLED-COMPONENTS • SYSTEM DESIGN • ";

export default function Marquee() {
  const block = Array(2).fill(MARQUEE_TEXT).join("");

  return (
    <div className="py-5 md:py-8 bg-white text-black overflow-hidden relative z-20 w-full select-none border-y border-black/5 flex items-center">
      <div className="marquee font-serif text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
        <span className="inline-block pr-4">{block}</span>
        <span className="inline-block pr-4">{block}</span>
      </div>
    </div>
  );
}