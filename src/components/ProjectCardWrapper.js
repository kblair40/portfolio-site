import React, { useContext } from "react";
import Card from "@material-ui/core/Card";

import withStyles from "@material-ui/core/styles/withStyles";
import { ThemeContext } from "../context/ThemeContext";
// import ProjectCardNav from "./ProjectCardNav";

const styles = {
  cardWrapper: {
    marginTop: "6rem",
    width: "40%",
  },
  darkBg: {
    backgroundColor: "#424242",
    color: "#fff",
  },
};

// red - ff5f57, orange/yellow - ffbd2e, green - 28ca41

const ProjectCardWrapper = (props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;
  return (
    <div className={classes.cardWrapper}>
      <Card
        raised={true}
        className={`classes.Card ${isDarkMode && classes.darkBg}`}
      >
        {/* <ProjectCardNav /> */}
        {props.children}
      </Card>
    </div>
  );
};

export default withStyles(styles)(ProjectCardWrapper);
