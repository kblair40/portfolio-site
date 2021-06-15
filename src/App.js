import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import ProjectCardsContainer from "./components/ProjectCardsContainer";

// Darkest = #121212
// Second Darkest = #424242
// Third Darkest = #535353

const styles = {
  dark: {
    overflowY: "auto",
    backgroundColor: "#313131",
  },
  light: {
    backgroundColor: "#fff",
  },
};

function App(props) {
  const { classes } = props;
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme.theme === "dark";
  return (
    <div className={isDarkMode ? classes.dark : classes.light}>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/hireme"
          // render = {(routeProps) => ()}
        >
          <Resume />
        </Route>
        <Route
          exact
          path="/"
          // render = {(routeProps) => ()}
        >
          <ProjectCardsContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);
