import { Card, Paper, Typography } from "@mui/material";
import { Stack,Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <Box id="projects" paddingTop="4rem">

      <Typography  fontFamily={"Lobster"} fontSize="3rem" textAlign="center" p={2} >Portfolio Projects</Typography>
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
