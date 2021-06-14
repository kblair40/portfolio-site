import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const styles = {
  header: {
    margin: 0,
  },
  headerContainer: {
    width: "20%",
  },
  headerContact: {
    display: "flex",
    flexDirection: "column",
    margin: ".5rem 0",
  },
  profileButtons: {
    display: "flex",
  },
};

const Contact = ({ classes }) => {
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.header}>Kevin Blair</h1>
      <h5 className={classes.header}>Chicago, IL 60614</h5>
      <div className={classes.headerContact}>
        <span>847-845-4635</span>
        <span>kblair40@gmail.com</span>
      </div>
      <div className={classes.profileButtons}>
        <IconButton
          onClick={() => window.open("https://www.github.com/kblair40")}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open("https://www.linkedin.com/in/kevin-blair-74525935")
          }
        >
          <LinkedInIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default withStyles(styles)(Contact);
