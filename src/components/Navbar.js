import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import ThemeModeSwitch from "./ThemeModeSwitch";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: "1rem",
  },
  grow: {
    display: "flex",
    flexGrow: 1,
  },
  darkBg: {
    backgroundColor: "#424242",
    color: "#fff",
  },
  lightBg: {
    backgroundColor: "#f5f5f5", //light mode background
    color: "#424242",
  },
  navBtn: {
    textTransform: "none",
    textDecoration: "none",
  },
  selectedDark: {
    textDecoration: "none",
    color: "white",
  },
  selectedLight: {
    textDecoration: "none",
    color: "black",
  },
}));
export default function Navbar(props) {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme.theme === "dark";
  console.log("CURRENT THEME - FROM NAVBAR =", theme);
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
          <NavLink activeStyle={navLinkStyle} to="/">
            <Logo />
          </NavLink>

          <div className={classes.grow}>
            <Button className={classes.navBtn} color="inherit">
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
            </Button>
            <Button className={classes.navBtn} color="inherit">
              <NavLink
                style={{
                  textDecoration: "none",
                  color: isDarkMode ? "white" : "#424242",
                }}
                activeClassName={
                  isDarkMode ? classes.selectedDark : classes.selectedLight
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </Button>
          </div>

          {/* <Button color="inherit">Login</Button> */}
          <ThemeModeSwitch isDarkMode={isDarkMode} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
