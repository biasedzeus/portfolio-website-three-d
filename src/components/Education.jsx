import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,


} from '@mui/material';
import styled from '@emotion/styled';

const Education = () => {

  const Section = styled(Box)({
    backgroundColor: "white",
    marginTop: "1rem",
    color: "black",
    display: "flex",
    width: "90%",
    margin: "0 auto",
    padding: "1rem",
    borderRadius: "1.4rem",
    marginBottom: "2rem",
    flexDirection: "column",
    minHeight: "435px",
    textOverflow: "ellipsis",
  });

  const Title = styled(Typography)({
    textAlign: "center",
  });

  const Container = styled(Stack)({
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  });

  const BtnContainer = styled(Stack)({
    // flexDirection: "column",
    // gap: "3rem",
    justifyContent:'flex-start',
    marginLeft:'4rem',
    gap:'1rem'
  
  });
  const StyledIconButton = styled(IconButton)({
    marginTop:'1rem',
    fontSize:'1rem',
    backgroundColor:'#606060',
    color:'white',
    borderRadius:'1rem',
    padding:'.5rem',
    fontWeight:'700',

   ":hover":{
    backgroundColor:'blueviolet',
     filter:'drop-shadow(0 0 1em blueviolet)',
     color:'white',
   }
  })

  return (
    <Section>
      <Title>
        <h2>Education</h2>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            display: "flex",
            flexDirection: {
              xs: "column",
            },
          }}
        >
          <Typography
            fontWeight="600"
            fontSize="1rem"
            color="#404040"
            variant="p"
          >
            Institute of Technology And Management,Gwalior -Bachelor of
            Technology
          </Typography>
          <BtnContainer flexDirection="row">
            <StyledIconButton>CGPA 7.5</StyledIconButton>
            <StyledIconButton>2021</StyledIconButton>
          </BtnContainer>

          <Typography
            marginLeft={"4rem"}
            marginTop="1rem"
            textAlign="left"
            variant="subtitle2"
          >
            Rajiv Gandhi Proudyogiki Vishwavidyalaya
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
          <Typography
            fontWeight="600"
            fontSize="1rem"
            color="#404040"
            variant="p"
            textAlign="left"
            marginLeft="4rem"
            marginTop="1rem"
          >
            GREENFIELD HIGHER SECONDARY SCHOOL, Gwalior - XII
          </Typography>
          <BtnContainer flexDirection="row">
            <StyledIconButton>78 %</StyledIconButton>
            <StyledIconButton>2016</StyledIconButton>
          </BtnContainer>

          <Typography
            marginLeft={"4rem"}
            marginTop="1rem"
            textAlign="left"
            variant="subtitle2"
          >
            Madhya Pradesh Board Of Secondary Education          </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
          <Typography
            fontWeight="600"
            fontSize="1rem"
            color="#404040"
            variant="p"
            textAlign="left"
            marginLeft="4rem"
            marginTop="1rem"
          >
            Miss Hill HIGHER SECONDARY SCHOOL,Gwalior - X
          </Typography>
          <BtnContainer flexDirection="row">
            <StyledIconButton>82 %</StyledIconButton>
            <StyledIconButton>2014</StyledIconButton>
          </BtnContainer>

          <Typography
            marginLeft={"4rem"}
            marginTop="1rem"
            textAlign="left"
            variant="subtitle2"
          >
            Madhya Pradesh Board Of Secondary Education 
          </Typography>

          
        </Box>
        <div className="underline"></div>
      </Title>
      <Container className="projects-contdainer"></Container>
    </Section>
  );
}

export default Education;