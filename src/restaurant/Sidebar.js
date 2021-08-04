import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  const { url } = useRouteMatch();
  return (
    <div className="sidebar">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt=""
      />
      <Link to={`${url}/orders`}>orders</Link>
      <Link to={`${url}/undelivered`}>undelivered</Link>
      <Link to={`${url}/unpaid`}>unpaid</Link>
      <Link to={`${url}/menu`}>menu</Link>
      <Link to={`${url}/statistics`}>statistics</Link>
      <Link to={`${url}/settings`}>settings</Link>
      <Link to={`${url}/logout`}>Log out</Link>
    </div>
  );
}

export default Sidebar;
