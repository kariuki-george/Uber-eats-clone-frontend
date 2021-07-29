import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h4>Hello manigga.....this is it</h4>
      <Router>
        <Switch>
          <Route path="/" exact>
            home
          </Route>
          <Route path="/about">about</Route>
          <Route path="/*">error</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
