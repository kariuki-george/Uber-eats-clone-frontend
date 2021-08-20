import "./App.scss";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
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
import { useEffect } from "react";
import Login from "./login/Login";
import Register from "./login/Register";
import Hotel from "./hotel/Hotel";
import Checkout from "./checkout/Checkout";
import Backdrop from "./components/Backdrop";
import Slider from "./components/Slider";

function App() {
  const { theme } = useSelector((state) => state.theme);

  const history = useHistory();

  useEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    theme === ".dark"
      ? document.body.classList.add("dark")
      : document.body.classList.add("light");
  }, [theme]);

  return (
    <div className="App">
      <Toaster />

      <Router>
        <Slider />
        <Backdrop />
        <Switch>
          <Route path="/landing" exact>
            <Landing />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/restaurant">
            <Restaurant />
          </Route>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
          <PrivateRoute exact path="/hotel:id" component={Hotel} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/landing", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default App;
