import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  resumeHeader: {
    marginBottom: 0,
    color: "rgba(20, 20, 100, 1)",
  },
  content: {
    marginTop: ".2rem",
    color: "rgba(20, 20, 100, .8)",
  },
};

const ResumeSection = (props) => {
  const { classes, header, content, bullets } = props;
  // bullets = {bulletHeader: [gsfsda, gsafsd, gsafsa, .....]}
  return (
    <React.Fragment>
      <h3 className={classes.resumeHeader}>{header}</h3>
      <p className={classes.content}>{content}</p>
    </React.Fragment>
  );
};

export default withStyles(styles)(ResumeSection);
