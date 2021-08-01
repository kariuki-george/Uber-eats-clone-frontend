import React from "react";
import { Link } from "react-router-dom";
import "./Map.scss";

function Map() {
  return (
    <div className="map">
      <div className="top">
        <span>Cities near me</span>
        <Link>View all 500+ cities</Link>
      </div>
      <div className="map">map</div>
    </div>
  );
}

export default Map;
