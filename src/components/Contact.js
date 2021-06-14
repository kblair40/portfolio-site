import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const styles = {
  header: {
    margin: "0 0 -.5rem 0",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: ".5rem 0 0 0",
    textAlign: "center",
  },
  profileButtons: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

const Contact = ({ classes, isDarkMode }) => {
  const iconColor = { color: isDarkMode ? "white" : "#777" };
  return (
    <div className={classes.contactContainer}>
      <h1 className={classes.header}>KEVIN BLAIR</h1>

      <div className={classes.headerContact}>
        <div>
          <div>Chicago, IL 60614</div>
          <div>847-845-4635</div>
          <div>kblair40@gmail.com</div>
        </div>
        <div>
          <IconButton
            onClick={() => window.open("https://www.github.com/kblair40")}
          >
            <GitHubIcon style={iconColor} fontSize="large" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/kevin-blair-74525935")
            }
          >
            <LinkedInIcon style={iconColor} fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Contact);
