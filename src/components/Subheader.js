import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  subheader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
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
    margin: "0",
    // set margin with media queries
    // for when wrap occurs.
  },
};

const Subheader = ({ subheader, detail, classes }) => {
  return (
    <div className={classes.subheader}>
      <div className={classes.subheaderContent}>
        <h4>{subheader}</h4>
        <p style={{ marginLeft: "1rem" }}>
          <i>{detail}</i>
        </p>
      </div>
      <div className={classes.links}>
        <a href="https://memory-6fc80b.netlify.app">Live</a>
        &nbsp;|&nbsp;
        <a href="https://github.com/kblair40/memory">Github</a>
      </div>
    </div>
  );
};

export default withStyles(styles)(Subheader);
