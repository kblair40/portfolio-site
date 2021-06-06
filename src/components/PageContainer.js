import React, { useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { ThemeContext } from "../context/ThemeContext";
import ProjectCardsContainer from "./ProjectCardsContainer";

const styles = {
  PageContainter: {
    height: "100vh",
    overflow: "scroll",
  },
  darkBg: {
    backgroundColor: "#535353",
  },
};

const PageContainer = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { classes } = props;
  return (
    <div className={`classes.PageContainer ${isDarkMode && classes.darkBg}`}>
      <ProjectCardsContainer />
    </div>
  );
};

export default withStyles(styles)(PageContainer);
