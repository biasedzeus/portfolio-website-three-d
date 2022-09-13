import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Link, List, ListItem, Stack } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';


const toastOptions = {
  duration: 7000,
  position: "bottom-center",
};

const StyledIconButton = styled(IconButton)({
  backgroundColor: "black",
  borderRadius: "20px",
  margin: "10px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  fontWeight: "500",
  color: "white",
  padding: "0 5px",
  ":hover": {
    // backgroundColor:'white',
    color: "black",
  },
});
export default function ResumeProjectCard({ project }) {
  return (
    <Card
      sx={{ display: "flex", minHeight: "300px", justifyContent: "center" }}
      component={motion.div}
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2, type: "spring", stiffness: "200" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pl: 1,
            pb: 1,
            textAlign: "left",
            width: {
              xs: "fit-content",
              sm: "100%",
            },
          }}
        >
          <Typography fontWeight="600" fontFamily="Poppins" variant="h6">
            {project.title}
          </Typography>
          <List>
            <Typography p={1}>Features of the App :</Typography>
            {project.features.map((feature) => {
              return (
                <ListItem>
                  <Typography
                    sx={{ textAlign: { xs: "left" } }}
                    fontFamily="Poppins"
                    textAlign="left"
                  >
                    <AiFillCheckCircle
                      className="resume-check-circle"
                      color="#731DD8"
                    />
                    {feature}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
          <Stack
            flexDirection="row"
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <StyledIconButton>
              {project.site_URL ? (
                <StyledLink
                  target="_blank"
                  rel="noopener"
                  href={project.site_URL}
                >
                  Visit Site
                </StyledLink>
              ) : (
                <StyledLink
                  onClick={() => {
                      toast.success(
                        "Due to devloper mode, API not accessible on production mode.Check out the source code on github."
                      ,toastOptions);
                  }}
                >
                  Visit Site
                </StyledLink>
              )}
            </StyledIconButton>
            <StyledIconButton>
              <StyledLink
                target="_blank"
                rel="noopener"
                href={project.github_URL}
              >
                Source Code
              </StyledLink>
            </StyledIconButton>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
