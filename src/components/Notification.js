import React from "react";
import "./Notification.scss";

function Notification({ info }) {
  return <div className="notification">{info}</div>;
}

export default Notification;
