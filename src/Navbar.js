import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ThemeModeSwitch from "./ThemeModeSwitch";
import { ThemeContext } from "./context/ThemeContext";

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: "1rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  darkBg: {
    backgroundColor: "#424242",
    color: "#fff",
  },
  lightBg: {
    backgroundColor: "#f5f5f5",
    color: "#424242",
  },
  navBtn: {
    textTransform: "none",
  },
}));
// #f5f5f5 light mode background
export default function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={isDarkMode ? classes.darkBg : classes.lightBg}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            K.B.
          </Typography>
          <div className={classes.grow}>
            <Button className={classes.navBtn} color="inherit">
              About
            </Button>
            <Button className={classes.navBtn} color="inherit">
              Contact
            </Button>
          </div>

          {/* <Button color="inherit">Login</Button> */}
          <ThemeModeSwitch isDarkMode={isDarkMode} handleChange={toggleTheme} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
