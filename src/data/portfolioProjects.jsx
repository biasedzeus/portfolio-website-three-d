import vfxaiImg from "../assets/vfxai.png";
import granitestackImg from "../assets/granitestack.png";
import gethiredImg from "../assets/gethired.png";

export const portfolioProjects = [
  {
    id: "vfxai",
    order: 1,
    title: "VFX AI",
    site_URL: "https://www.vfxai.com/",
    github_URL: "",
    imgURL: vfxaiImg,
    features: [
      "AI Video Editor and VFX OS for media creators featuring VideoGPT conversational editing.",
      "Led a team of 6 engineers to architect and build the frontend platform and rich-text editing engine.",
      "Developed complex, core rich-text editor components from the ground up using ProseMirror and Tiptap.",
      "Integrated auto-caption engines, AI reframing utilities, and cross-platform publishing systems."
    ],
    description:
      "An AI-native video automation platform for media creators and enterprises, enabling chat-driven editing, automated reframing, and AI B-roll generation.",
    techUsed: ["Next.js", "React", "TypeScript", "ProseMirror", "Tiptap", "Framer Motion", "Tailwind CSS"],
    dates: "Jan 2025 - Present",
  },
  {
    id: "granitestack",
    order: 2,
    title: "GraniteStack",
    site_URL: "https://www.granitestack.com/",
    github_URL: "",
    imgURL: granitestackImg,
    features: [
      "No-code & low-code SaaS platform builder transforming manual workflows into scalable products.",
      "Engineered a dynamic form rendering engine converting SQL schemas into fully validated React forms.",
      "Optimized multi-tenant state management and rendering speed using React Hooks, Redux, and RxJS.",
      "Integrated ReactFlow node visual workspaces to map database structures and business logic."
    ],
    description:
      "An award-winning enterprise platform builder that turns manual workflows into production-ready software systems with advanced visual workspaces and dynamic form rendering.",
    techUsed: ["React", "TypeScript", "ReactFlow", "Redux", "RxJS", "Formik", "Yup", "AWS"],
    dates: "Oct 2022 - Jan 2025",
  },
  {
    id: "gethired",
    order: 3,
    title: "GetHired (In Progress)",
    site_URL: "https://get-hired-next.vercel.app/",
    github_URL: "",
    imgURL: gethiredImg,
    features: [
      "AI-driven resume tailoring platform converting standard CVs into optimized applications.",
      "Real-time PDF parsing and structure-aware editing aligned with specific job post requirements.",
      "Conversational career editing workspace with document analyzer feedback recommendations.",
      "Targeted for high-velocity applicants and professional career coaches."
    ],
    description:
      "An AI-native career preparation workspace that transforms resumes into targeted job applications using real-time document parsing and context-aware edits.",
    techUsed: ["React", "TypeScript", "OpenAI API", "PDF.js", "Tailwind CSS", "Express"],
    dates: "In Development",
  }
];
