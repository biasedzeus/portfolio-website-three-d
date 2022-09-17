import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { VscGithub } from "react-icons/vsc";
import { Link } from "@mui/material";
import styled from "@emotion/styled";
import defaultImg from "../assets/textformatanalyzer.webp";
import toast from "react-hot-toast";

const toastOptions = {
  duration: 7000,
  position: "bottom-center",
};

export default function ProjectCard({ project }) {
  const StyledLink = styled(Link)({
    backgroundColor: "#404040 !important",
    color: "white",
    padding: ".5rem",
    textDecoration: "none",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    cursor: "pointer",

    ":hover": {
      boxShadow: "1px 2px 10px rgba(10, 10, 10, 0.97) ",
      transition: " 200ms ease-in-out",
      backgroundColor: "red",
    },
  });

  return (
    <Card sx={{ maxWidth: 340 }}>
      <Link href={project.site_URL ? project.site_URL : "#"}>
        <CardMedia
          component="img"
          alt={project.title}
          height="200"
          image={project.imgURL || defaultImg}
          className="project-card-image"
        />
      </Link>
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
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project.site_URL && (
          <StyledLink
            target="_blank"
            rel="noopener"
            href={project.site_URL}
            color="#202020"
          >
            Visit site
          </StyledLink>
        )}
        {!project.site_URL && (
          <StyledLink
            onClick={() => {
              !project.site_URL &&
                toast.success(
                  "Due to devloper mode, API not accessible on production mode.Check out the source code on github.",
                  toastOptions
                );
            }}
            color="#202020"
          >
            Visit site
          </StyledLink>
        )}
        <StyledLink
          target="_blank"
          rel="noopener"
          href={project.github_URL}
          color="#202020"
        >
          <VscGithub /> <span style={{ paddingLeft: "10px" }}>Source Code</span>
        </StyledLink>
      </CardActions>
    </Card>
  );
}
