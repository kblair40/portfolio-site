import React from "react";
import Card from "@material-ui/core/Card";

import { Motion, spring, presets } from "react-motion";

import withStyles from "@material-ui/core/styles/withStyles";
import { useSelector } from "react-redux";

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
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme.theme === "dark";
  const { classes } = props;
  return (
    <div className={classes.cardWrapper}>
      {/* <Motion> */}
      <Card
        raised={true}
        className={`classes.Card ${isDarkMode && classes.darkBg}`}
      >
        {props.children}
      </Card>
      {/* </Motion> */}
    </div>
  );
};

export default withStyles(styles)(ProjectCardWrapper);
