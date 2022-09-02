import styled from "@emotion/styled";
import { Box, List } from "@mui/joy";
import { Button, Divider, ListItem, Typography } from "@mui/material";
import React from "react";
import GithubLogo from "../assets/GitHub_Logo_White.png";
import LinkedInLogo from "../assets/LinkedIn.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const StyledBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "skyblue",
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  // top:'10rem'
  // [theme.breakpoints.up("sm")]: {
  //   top: "10rem",
  // }
}));

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
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: "1px 2px 10px rgba(24, 24, 24, 0.1)",
});

const LogoContainer = styled(Box)({
  display: "flex",
});



const HeroSection = () => {
  return (
    <StyledBox
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
        variant="h1"
        sx={{
          fontSize: {
            xs: "4rem",
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

      <Divider orientation="vertical" flexItem />
      <LogoContainer>
        
        {/* <StyledList>
          <StyledListItem>
            <img src={GithubLogo} alt="github_logo" />
          </StyledListItem>
          <StyledListItem>
            <img src={LinkedInLogo} alt="github_logo" />
          </StyledListItem>
        </StyledList> */}
      </LogoContainer>
    </StyledBox>
  );
};

export default HeroSection;
