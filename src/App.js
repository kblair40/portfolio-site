import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Navbar";

// about, work, digital resume

function App() {
  return (
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
  );
}

export default App;
