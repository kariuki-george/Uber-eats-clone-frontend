import React, { useEffect, useState } from "react";
import "./LeftSection.scss";
import Navbar from "./Navbar";

function LeftSection({ orders }) {
  return (
    <div className="leftSection">
      <Navbar />

      <h2>Choose where to order from</h2>

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
          {orders.map((order) => {
            return (
              <li>
                <div>
                  <h6>{order.food_amount}</h6>
                  <h5>{order.name}</h5>
                </div>
                <div>
                  <h5>{order.food_amount * order.price}</h5>
                </div>
                {orders.length > 1 && (
                  <div>
                    <input type="checkbox" name="" id="" />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <input type="text" placeholder="Add a note for the store" />
    </div>
  );
}

export default LeftSection;
