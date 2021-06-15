import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import ProjectCard from "./ProjectCard";
import PageContainer from "./PageContainer";

const styles = {
  ProjectCardsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    height: "100vh",
  },
};

const ProjectCardsContainer = (props) => {
  const { classes } = props;
  return (
    <PageContainer>
      <div className={classes.ProjectCardsContainer}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </PageContainer>
  );
};

export default withStyles(styles)(ProjectCardsContainer);
