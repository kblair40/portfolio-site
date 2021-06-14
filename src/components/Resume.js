import React from "react";
import ResumeContainer from "./ResumeContainer";
import Contact from "./Contact";
import ResumeSection from "./ResumeSection";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  ABOUT_TEXT,
  SKILLS_TEXT,
  PROJECTS_TEXT,
  PROJECTS_BULLETS,
} from "../constants";

const styles = {
  container: {
    padding: "1rem",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    "& a:visited": {
      color: "black",
    },
    "& a:hover": {
      color: "blue",
      textDecoration: "underline",
    },
  },
};

const Resume = ({ classes }) => {
  return (
    <div className={classes.container}>
      <ResumeContainer>
        <Contact />
        <ResumeSection header="ABOUT" content={ABOUT_TEXT} />
        <ResumeSection header="SKILLS" content={SKILLS_TEXT} />
        <ResumeSection
          header="PROJECTS"
          subheader={"Memory Card Game"}
          subheaderDetails={"ReactJS, Material-UI, Axios, JSS"}
          content={PROJECTS_TEXT}
          bullets={PROJECTS_BULLETS}
        />
      </ResumeContainer>
    </div>
  );
};

export default withStyles(styles)(Resume);
