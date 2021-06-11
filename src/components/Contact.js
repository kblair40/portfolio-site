import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  header: {
    textAlign: "right",
    margin: 0,
  },
  contactInfo: {
    marginTop: ".5rem",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: ".8rem",
    flexWrap: "wrap",
  },
};

const Contact = ({ classes }) => {
  return (
    <React.Fragment>
      <h1 className={classes.header}>Kevin Blair</h1>
      <h5 className={classes.header}>Chicago, IL 60614</h5>
      <div className={classes.contactInfo}>
        <span>847-845-4635</span>
        <span>kblair40@gmail.com</span>
        <span>
          <a target="blank" href="https://linkedin.com/in/kevin-blair-74525935">
            linkedin
          </a>
        </span>
        <span>
          <a target="blank" href="https://www.github.com/kblair40">
            github
          </a>
        </span>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Contact);
