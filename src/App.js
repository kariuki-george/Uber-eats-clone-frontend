import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Home from "./restaurant/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/business">
            Business page is still under construction
          </Route>
          <Route path="/driver">Driver page is still under construction</Route>
          <Route path="/restaurant">
            <Home />
          </Route>
          <Route path="*">
            error: this page does not exist or access is forbidden
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
