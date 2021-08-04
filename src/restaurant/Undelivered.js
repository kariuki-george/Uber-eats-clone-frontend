import React from "react";
import Orderlist from "./Orderlist";
import "./Undelivered.scss";

function Undelivered() {
  return (
    <div className="undelivered">
      <header>
        <span>Your undelivered orders</span>
        <button>refresh</button>
      </header>
      <Orderlist inputList={[]} />
    </div>
  );
}

export default Undelivered;
