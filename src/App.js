import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Landing from "./landing/Landing";
import Restaurant from "./restaurant/Home";
import Home from "./home/Home";
import { useState, useEffect } from "react";
import Login from "./login/Login";
import Register from "./login/Register";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dark, setDark] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    dark
      ? document.body.classList.add("dark")
      : document.body.classList.add("light");
  }, [dark]);
  const login = () => {
    !loggedIn && history.push("/login");
    return loggedIn;
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/landing" exact>
            <Landing />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/business">
            Business page is still under construction
          </Route>
          <Route path="/driver">Driver page is still under construction</Route>
          <Route path="/restaurant">
            <Restaurant />
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
