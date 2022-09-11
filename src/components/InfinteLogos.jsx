import React from "react";
import {
  SiRedux,
  SiReactrouter,
  SiCsswizardry,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiLinkedin,
  SiMaterialui,
  SiJavascript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const InfinteLogos = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Typography
        textAlign="center"
        variant="h3"
        fontWeight="400"
        fontFamily="Poppins"
        marginBottom="1rem"
      >
        What I Use ?{" "}
        <Typography
          className="bluegrad"
          fontFamily="Lobster"
          fontSize="3rem"
          variant="span"
        >
          Glad You Asked
        </Typography>
      </Typography>
      <Box className="slider">
        <Stack flexDirection="row" className="slide-track">
          <Box className="slide">
            <TiHtml5 className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiCsswizardry className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiJavascript className="infintelogo" />
          </Box>
          <Box className="slide">
            <FaReact className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiRedux className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiMaterialui className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiReactrouter className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiTailwindcss className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiBootstrap className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiGithub className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiLinkedin className="infintelogo" />
          </Box>
          <Box className="slide">
            <FaGitAlt className="infintelogo" />
          </Box>
          <Box className="slide">
            <DiGithubFull className="infintelogo" />
          </Box>
          <Box className="slide">
            <TiHtml5 className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiCsswizardry className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiJavascript className="infintelogo" />
          </Box>
          <Box className="slide">
            <FaReact className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiRedux className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiMaterialui className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiReactrouter className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiTailwindcss className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiBootstrap className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiGithub className="infintelogo" />
          </Box>
          <Box className="slide">
            <SiLinkedin className="infintelogo" />
          </Box>
          <Box className="slide">
            <FaGitAlt className="infintelogo" />
          </Box>
          <Box className="slide">
            <DiGithubFull className="infintelogo" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default InfinteLogos;
