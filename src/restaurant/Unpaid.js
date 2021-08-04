import React from "react";
import Orderlist from "./Orderlist";

function Unpaid() {
  return (
    <div>
      <header>
        <span>Unpaid orders</span>
        <button>refresh</button>
      </header>
      <Orderlist inputList={[]} />
    </div>
  );
}

export default Unpaid;
