import { Box, Stack} from "@mui/material";
import HomePage from "./HomePage";
import HeroSection from "./HeroSection";
import { lazy, Suspense } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import ContactMe from "./ContactMe";

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
      <Suspense fallback={ <LoadingSkeleton/>}> 
         <Box width="100%">
           <InfinteLogos />
           <WhatIDo />
           <Portfolio />
           
            <Stack sx={{
                margin:'0 auto',
                width:{
                    xs:'90%',
                    sm:'70%',
                    lg:'50%',
                }
            }} >

           <ContactMe/>
            </Stack>
           
      </Box>
      </Suspense>
     
    </>
  );
}
export default Home;
