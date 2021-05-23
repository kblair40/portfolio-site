import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Navbar";

//  "#202124" - Darkest Gray -
//  "#0A0924" - Darkest Navy Blue - current Navbar background
//  "#0C082B" - Lighter Navy Blue - use for body?

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        {/* <Switch>
      
      <Route 
        exact 
        path="/"
        render = {(routeProps) => ()}
      />
    </Switch> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
