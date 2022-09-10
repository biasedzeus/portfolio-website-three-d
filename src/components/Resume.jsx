import React from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import { GoLogoGithub } from "react-icons/go";
import { SiAngellist, SiLinkedin, SiGmail } from "react-icons/si";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { AiFillPrinter } from "react-icons/ai";
import donut from "../assets/donut.png"
import Education from './Education';
import AboutMe from "./AboutMe";

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
    <div className="resume">
      <div className="resume-download">
        <ResDownButton variant="a" href={donut} download>
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
            <Link className="resume-link" to="/">
              <GoLogoGithub />
            </Link>
          </li>
          <li>
            <Link className="resume-link" to="/">
              <SiAngellist />
            </Link>
          </li>
          <li>
            <Link className="resume-link" to="/">
              <SiLinkedin />
            </Link>
          </li>
        </ul>
      </nav>
      <Projects />
      <Education/>
      <AboutMe/>
      
    </div>
  );
};

export default Resume;
