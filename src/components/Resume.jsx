import React from "react";
import Projects from "./Projects";
import { GoLogoGithub } from "react-icons/go";
import { SiAngellist, SiLinkedin, SiGmail } from "react-icons/si";
import { Button, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";
import { AiFillPrinter } from "react-icons/ai";
import Education from './Education';
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import { motion } from "framer-motion";
import resumepdf from '../assets/resumefrontend.pdf'


const StyledLink = styled(Link)({
  // color: "white",
  textDecoration: "none",
  cursor: "pointer",
  padding: ".3rem",

  ":hover": {
  
    borderRadius: "10px",
    filter: "drop-shadow(0 0 1rem white)",
  },
});

const Resume = () => {
  const ResDownButton = styled(Button)({
    color: "white",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginTop: "1rem",
    padding: "1rem 1rem 1rem 1rem",
    borderRadius: "0.5rem 0.5rem .5rem .5rem",
    position: 'absolute',
    top:'-5rem',
    right:'0',
    fontWeight:'800',
    boxShadow: "1px 2px 10px rgba(24, 24, 24, 0.1)",
    ":hover": {
      fill: "ButtonHighlight",
      backgroundColor: "white",
      color: "black",
      boxShadow: "1px 2px 10px rgba(10, 10, 10, 0.97) ",
      transition: " 200ms ease-in-out",
    },
  });
  return (
    <motion.div
     className="resume"
     initial={{opacity:0,translateY:-50}}
     animate={{opacity:1,translateY:0}}
     transition={{duration:.2,type:'spring',stiffness:'200'}}
     >
      <div className="resume-download">
        <ResDownButton variant="a" href={resumepdf} download>
          <AiFillPrinter size="1.5rem" className="printer"/>
          Download Resume
        </ResDownButton>
      </div>

      <nav>
        <header>
          <Typography
            marginLeft="10px"
            fontWeight="500"
            fontFamily="Lobster"
            variant="h4"
          >
            Bhanu Pratap Singh Chauhan
          </Typography>
        </header>
        <ul>
          <li>
            <StyledLink className="resume-link" target="_blank" rel="noopener" href="https://github.com/biasedzeus">
              <GoLogoGithub />
            </StyledLink>
          </li>
          <li>
            <StyledLink className="resume-link" target="_blank" rel="noopener" href="https://angel.co/u/bhanu-pratap-singh-chauhan-2">
              <SiAngellist />
            </StyledLink>
          </li>
          <li>
            <StyledLink className="resume-link" target="_blank" rel="noopener" href="https://in.linkedin.com/">
              <SiLinkedin />
            </StyledLink>
          </li>
        </ul>
      </nav>
      <Projects />
      <Education/>
      <AboutMe/>
      <ContactMe/>
      
    </motion.div>
  );
};

export default Resume;
