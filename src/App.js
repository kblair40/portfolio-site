import React from "react";
import { Route, Switch } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import PageContainer from "./components/PageContainer";
import ContactForm from "./components/ContactForm";
import { ThemeProvider } from "./context/ThemeContext";
import { withStyles } from "@material-ui/core/styles";
import About from "./components/About";
import Navbar from "./components/Navbar";

// Home (Top - About, Then links to projects)
// Contact / Resume
// Build nice contact form even if it not needed

const styles = {
  App: {
    // height: "100vh",
    // backgroundColor: "#424242",
    // border: "2px solid black",
  },
};

function App(props) {
  const { classes } = props;
  return (
    <ThemeProvider>
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/contact"
            // render = {(routeProps) => ()}
          >
            <ContactForm />
          </Route>
          <Route
            exact
            path="/"
            // render = {(routeProps) => ()}
          >
            <PageContainer />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
