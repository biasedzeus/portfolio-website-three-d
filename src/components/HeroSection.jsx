import styled from "@emotion/styled";
import { Button, Divider, Typography, Box, Stack } from "@mui/material";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { DiGithubFull } from "react-icons/di";
import { motion } from "framer-motion";

const StyledBox = styled(Stack)({
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  zIndex: "0",
  padding: "2rem",
});

const DevName = styled(Typography)({
  fontWeight: 900,
  textShadow: "1px 2px 10px rgba(10, 10, 10, 0.97)",
});
const DevTitle = styled(Typography)({
  fontWeight: 200,
  textShadow: "1px 2px 10px rgba(10, 10, 10, 0.97)",
});

const ResumeButton = styled(Button)({
  color: "white",
  backgroundColor: "rgba(255,255,255,0.2)",
  marginTop: "1rem",
  padding: "1rem 2rem 1rem 2rem",
  borderRadius: "2.5rem",
  boxShadow: "1px 2px 10px rgba(24, 24, 24, 0.1)",
  ":hover": {
    fill: "ButtonHighlight",
    backgroundColor: "white",
    color: "black",
    boxShadow: "1px 2px 10px rgba(10, 10, 10, 0.97) ",
    transition: " 200ms ease-in-out",
  },
});

const StyledDivider = styled(Divider)({
  color: "white",
  backgroundColor: "rgba(255,255,255,0.2)",
  width: "0.12rem",
});

const HeroSection = ({ intersecRef }) => {
  return (
    <Stack
     
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledBox
       component={motion.div}
       initial={{ opacity: 0, translateY: -100 }}
       animate={{ opacity: 1, translateY: 0 }}
       transition={{
         duration: 1.5,
         delay: 0.4,
         type: "spring",
         stiffness: "200",
       }}
        sx={{
          top: {
            xs: "18rem",
            sm: "12rem",
            md: "8rem",
            lg: "8rem",
            xl: "12rem",
          },
        }}
      >
        <DevName
          ref={intersecRef}
          variant="h1"
          sx={{
            fontSize: {
              xs: "3rem",
              sm: "4rem",
              md: "8rem",
              lg: "8rem",
              xl: "12rem",
            },
          }}
          component="h2"
        >
          Bhanu Singh
        </DevName>
        <DevTitle
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2rem",
              lg: "6rem",
              xl: "10rem",
            },
          }}
          variant="h2"
          component="h2"
        >
          Web Devloper
        </DevTitle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          spacing={{ xs: 1, sm: 1, md: 2, lg: 4 }}
        >
          <ResumeButton
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "1.5rem",
                lg: "1.5rem",
                xl: "3rem",
              },
            }}
            onClick={() => alert("btn clicked")}
          >
            Resume
          </ResumeButton>

          <StyledDivider
            light={true}
            variant="inset"
            orientation="vertical"
            flexItem
          />

          <DiGithubFull className="herosection-logo" />
          <SiLinkedin className="herosection-logo" />
        </Stack>
      </StyledBox>
    </Stack>
  );
};

export default HeroSection;
