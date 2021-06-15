import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const styles = {
  navBtn: {
    textTransform: "none",
    textDecoration: "none",
    fontSize: "16px",
  },
};

const NavButton = ({
  classes,
  isDarkMode,
  endpoint,
  buttonText,
  activeStyle,
}) => {
  return (
    <Button
      style={{ padding: ".5rem" }}
      className={classes.navBtn}
      color="inherit"
      variant="contained"
    >
      <NavLink
        style={{
          textDecoration: "none",
          color: isDarkMode ? "white" : "#424242",
        }}
        activeStyle={activeStyle}
        to={endpoint}
      />
      {buttonText}
    </Button>
  );
};

export default withStyles(styles)(NavButton);

{
  /* <Button
                variant="contained"
                className={classes.navBtn}
                color="inherit"
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: isDarkMode ? "white" : "#424242",
                  }}
                  activeStyle={navLinkStyle}
                  to="/about"
                >
                  About
                </NavLink>
              </Button> */
}
