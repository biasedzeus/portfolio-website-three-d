import { Card, Link, Paper, Typography } from "@mui/material";
import { Stack,Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import {motion} from 'framer-motion';

const Portfolio = () => {
  return (
    <Box
    component={motion.div}
    initial={{ opacity: 0, translateY: -100 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{
      duration: 1.5,
      delay: 0.4,
      type: "spring",
      stiffness: "200",
    }}
    viewport={{ once: false }} id="projects" paddingTop="4rem">

      <Typography  fontFamily={"Lobster"} fontWeight="300" fontSize="3rem" textAlign="center" p={2} >My Recent Projects</Typography>
      <Typography   
        fontSize="1.2rem"
        textAlign="center"
        fontFamily="Poppins"
        p={2} >
        Here are few projects I've worked on recently.Want to see more?.
        <Link sx={{
          color:'white',
          textDecoration:'none',
          fontWeight:'600',
          cursor: 'pointer',
          ":hover":{
            color:'black',
            }}}
            href="mailto:bhanusingh1078@gmail.com"
            >Email me.</Link>
      </Typography>
    <Stack flexDirection="row" flexWrap='wrap' gap="1rem" alignItems="center" justifyContent="center" p={5}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />

    </Stack>
    </Box>
  );
};

export default Portfolio;
