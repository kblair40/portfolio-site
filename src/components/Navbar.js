import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import ThemeModeSwitch from "./ThemeModeSwitch";
import { useSelector } from "react-redux";

import NavButton from "./NavButton";

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: "1rem",
  },
  navBtns: {
    width: "15rem",
    display: "flex",
    justifyContent: "space-evenly",
  },
  grow: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
  },
  darkBg: {
    backgroundColor: "#121212",
    color: "#fff",
  },
  lightBg: {
    backgroundColor: "#f5f5f5", //light mode background
    color: "#424242",
  },
  selectedDark: {
    textDecoration: "none",
    color: "white",
  },
  selectedLight: {
    textDecoration: "none",
    color: "black",
  },
  logo: {
    // minWidth: "10rem",
  },
}));
export default function Navbar(props) {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme.theme === "dark";
  const classes = useStyles();
  const navLinkStyle = {
    textDecoration: "none",
    color: !isDarkMode ? "#424242" : "white",
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={isDarkMode ? classes.darkBg : classes.lightBg}
      >
        <Toolbar>
          <div className={classes.logo}>
            <NavLink activeStyle={navLinkStyle} to="/">
              <Logo />
            </NavLink>
          </div>

          <div className={classes.grow}>
            <div className={classes.navBtns}>
              <NavButton
                isDarkMode={isDarkMode}
                endpoint="/about"
                buttonText="About"
                activeStyle={navLinkStyle}
              />
              <NavButton
                isDarkMode={isDarkMode}
                endpoint="/hireme"
                buttonText="Hire Me"
                activeStyle={navLinkStyle}
              />
            </div>
          </div>
          {/* <Button color="inherit">Login</Button> */}
          <ThemeModeSwitch isDarkMode={isDarkMode} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
