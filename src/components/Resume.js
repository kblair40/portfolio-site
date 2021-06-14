import React from "react";

import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";

import ResumeContainer from "./ResumeContainer";
import Contact from "./Contact";
import ResumeSection from "./ResumeSection";
import {
  ABOUT_TEXT,
  SKILLS_TEXT,
  MEMORY_TEXT,
  MEMORY_BULLETS,
  WATCHLIST_TEXT,
  WATCHLIST_BULLETS,
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
  sectionHeader: {
    // marginBottom: 0,
    margin: 0,
  },
};

const Resume = ({ classes }) => {
  return (
    <div className={classes.container}>
      <ResumeContainer>
        <Contact />
        <h2 className={classes.sectionHeader}>ABOUT:</h2>
        <ResumeSection content={ABOUT_TEXT} />
        <h2 className={classes.sectionHeader}>SKILLS:</h2>
        <ResumeSection content={SKILLS_TEXT} />
        <h2 className={classes.sectionHeader}>PROJECTS:</h2>
        <ResumeSection
          subheader={"Memory Card Game"}
          subheaderDetails={"ReactJS, Material-UI, Axios, JSS"}
          content={MEMORY_TEXT}
          bullets={MEMORY_BULLETS}
          liveLink={"https://memory-6fc80b.netlify.app"}
          githubLink={"https://github.com/kblair40/memory"}
        />
        <ResumeSection
          subheader={"Stock Watchlist"}
          subheaderDetails={"ReactJS, Material-UI, Recharts, JSS"}
          content={WATCHLIST_TEXT}
          bullets={WATCHLIST_BULLETS}
          liveLink={"https://watchlistkab.netlify.app"}
          githubLink={"https://github.com/kblair40/watchlist"}
        />
        <h2 className={classes.sectionHeader}>
          SOFTWARE DEVELOPMENT COURSEWORK:
        </h2>
      </ResumeContainer>
    </div>
  );
};

export default withStyles(styles)(Resume);
