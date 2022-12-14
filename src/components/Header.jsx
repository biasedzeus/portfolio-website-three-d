import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import toast from 'react-hot-toast';
import {motion} from 'framer-motion'


const BoxContainer = styled(Box)({
  flexGrow: 1,
  position: "sticky",
  top: "3rem",
  borderRadius: "1.5rem",
  zIndex: "99",

});

export default function Header({ inView }) {
  const location = useLocation();
 



  if (location.pathname === "/")
    return (
      <BoxContainer
      component={motion.div}
      initial={{ opacity: 0, translateY: 100, }}
      whileInView={{ opacity: 1, translateY: 0,}}
      transition={{
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: "200",
      }}
      viewport={{ once: false }}
        
        aria-label="My site"
        sx={{
          backgroundColor: inView ? "rgba(255,255,255,0.2)" : "black",
          transition: '200ms ease-out',
          boxShadow: !inView && 'rgba(17, 12, 46, 0.75) 0px 5px 10px 0px'

        }}
      >
        <List role="menubar" row>
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="#"
              aria-label="Home"
            >
              <Home />
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="#projects">
              Projects
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="button"
              onClick={() =>{
                toast.success("Coming Soon")
              }}
              
            >
              Blog
            </ListItemButton>
          </ListItem>
          <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
            <Link className="link" to="/resume">Resume</Link>
          </ListItem>
        </List>
      </BoxContainer>
    );

  return (
    <BoxContainer
      component="nav"
      aria-label="My site"
      sx={{
        backgroundColor: inView ? "rgba(255,255,255,0.2)" : "black",
      }}
    >
      <List role="menubar" row>
        <ListItem role="none">
          <Link className="link" to="/">
            <Home />
          </Link>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <Link
            className="link"
            to={{
              pathname: "/",
              hash: "#projects",
            }}
          >
            Projects
          </Link>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton onClick={() =>{
                toast.success("Coming Soon")
              }} role="menuitem" component="button" >
            Blog
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <Link className="link" to="/resume">
            Resume
          </Link>
        </ListItem>
      </List>
    </BoxContainer>
  );
}
