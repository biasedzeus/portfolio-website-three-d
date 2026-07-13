import React from "react";
import { motion } from "framer-motion";
import { GoLogoGithub } from "react-icons/go";
import { SiLinkedin, SiAngellist } from "react-icons/si";
import { AiFillPrinter, AiOutlineMail } from "react-icons/ai";
import Education from "./Education";
import resumepdf from "../assets/resumefrontend.pdf";

const SKILLS_CATEGORIES = [
  {
    category: "Languages & Frameworks",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "ReactJS", "Next.js", "Redux", "Redux Toolkit"],
  },
  {
    category: "Libraries & Tools",
    skills: ["Jest", "Vitest", "React Query", "RxJS", "Formik", "Yup", "Styled-components", "Grommet", "React Flow", "Tiptap", "Axios", "Webpack", "Babel", "Git"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (Amplify, S3, CloudFront, CodeArtifact)"],
  },
  {
    category: "Core Competencies",
    skills: ["Frontend Architecture", "State Management", "Performance Optimization", "Responsive Design", "API Integration", "Component Library Dev", "Code Reviews", "Agile Development"],
  },
];

const portfolioProjects = [
  {
    title: "GraniteStack",
    dates: "Oct 2022 - Jan 2025",
    role: "Software Engineer",
    bullets: [
      "Engineered a dynamic form rendering engine that automatically converted SQL schemas into fully validated interfaces using Formik and Yup.",
      "Optimized rendering performance and state management across the platform by leveraging advanced React Hooks, Redux, and RxJS.",
      "Delivered complex custom features and drove frontend R&D, significantly improving system scalability and development velocity.",
      "Executed critical technical platform enhancements that served as key differentiators, directly contributing to the acquisition of 3 new clients."
    ],
    techUsed: ["React", "Redux", "TypeScript", "ReactFlow", "Formik", "RxJS", "Yup", "Grommet", "Styled-components", "AWS"],
  },
  {
    title: "Granite",
    dates: "Oct 2022 - Jan 2025",
    role: "Software Engineer",
    bullets: [
      "Led R&D and architectural design for a scalable in-house business systems module and Maintained core platform stability (Granite) across multiple projects, resolving complex technical challenges with highly scalable solutions."
    ],
    techUsed: ["React", "Redux", "TypeScript", "AWS", "Styled-components"],
  },
];

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 pb-24 px-6 md:px-gutter max-w-[1000px] mx-auto w-full relative z-20 text-left bg-[#000000]"
    >
      {/* Header Info */}
      <div className="border-b border-border-muted/20 pb-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <span className="font-sans text-xs font-semibold text-outline uppercase tracking-wider">
              Resume
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-white font-extrabold uppercase leading-tight tracking-tight">
              BHANU PRATAP SINGH CHAUHAN
            </h1>
            <p className="font-sans text-[14px] text-on-surface-variant font-medium">
              Senior Software Engineer
            </p>
          </div>

          <a
            href={resumepdf}
            download
            className="flex items-center gap-3 border border-white/20 hover:border-white text-white hover:text-black hover:bg-white px-5 py-3 rounded-none font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            <AiFillPrinter size="1.2rem" />
            Download PDF
          </a>
        </div>

        {/* Contact Info & Channels */}
        <div className="flex flex-wrap gap-8 pt-8 mt-4">
          <a
            href="mailto:bhanusinghwebdev@gmail.com"
            className="flex items-center gap-2 font-sans text-xs font-semibold text-on-surface-variant hover:text-white transition-colors uppercase tracking-wider"
          >
            <AiOutlineMail size="1.1rem" />
            bhanusinghwebdev@gmail.com
          </a>
          <a
            href="https://github.com/biasedzeus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-xs font-semibold text-on-surface-variant hover:text-white transition-colors uppercase tracking-wider"
          >
            <GoLogoGithub size="1.1rem" />
            GitHub
          </a>
          <a
            href="https://in.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-xs font-semibold text-on-surface-variant hover:text-white transition-colors uppercase tracking-wider"
          >
            <SiLinkedin size="1.0rem" />
            LinkedIn
          </a>
          <a
            href="https://angel.co/u/bhanu-pratap-singh-chauhan-2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-xs font-semibold text-on-surface-variant hover:text-white transition-colors uppercase tracking-wider"
          >
            <SiAngellist size="1.0rem" />
            AngelList
          </a>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="space-y-16">
        
        {/* Section 01: Core Philosophy */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-outline font-medium">01</span>
            <h2 className="font-serif text-2xl text-white uppercase font-extrabold tracking-tight">Objective</h2>
          </div>
          <p className="font-sans text-[15px] text-on-surface-variant leading-relaxed font-normal max-w-2xl">
            To collaborate with elite engineering and creative teams, building robust web applications that merge high performance with exceptional design standards.
          </p>
        </section>

        {/* Section 02: Core Competencies */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-outline font-medium">02</span>
            <h2 className="font-serif text-2xl text-white uppercase font-extrabold tracking-tight">Inventory</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {SKILLS_CATEGORIES.map((cat) => (
              <div key={cat.category} className="space-y-4">
                <h3 className="font-sans text-xs font-semibold text-outline uppercase tracking-wider">
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="font-sans text-[14px] text-on-surface-variant">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 03: Professional Experience */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-outline font-medium">03</span>
            <h2 className="font-serif text-2xl text-white uppercase font-extrabold tracking-tight">Experience</h2>
          </div>
          
          <div className="space-y-12">
            {/* Role 1 */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-white font-extrabold uppercase">
                    Senior Software Engineer
                  </h3>
                  <p className="font-sans text-[13px] text-outline font-semibold">
                    Radiansys Inc (Vfx AI) — Gurgaon, Haryana
                  </p>
                </div>
                <span className="font-sans text-[13px] font-semibold text-outline uppercase tracking-wider">
                  Jan 2025 - Present
                </span>
              </div>
              <ul className="space-y-2 list-disc list-outside pl-4 text-on-surface-variant font-sans text-[15px] leading-relaxed">
                <li>Worked across multiple large-scale React and Next.js applications, owning architecture-heavy features and solving performance-sensitive problems end-to-end.</li>
                <li>Partnered closely with backend, design, and PM teams to deliver features efficiently and improve development workflows across the engineering team.</li>
                <li>Strengthened reliability across projects through reusable components, predictable patterns, and consistent testing practice.</li>
                <li>Led a team of 6 engineers to architect and develop the frontend platform for a new AI-driven enterprise product, overseeing the end-to-end technical strategy and delivery.</li>
                <li>Engineered a robust frontend workflow system featuring a dynamic form renderer, optimizing on-the-fly data processing and complex state management.</li>
                <li>Owned a critical shared package serving 2,000+ live clients, spearheading performance optimizations, standardizing cross-team consistency, and elevating overall Developer Experience (DX).</li>
                <li>Developed complex core rich-text editor components from the ground up, leveraging ProseMirror and Tiptap to enhance internal UI libraries.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-white font-extrabold uppercase">
                    Software Engineer
                  </h3>
                  <p className="font-sans text-[13px] text-outline font-semibold">
                    GraniteStack
                  </p>
                </div>
                <span className="font-sans text-[13px] font-semibold text-outline uppercase tracking-wider">
                  Oct 2022 - Jan 2025
                </span>
              </div>
              <ul className="space-y-2 list-disc list-outside pl-4 text-on-surface-variant font-sans text-[15px] leading-relaxed">
                <li>Delivered impactful features as a key member of the core product team, ensuring seamless functionality for end users.</li>
                <li>Addressed technical debt to maintain scalability and performance.</li>
                <li>Improved legacy code quality with custom hooks and reusable components.</li>
                <li>Mentored junior team members, promoting collaboration and best practices.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 04: Projects Breakdown */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-outline font-medium">04</span>
            <h2 className="font-serif text-2xl text-white uppercase font-extrabold tracking-tight">Projects</h2>
          </div>
          
          <div className="space-y-12">
            {portfolioProjects.map((project, idx) => (
              <div key={project.title + idx} className="border-t border-border-muted/20 pt-6 space-y-4 relative group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-white font-extrabold uppercase">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[13px] text-outline font-medium">
                      {project.role}
                    </p>
                  </div>
                  <span className="font-sans text-[13px] font-semibold text-outline uppercase tracking-wider">
                    {project.dates}
                  </span>
                </div>
                
                <ul className="space-y-2 list-disc list-outside pl-4 text-on-surface-variant font-sans text-[15px] leading-relaxed">
                  {project.bullets.map((bullet, bidx) => (
                    <li key={bidx}>{bullet}</li>
                  ))}
                </ul>

                <div className="font-sans text-[13px] font-medium text-outline pt-1 tracking-wide">
                  Tech Stack: {project.techUsed.join("  /  ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 05: Education Blueprint */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-outline font-medium">05</span>
            <h2 className="font-serif text-2xl text-white uppercase font-extrabold tracking-tight">Education</h2>
          </div>
          <Education />
        </section>

      </div>
    </motion.div>
  );
}
