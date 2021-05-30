import React, { useContext } from "react";
import Card from "@material-ui/core/Card";

import withStyles from "@material-ui/core/styles/withStyles";
import { ThemeContext } from "./context/ThemeContext";

const styles = {
  cardWrapper: {
    marginTop: "6rem",
    width: "30%",
  },
  darkBg: {
    backgroundColor: "#424242",
    color: "#fff",
  },
};

const ProjectCardWrapper = (props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;
  return (
    <div className={classes.cardWrapper}>
      <Card
        raised={true}
        className={`classes.Card ${isDarkMode && classes.darkBg}`}
      >
        {props.children}
      </Card>
    </div>
  );
};

export default withStyles(styles)(ProjectCardWrapper);
