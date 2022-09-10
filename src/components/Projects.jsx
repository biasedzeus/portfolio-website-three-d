import styled from "@emotion/styled";
import { Box, Stack, Tabs, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { portfolioProjects, sameShit } from "../data/portfolioProjects";

import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/joy/TabPanel";
import ResumeProjectCard from "./ResumeProjectCard";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Projects() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(1);
  console.log(portfolioProjects);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    height: "435px",
    textOverflow: "ellipsis",
  });

  const Title = styled(Typography)({
    textAlign: "center",
  });

  const ProjectsContainer = styled(Stack)({
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  });

  const BtnContainer = styled(Stack)({
    flexDirection: "column",
    gap: "3rem",
  });

  useEffect(() => {
    setJobs(sameShit);
  }, []);

  if (!jobs) return <div>Loading.......</div>;

  console.log("jobs", jobs);
  
  return (
    <Section>
      <Title>
        <h2>Projects</h2>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            display: "flex",
            flexDirection: {
              xs:'column',
             
            },
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              onChange={handleChange}
              textColor="red"
              centered
              aria-label="projects"
              value={value}
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ResumeProjectCard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ResumeProjectCard />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ResumeProjectCard />
          </TabPanel>
        </Box>
        <div className="underline"></div>
      </Title>
      <ProjectsContainer className="projects-contdainer"></ProjectsContainer>
    </Section>
  );
}

export default Projects;
