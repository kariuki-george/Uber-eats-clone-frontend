import React from "react";
import './Cart'
function Cart() {
  return (
    <div className="cart">
      <div className="top">
        <h3>x</h3>
        <h4>Dam view Restaurant</h4>
      </div>
      <ul>
        <li>
          <h6>00</h6>
          <h5>order</h5>
          <h5>Ksh 440</h5>
        </li>
      </ul>
      <span>
        <h5>Request utensils, straws, etc. </h5>
        <input type="checkbox" name="" id="" />
      </span>
      <button>Go to checkout. Ksh 2000</button>
    </div>
  );
}

export default Cart;
