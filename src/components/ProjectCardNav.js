import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  container: {
    width: "100%",
    height: "2rem",
    background: "#ddd",
    display: "flex",
    alignItems: "center",
    borderTopLeftRadius: "2%",
    borderTopRightRadius: "2%",
  },
  button: {
    height: "0.8rem",
    width: "0.8rem",
    borderRadius: "50%",
    margin: "0 0.2rem",
  },
  btnContainer: {
    display: "flex",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    background: "#ff5f57",
  },
  minus: {
    background: "#ffbd2e",
  },
  expand: {
    background: "#28ca41",
  },
};

const ProjectCardNav = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.btnContainer}>
        <div className={`${classes.close} ${classes.button}`}></div>
        <div className={`${classes.minus} ${classes.button}`}></div>
        <div className={`${classes.expand} ${classes.button}`}></div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProjectCardNav);
