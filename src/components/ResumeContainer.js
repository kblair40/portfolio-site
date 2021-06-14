import React from "react";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import withStyles from "@material-ui/core/styles/withStyles";

import PageContainer from "./PageContainer";

const styles = {
  resumeContainer: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    padding: "1rem",
    color: "#333",
    marginTop: "6rem",
    width: "90%",
  },
};

const ResumeContainer = ({ classes, children, isDarkMode }) => {
  console.log("MODE:", isDarkMode);
  const paperStyles = isDarkMode
    ? { background: "#424242", color: "#fff" }
    : {};

  return (
    <PageContainer>
      <div
        className={`${classes.resumeContainer} ${isDarkMode && classes.dark}`}
      >
        <Paper style={paperStyles} classes={{ root: classes.root }}>
          {children}
        </Paper>
      </div>
    </PageContainer>
  );
};

export default withStyles(styles)(ResumeContainer);
