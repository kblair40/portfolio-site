import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  subheader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    margin: "-.5rem 0 -.8rem 0",
  },
  subheaderHeader: {
    margin: 0,
  },
  subheaderContent: {
    margin: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  links: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    // set margin with media queries
    // for when wrap occurs.
  },
};

const Subheader = ({ subheader, detail, classes, liveLink, githubLink }) => {
  return (
    <div className={classes.subheader}>
      <div className={classes.subheaderContent}>
        <h4 className={classes.subheaderHeader}>{subheader}</h4>
        <p style={{ marginLeft: "1rem" }}>
          <i>{detail}</i>
        </p>
      </div>
      <div className={classes.links}>
        <a href={liveLink} target="blank">
          Live
        </a>
        &nbsp;|&nbsp;
        <a href={githubLink} target="blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default withStyles(styles)(Subheader);
