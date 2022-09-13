import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,


} from '@mui/material';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';

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
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled(Typography)({
  textAlign: "center",
  fontSize:'3rem',
  fontWeight:'700',
  fontFamily:'Lobster',
  textDecoration:'underline'


});

const DevName = styled(Typography)({
 
  fontFamily:'Lobster',
  fontSize:{
    xs:'1rem',
    sm:'3rem',
  }

})
const AboutMe = () => {
  return (
    <Section
    component={motion.div}
    initial={{ opacity: 0, translateY: -100 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{
      duration: .5,
      delay: 0.2,
      type: "spring",
      stiffness: "200",
    }}
    viewport={{ once: false }}
    >
      <Title  className='aboutme'>About Me</Title>
      <Stack sx={{
        width:{
          xs:'100%',
          sm:'100%',
          md:'80%'
        },
        alignItems:'center',
        justifyContent:'center'
      }}>

      <Typography sx={{

      }} marginTop="1rem" textAlign="center" variant='h5'>
       Hey, I am <DevName 
       component={motion.div}
       initial={{ opacity: 0, translateY: -100 }}
       whileInView={{ opacity: 1, translateY: 0 }}
       transition={{
         duration: .3,
         type: "spring",
         stiffness: "100",
       }}
       viewport={{ once: false }}
       variant='h3' className='devname bluegrad'>Bhanu Singh</DevName> . I am a self-taught web developer and one thing I learned as a web devloper that wireframing and planning it is as important as Implementation.

      </Typography>
      </Stack>


    </Section>
  )
}

export default AboutMe