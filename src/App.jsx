import "./App.scss";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { useInView,} from "react-intersection-observer";
import { Box } from "@mui/joy";
import toast, { Toaster } from "react-hot-toast";
import { lazy,Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, } from "framer-motion";
import LoadingSkeleton from "./components/LoadingSkeleton";

const Resume = lazy(() => import('./components/Resume'));


export default function App() {

  const { ref, inView } = useInView({
    threshold: 0.9,
  });


  const location = useLocation();

  useEffect(() => {
    toast.success("Drag Spheres to move them", {
      duration: 10000,
      position: "bottom-center",
      style: {
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: "2rem",
      },
      icon: "🖱️",
    });
  }, []);


  return (
    <div className="App">
      <Header inView={inView} />
      <AnimatePresence>
        <Suspense fallback={<LoadingSkeleton/>}>
        <Routes>
          <Route path="/">
            <Route index element={<Home iref={ref}/>} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
        </Suspense>
      </AnimatePresence>
      <Box sx={{ maxWidth: "90%" }}>
        <Footer />
      </Box>

      <Toaster />
    </div>
  );
}
