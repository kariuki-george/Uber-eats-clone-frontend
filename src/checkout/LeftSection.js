import React from "react";
import "./LeftSection.scss";
import Navbar from "./Navbar";

function LeftSection() {
  return (
    <div className="leftSection">
      <Navbar />
      <h3>Dam View Res</h3>
      <div className="map">map</div>
      <div className="location">
        <div>
          <h5>Kinoo</h5>
          <h6>Kikuyu</h6>
        </div>
        <div>
          <h5>Meet at door</h5>
          <h6>Add delivery instructions</h6>
        </div>
      </div>
      <div className="items">
        <ul>
          <li>
            <div>
              <h6>00</h6>
              <h5>Lyonnaise Potatoes</h5>
            </div>
            <div>
              <h5>Ksh 2000</h5>
            </div>
          </li>
        </ul>
      </div>
      <input type="text" placeholder="Add a note for the store" />
    </div>
  );
}

export default LeftSection;
