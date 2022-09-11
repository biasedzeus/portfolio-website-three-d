import React from "react";
import { Box, Typography, Stack, IconButton, Button } from "@mui/material";
import styled from "@emotion/styled";
import { MdDesignServices } from "react-icons/md";
import { RiLayout5Fill } from "react-icons/ri";
import toast from 'react-hot-toast';


const Section = styled(Box)({
  //   backgroundColor: "white",
  marginTop: "1rem",
  color: "black",
  display: "flex",
  width: "60%",
  margin: "0 auto",
  padding: "1rem",
  borderRadius: "1.4rem",
  marginBottom: "2rem",
  flexDirection: "row",
  minHeight: "435px",
  textOverflow: "ellipsis",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-around",
});

const ContentBox = styled(Stack)({
  backgroundColor: "white",
  borderRadius: "1rem",
  height: "300px",
  maxWidth: "200px",
  flexDirection: "column",
  position: "relative",
  padding: "1rem",
  paddingTop: "5rem",
  margin: "2rem",
  justifyContent: "space-evenly",
  textAlign: "center",
  minWidth: {
    xs: "250px",
    sm: "250px",
    md: "250px",
  },
  alignItems: "center",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  boxShadow:
    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
});

const Title = styled(Typography)({
  textAlign: "center",
  fontSize: "3rem",
  fontFamily: "Lobster",
});

const MainText = styled(Typography)({
  fontSize: {
    xs: "rem",
    sm: "3rem",
  },
  fontFamily: "Poppins",
  fontWeight: "700",
  background: " #40E0D0" /* fallback for old browsers */,
  background:
    "-webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)" /* Chrome 10-25, Safari 5.1-6 */,
  background:
    "linear-gradient(to left, #FF0080, #FF8C00, #40E0D0)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  backgroundClip: "text",
  color: "transparent",
});

const StyledIconButton = styled(Button)({
  borderRadius: ".8rem",
  width: "70%",
//   padding: ".5rem 1rem .5rem 1rem",
  fontSize: "1rem",
  fontWeight: "700",
  color: "white",
  
});

const WhatIDo = () => {

const handleOnClick = () =>{
    toast.success("Coming Soon",{
        duration:5000,
        position: "bottom-left",
    })
}

  return (
    <>
      <Title>
        What I do ? <MainText variant="span">Glad You asked</MainText>
      </Title>
      <Section>
        <ContentBox
          sx={{
            minWidth: {
              xs: "250px",
              sm: "250px",
              md: "250px",
            },
          }}
        >
          <MdDesignServices className="contentBoxLogo" />
          <Typography>
            I value simple content structure and thoughtful interactions.
          </Typography>
          <StyledIconButton
           onClick={handleOnClick}
           className="styledIconBtn">
            View Designs
          </StyledIconButton>
        </ContentBox>
        <ContentBox
          sx={{
            minWidth: {
              xs: "250px",
            },
          }}
        >
          <RiLayout5Fill className="contentBoxLogo" />
          <Typography>
            I value simple content structure and thoughtful interactions.
          </Typography>
          <StyledIconButton 
           onClick={handleOnClick}
          className="styledIconBtn">
            Projects
          </StyledIconButton>
        </ContentBox>
      </Section>
    </>
  );
};

export default WhatIDo;
