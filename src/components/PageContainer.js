import React from "react";
import Fade from "@material-ui/core/Fade";

import withStyles from "@material-ui/core/styles/withStyles";
import ProjectCardsContainer from "./ProjectCardsContainer";
import { useSelector } from "react-redux";

const styles = {
  PageContainer: {
    height: "100vh",
    overflow: "scroll",
  },
  darkBg: {
    backgroundColor: "#535353",
  },
};

const PageContainer = (props) => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme.theme === "dark";
  const { classes } = props;
  return (
    <Fade in={true} timeout={700}>
      <div className={`classes.PageContainer ${isDarkMode && classes.darkBg}`}>
        <ProjectCardsContainer />
      </div>
    </Fade>
  );
};

export default withStyles(styles)(PageContainer);
