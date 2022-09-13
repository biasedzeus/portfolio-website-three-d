import "./App.scss";

// Components
import Header from "./components/Header";
import HomePage from "./components//HomePage";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

import Blob from "./components/Blob";
import { Container, Stack } from "@mui/material";
import HeroSection from "./components/HeroSection";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/joy";
import Portfolio from "./components/Portfolio";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import InfinteLogos from "./components/InfinteLogos";
import WhatIDo from "./components/WhatIDo";
import { AnimatePresence, motion } from "framer-motion";
import ContactMe from "./components/ContactMe";

export default function App() {
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

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  // console.log("inView", inView);

  return (
    <div className="App">
      <Header inView={inView} />
      <AnimatePresence>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <Box sx={{ height: "100vh", width: "100vw" }}>
                    <HomePage />
                    <HeroSection intersecRef={ref} />
                  </Box>
                  <WhatIDo />
                  <InfinteLogos />
                  <Portfolio />
                  <Box sx={{ height: "100vh",width:{xs:'90%',
                  sm:'70%',
                  xl:'50%',
                  } }}>
                    <ContactMe />
                  </Box>
                  {/* <Box sx={{ maxWidth: "90%" }}>
                </Box> */}
                </>
              }
            />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Box sx={{ maxWidth: "90%" }}>
        <Footer />
      </Box>

      <Toaster />
    </div>
  );
}
