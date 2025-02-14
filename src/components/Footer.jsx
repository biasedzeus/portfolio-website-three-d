import React from "react";
import { Link, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { List, ListItem,} from "@mui/joy";
import { HiOutlineMail } from "react-icons/hi";
import styled from "@emotion/styled";
import { SiAngellist, SiLinkedin, } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as RLink } from "react-router-dom";

const Footer = () => {
  const StyledLink = styled(Link)({
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    padding: ".3rem",

    ":hover": {
      color: "black",
      backgroundColor: "white",
      borderRadius: "10px",
      filter: "drop-shadow(0 0 1rem white)",
    },
  });

  return (
    <Box className="footer">
      <Box
        component={motion.div}
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: "200",
        }}
        viewport={{ once: false }}
        width="100%"
        className="container"
      >
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
              lg: "row",
            },
          }}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly"
          className="row justify-content-center"
        >
          <Stack className="col-4 offset-1 col-sm-2">
            <Typography
              sx={{ textAlign: { xs: "center" } }}
              fontFamily="Poppins"
              fontWeight="600"
              fontSize="1.3rem"
            >
              Links
            </Typography>
            <List
              sx={{
                flexDirection: {
                  xs: "row",
                  sm: "column",
                },
              }}
            >
              <ListItem>
                <StyledLink href="#">Home</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="#projects">Projects</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink>
                  <RLink className="footer-router-link" to="/resume">Resume</RLink>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="#contactme">Contact Me</StyledLink>
              </ListItem>
            </List>
          </Stack>
          <Stack className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121,Somewhere where Road
              <br />
              Is This The Road, Where
              <br />
              GO WHERE
              <br />
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <HiOutlineMail />
                <StyledLink href="mailto:bhanu.singh1078@gmail.com">
                  bhanu.singh1078@gmail.com
                </StyledLink>
              </Stack>
            </address>
          </Stack>
          <Box className="col-12 col-sm-4 align-self-center">
            <Stack flexDirection="row" gap={2} fontSize="3rem">
              <ListItem>
                <StyledLink
                  target="_new"
                  href="https://angel.co/u/bhanu-pratap-singh-chauhan-2"
                >
                  <SiAngellist />
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink target="_new" href="https://in.linkedin.com/">
                  <SiLinkedin />
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink target="_new" href="https://dev.to/biasedzeus">
                  <FaDev />{" "}
                </StyledLink>
              </ListItem>
            </Stack>
          </Box>
        </Stack>

        <Typography
          fontWeight="light"
          fontFamily="Poppins"
          component="h1"
          textAlign="center"
          marginTop="10px"
        >
          <p> made with ❤️ ©biasedzeus </p>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
