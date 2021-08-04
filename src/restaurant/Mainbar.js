import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "./Mainbar.scss";
import Menu from "./Menu";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import Orders from "./Orders";
import Undelivered from "./Undelivered";
import Statistics from "./Statistics";
import Settings from "./Settings";
import LogOut from "./LogOut";
import Unpaid from "./Unpaid";

function Mainbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const { path } = useRouteMatch();

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const Page = () => {
    const { pageId } = useParams();
    var page;
    switch (pageId.toString()) {
      case "menu":
        return (page = <Menu />);
      case "orders":
        return (page = <Orders />);
      case "settings":
        return (page = <Settings />);
      case "logout":
        return (page = <LogOut />);
      case "unpaid":
        return (page = <Unpaid />);
      case "undelivered":
        return (page = <Undelivered />);
      case "statistics":
        return (page = <Statistics />);
      default:
        return (page = <Orders />);
    }
    return <div>{<page />}</div>;
  };

  return (
    <div className="mainbar" style={{ width: `${width - 300}px` }}>
      <Switch>
        <Route path={`${path}/:pageId`}>
          <div>
            <Page />
          </div>
        </Route>
      </Switch>

      <div style={{ height: "900px" }}></div>
      <Footer />
    </div>
  );
}

export default Mainbar;
