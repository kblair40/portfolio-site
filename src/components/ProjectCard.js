import React, { useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ProjectCardWrapper from "./ProjectCardWrapper";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { ThemeContext } from "../context/ThemeContext";
import ProjectCardNav from "./ProjectCardNav";

const styles = {
  lightFont: {
    color: "rgba(200,200,200,.8)",
  },
};

const ProjectCard = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { classes } = props;
  return (
    <ProjectCardWrapper className={classes.Wrapper}>
      <ProjectCardNav />
      <CardHeader
        title="Title"
        subheader="subheader"
        subheaderTypographyProps={{
          className: isDarkMode && classes.lightFont,
        }}
      />

      <CardContent>
        Cillum in cupidatat irure ipsum fugiat ex exercitation et. Id
        reprehenderit consectetur dolore duis. Nulla esse sunt mollit mollit ea
        anim culpa. Culpa dolor dolore anim eu do duis ex ea ipsum est Lorem
        incididunt laboris quis. Et veniam est veniam nostrud velit. Proident ea
        aute Lorem anim. Sunt eu elit ad velit mollit culpa occaecat proident
        non dolor.
      </CardContent>
    </ProjectCardWrapper>
  );
};

export default withStyles(styles)(ProjectCard);
