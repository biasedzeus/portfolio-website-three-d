import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";


const BoxContainer = styled(Box)((theme) =>({
  flexGrow: 1,
  position: "sticky",
  top: '3rem',
  borderRadius:'1.5rem',
  zIndex:'99'

  // backgroundColor:`rgba(255,255,255,0.2)`,
}));

export default function Header({inView}) {
  



  return (
    <BoxContainer component="nav" aria-label="My site" sx={{
      backgroundColor:inView ? 'rgba(255,255,255,0.2)' : 'black'
    }}>
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
          <ListItemButton  role="menuitem" component="a" href="#projects">
            Projects
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Blog
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            Resume
          </ListItemButton>
        </ListItem>
      </List>
    </BoxContainer>
  );
}
