import React from "react";
import { Box, Skeleton } from "@mui/material";
import HomePage from "./HomePage";
import HeroSection from "./HeroSection";
// import WhatIDo from "./WhatIDo";
// import InfinteLogos from "./InfinteLogos";
// import Portfolio from "./Portfolio";
import { InView } from "react-intersection-observer";
import { lazy, Suspense } from "react";

// lazy imports
const WhatIDo = lazy(() => import("./WhatIDo"));
const InfinteLogos = lazy(() => import("./InfinteLogos"));
const Portfolio = lazy(() => import("./Portfolio"));

function Home({ iref }) {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          marginBottom: "3rem",
        }}
      >
        <HomePage />
        <HeroSection intersecRef={iref} />
      </Box>
      <Suspense
        fallback={
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        }
      >
           <InfinteLogos />
      <WhatIDo />
      <Portfolio />
      </Suspense>
     
    </>
  );
}
export default Home;
