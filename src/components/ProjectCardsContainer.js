import withStyles from "@material-ui/core/styles/withStyles";
import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";

const styles = {
  ProjectCardsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    height: "100vh",
  },
  darkBg: {
    backgroundColor: "#424242",
  },
};

const ProjectCardsContainer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.ProjectCardsContainer}>
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default withStyles(styles)(ProjectCardsContainer);
