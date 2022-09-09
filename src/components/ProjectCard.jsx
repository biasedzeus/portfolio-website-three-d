import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../assets/messenger.png";
import { VscGithub } from "react-icons/vsc";
import { Link } from "@mui/material";
import styled from "@emotion/styled";

export default function ProjectCard() {
  const StyledLink = styled(Link)({
    backgroundColor: "#404040 !important",
    color: "white",
    padding: ".5rem",
    textDecoration: "none",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",

    ":hover": {
      
      boxShadow: "1px 2px 10px rgba(10, 10, 10, 0.97) ",
      transition: " 200ms ease-in-out",
      backgroundColor: "red",
    },
  });

  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={image}
      />
      <CardContent
        sx={{
          backgroudColor: "red",
        }}
      >
        <Typography
          fontFamily="Poppins"
          fontWeight="700"
          gutterBottom
          variant="h5"
          component="div"
        >
          Messenger Firebase
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <StyledLink href="#" color="#202020">
          Visit site
        </StyledLink>
        <StyledLink href="#" color="#202020">
          <VscGithub /> <span style={{paddingLeft:'10px'}}>Source Code</span>
        </StyledLink>
      </CardActions>
    </Card>
  );
}
